<template>
  <table>
    <tbody>
      <tr v-for="todo in todoList" :key="todo.id">
        <td>
          {{ todo.title }}
        </td>
        <td>
          <button @click="handleClick(todo.id)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const { todoList, deleteTodo } = useTodos();

const handleClick = (id: number) => {
  deleteTodo(id);
};
</script>