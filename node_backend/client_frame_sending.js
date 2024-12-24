const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// WebSocket server URL
const wsUrl = "ws://localhost:8000/upload_frame/";

// Create a WebSocket client
const ws = new WebSocket(wsUrl);

// Directory containing the frames
const framesDir = "./frames"; // Replace with your directory path

// Frame metadata
const frameIds = Array.from({ length: 10 }, (_, i) => `frame_${i + 1}`); // Example frame IDs
const timestamp = new Date().toISOString(); // Current timestamp

// When the connection is established
ws.on('open', () => {
    console.log("WebSocket connection opened.");

    // Get all frame files
    const frameFiles = fs.readdirSync(framesDir).filter(file => file.endsWith('.jpg'));
    const framesToSend = frameFiles.slice(0, 10); // Limit to 10 frames

    // Send each frame sequentially
    framesToSend.forEach((frameFile, index) => {
        const framePath = path.join(framesDir, frameFile);
        const imageData = fs.readFileSync(framePath);
        const imageHex = imageData.toString('hex');

        // Prepare the JSON payload
        const payload = {
            frame_id: frameIds[index],
            timestamp: timestamp,
            image: imageHex,
        };

        // Send the JSON payload
        ws.send(JSON.stringify(payload));
        console.log(`Frame ${frameIds[index]} sent.`);
    });
});

// Listen for responses from the server
ws.on('message', (data) => {
    const response = JSON.parse(data);
    console.log("Response from server:", response);

    // If the response includes a processed image, save it locally
    if (response.image && response.frame_id) {
        const processedImageBuffer = Buffer.from(response.image, 'hex');
        const outputFilePath = `processed_${response.frame_id}.jpg`;
        fs.writeFileSync(outputFilePath, processedImageBuffer);
        console.log(`Processed image saved as '${outputFilePath}'.`);
    }
});

// Handle WebSocket errors
ws.on('error', (err) => {
    console.error("WebSocket error:", err);
});

// Handle connection closure
ws.on('close', () => {
    console.log("WebSocket connection closed.");
});
