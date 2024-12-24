from fastapi import FastAPI, File, Form, UploadFile
app = FastAPI()

@app.post("/upload_frame/")
async def upload_frame(
    frame_id: int = Form(...), 
    time_stamp: str = Form(...), 
    frame: UploadFile = File(...)
):
    return {
        "message": "Frame received successfully",
        "frame_id": frame_id,
        "time_stamp": time_stamp,
    }
