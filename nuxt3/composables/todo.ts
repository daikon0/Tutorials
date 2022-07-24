import type { Todo } from '~/types/todo'

export const useTodos = () => {
  const nextTodoId = useState<number>('nextTodoId', () => 1)
  const todoList = useState<Todo[]>('todoList', () => [])

  const addTodo = (title: string) => {
    todoList.value.unshift({
      id: nextTodoId.value,
      title: title,
    })
    nextTodoId.value++
  }

  const deleteTodo = (id: number) => {
    const index = todoList.value.findIndex((todo) => todo.id === id);
    todoList.value.splice(index, 1);
  };

  return {
    todoList: readonly(todoList),
    deleteTodo,
    addTodo
  }
}