from fastapi import FastAPI, File, UploadFile, Form
import io
import cv2
import numpy as np
from ultralytics import YOLO

app = FastAPI()

# Initialize YOLO model
model = YOLO('yolov8n.pt')  # Make sure yolov8n.pt is available

# Route to upload a frame with metadata
@app.post("/upload_frame/")
async def upload_frame(
    frame_id: str = Form(...),
    timestamp: str = Form(...),
    file: UploadFile = File(...),
):
    # Read the image file content
    image_data = await file.read()

    # Convert the image data to a NumPy array
    np_img = np.frombuffer(image_data, np.uint8)

    # Decode the image to OpenCV format
    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

    if img is None:
        return {"error": "Failed to decode image"}

    # Run YOLO detection on the frame
    results = model(img)

    detected_objects = []

    # Draw bounding boxes on the image
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

            # Add the detected object details to the list
            detected_objects.append({
                "label": label,
                "confidence": confidence,
                "bounding_box": {"x1": x1, "y1": y1, "x2": x2, "y2": y2}
            })

    # Encode the processed image to send back to the client
    _, buffer = cv2.imencode('.jpg', img)
    if not _:
        return {"error": "Failed to encode the processed image"}

    # Convert buffer to bytes
    processed_image_data = buffer.tobytes()

    # Return the metadata, detected objects, and processed image
    return {
        "frame_id": frame_id,
        "timestamp": timestamp,
        "filename": file.filename,
        "content_type": file.content_type,
        "detected_objects": detected_objects,  # List of detected vehicles
    }
