import cv2
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import numpy as np
from typing import List
from redis_handler import RedisHandler 
from vehicle_detection import process_frame  # Import the process_frame function

app = FastAPI()

redis_handler = RedisHandler(host="localhost", port=6379, db=0)

# Store active WebSocket connections (if needed for broadcasting or multiple clients)
active_connections: List[WebSocket] = []


@app.websocket("/upload_frame/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connection accepted.")
    active_connections.append(websocket)

    try:
        while True:
            # Receive data from the client (JSON format expected)
            data = await websocket.receive_json()
            #print(f"Received data: {data}")  # Log the received data


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

            # Use the vehicle detection function to process the frame
            response = process_frame(img, frame_id, timestamp)
            # Push each detected object to the Redis queue
            for obj in response:
                redis_payload = {
                    "vehicle_id": obj["vehicle_id"],
                    "frame_id": obj["frame_id"],
                    "timestamp": obj["timestamp"],
                    "meta_data": obj["meta_data"],
                }
                redis_handler.push_to_queue("vehicle_queue", redis_payload)  # Push to Redis queue


            # Send back the results as JSON
            await websocket.send_json(response)

    except WebSocketDisconnect:
        active_connections.remove(websocket)
