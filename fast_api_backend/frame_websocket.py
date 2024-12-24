from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import cv2
import numpy as np
from ultralytics import YOLO
from typing import List

app = FastAPI()

# Initialize YOLO model
model = YOLO('yolov8n.pt')  # Ensure the YOLO model is available and correctly initialized

# Store active WebSocket connections (if needed for broadcasting or multiple clients)
active_connections: List[WebSocket] = []


@app.websocket("/upload_frame/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    active_connections.append(websocket)
    try:
        while True:
            # Receive data from the client (JSON format expected)
            data = await websocket.receive_json()

            # Extract metadata and base64-encoded image from the received JSON
            frame_id = data.get("frame_id")
            timestamp = data.get("timestamp")
            image_bytes = data.get("image")  # Base64-encoded image string

            # Decode base64 image to bytes
            if not image_bytes:
                await websocket.send_json({"error": "Image data is missing"})
                continue

            image_data = np.frombuffer(bytes.fromhex(image_bytes), np.uint8)

            # Decode the image data to OpenCV format
            img = cv2.imdecode(image_data, cv2.IMREAD_COLOR)

            if img is None:
                await websocket.send_json({"error": "Failed to decode image"})
                continue

            # Run YOLO detection on the frame
            results = model(img)

            detected_objects = []

            # Process results and annotate image
            for box in results[0].boxes:
                if box is not None and hasattr(box, 'xyxy') and hasattr(box, 'conf') and hasattr(box, 'cls'):
                    x1, y1, x2, y2 = map(int, box.xyxy[0])  # Bounding box coordinates
                    confidence = float(box.conf[0])  # Confidence score
                    class_index = int(box.cls[0].item())  # Class index
                    label = results[0].names[class_index]  # Detected class label

                    # Draw the bounding box
                    cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    cv2.putText(img, f"{label} {confidence:.2f}", (x1, y1 - 10),
                                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

                    # Add detected object details to the list
                    detected_objects.append({
                        "label": label,
                        "confidence": confidence,
                        "bounding_box": {"x1": x1, "y1": y1, "x2": x2, "y2": y2}
                    })

            # Encode the annotated image back to bytes
            _, buffer = cv2.imencode('.jpg', img)
            if not _:
                await websocket.send_json({"error": "Failed to encode the processed image"})
                continue

            processed_image_data = buffer.tobytes()

            # Send back the results
            await websocket.send_json({
                "frame_id": frame_id,
                "timestamp": timestamp,
                "detected_objects": detected_objects,
               # "image": processed_image_data.hex()  # Send processed image as hex string
            })

    except WebSocketDisconnect:
        active_connections.remove(websocket)


