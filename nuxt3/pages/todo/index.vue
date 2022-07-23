<template>
  <h1>TODO</h1>
  <form @submit.prevent="addTodo">
    <div>
      <label for="title">Title</label>
    </div>
    <input type="text" id="title" v-model="title" />
    <button type="submit">Submit</button>
  </form>

  <table>
    <tbody>
      <tr v-for="todo in todoList" :key="todo.id">
        <td>
          {{ todo.title }}
        </td>
        <td>
          <button @click="deleteTodo(todo.id)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Todo {
  id: number;
  title: string;
}

let todoList = reactive<Todo[]>([]);
let title = ref("");
let nextTodoId = ref(1);

const addTodo = () => {
  todoList.unshift({
    id: nextTodoId.value,
    title: title.value,
  });
  title.value = "";
  nextTodoId.value++;
};

const deleteTodo = (id: number) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList.splice(index, 1);
};
</script>