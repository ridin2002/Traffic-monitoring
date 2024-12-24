import cv2
import numpy as np
from ultralytics import YOLO
import base64
from io import BytesIO

# Initialize YOLO model
model = YOLO('yolov8n.pt')  # Ensure the YOLO model is available and correctly initialized

def encode_image_to_base64(image: np.ndarray) -> str:
    """Helper function to encode image to base64"""
    _, buffer = cv2.imencode('.jpg', image)
    buffered = BytesIO(buffer)
    encoded_image = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return encoded_image

def process_frame(frame: np.ndarray, frame_id: str, timestamp: str) -> list:
    """
    Process a frame to detect vehicles, assign vehicle IDs, and crop images around vehicles.
    
    :param frame: The frame image (OpenCV format).
    :param frame_id: The unique frame identifier.
    :param timestamp: The timestamp of the frame.
    :return: A list containing JSON objects for each detected vehicle.
    """
    vehicle_counter = 0  # Initialize counter for vehicle IDs (reset each frame)
    detected_objects = []

    # Run YOLO detection on the frame
    results = model(frame)

    # Process results and annotate image
    for box in results[0].boxes:
        if box is not None and hasattr(box, 'xyxy') and hasattr(box, 'conf') and hasattr(box, 'cls'):
            x1, y1, x2, y2 = map(int, box.xyxy[0])  # Bounding box coordinates
            confidence = float(box.conf[0])  # Confidence score
            class_index = int(box.cls[0].item())  # Class index
            label = results[0].names[class_index]  # Detected class label

            # We are interested in vehicles, so check the class label
            if label in ["car", "truck", "bus","motorcycle"]:  # You can add more vehicle types here
                vehicle_counter += 1  # Assign a unique vehicle ID
                vehicle_id = f"vehicle_{vehicle_counter}"

                # Crop the image around the detected vehicle
                cropped_vehicle_img = frame[y1:y2, x1:x2]

                # Encode the cropped vehicle image to base64
                cropped_vehicle_base64 = encode_image_to_base64(cropped_vehicle_img)

                # Add detected vehicle details to the list
                detected_objects.append({
                    "vehicle_id": vehicle_id,
                    "frame_id": frame_id,
                    "timestamp": timestamp,
                    "meta_data": {
                        "label": label,
                        "confidence": confidence,
                        "bounding_box": {"x1": x1, "y1": y1, "x2": x2, "y2": y2}
                    },
                    #"vehicle_image": cropped_vehicle_base64  # Add the cropped image in base64 format
                })

    # Return the list of detected vehicles
    return detected_objects
