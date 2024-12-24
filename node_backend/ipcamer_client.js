const WebSocket = require('ws');
const cv = require('opencv4nodejs');

// WebSocket server URL
const wsUrl = "ws://localhost:8000/upload_frame/";

// RTSP stream URL
const rtspUrl = "rtsp://<USERNAME>:<PASSWORD>@<IP_CAMERA_IP>:<PORT>/<STREAM_PATH>"; // Replace with your camera details

// Create a WebSocket client
const ws = new WebSocket(wsUrl);

// Capture frames from the RTSP stream and send them to the WebSocket server
function streamFromRtspCamera() {
    // Open the RTSP stream
    const cap = new cv.VideoCapture(rtspUrl);
    cap.set(cv.CAP_PROP_FRAME_WIDTH, 640); // Set frame width (optional)
    cap.set(cv.CAP_PROP_FRAME_HEIGHT, 480); // Set frame height (optional)

    // Read frames in a loop
    const frameInterval = 100; // Frame interval in milliseconds
    setInterval(async () => {
        const frame = cap.read();

        if (frame.empty) {
            console.error("Failed to capture frame. Retrying...");
            return;
        }

        // Encode the frame to JPEG
        const encodedImage = cv.imencode('.jpg', frame).toString('base64');

        // Prepare the WebSocket payload
        const payload = {
            frame_id: `frame-${Date.now()}`, // Unique frame ID based on timestamp
            timestamp: new Date().toISOString(), // Current timestamp
            image: encodedImage, // Base64-encoded image
        };

        // Send the payload to the WebSocket server
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(payload));
            console.log(`Frame sent: ${payload.frame_id}`);
        } else {
            console.error("WebSocket connection is not open.");
        }
    }, frameInterval); // Capture frames at regular intervals
}

// WebSocket event handlers
ws.on("open", () => {
    console.log("WebSocket connection opened.");
    streamFromRtspCamera();
});

ws.on("message", (message) => {
    console.log("Received acknowledgment from server:", message);
});

ws.on("error", (error) => {
    console.error("WebSocket error:", error);
});

ws.on("close", () => {
    console.log("WebSocket connection closed.");
});
