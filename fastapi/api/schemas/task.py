import datetime
from pydantic import BaseModel, Field


class TaskBase(BaseModel):
    title: str | None = Field(None, example="クリーニングを取りに行く")
    due_date: datetime.date | None = Field(None, example="2021-08-01")


class TaskCreate(TaskBase):
    pass


class TaskCreateResponse(TaskCreate):
    id: int


class Task(TaskBase):
    id: int
    done: bool = Field(False, description="完了フラグ")

    class Config:
        orm_mode = True
