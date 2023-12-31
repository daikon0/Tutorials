from fastapi import APIRouter

router = APIRouter()

@router.get("/tasks")
async def get_tasks():
    pass

@router.post("/tasks")
async def create_task():
    pass

@router.put("/tasks/{id}")
async def update_task():
    pass

@router.delete("/tasks/{id}")
async def delete_task():
    pass