<template>
  <v-card class="pa-5 bg-white">
    <form @submit.prevent="handleSubmit">
      <label for="title"></label>
      <input v-model="title" id="title" type="text" />
      <button type="submit">Add</button>
    </form>
  </v-card>
</template>

<script setup lang="ts">
const title = ref("");
const body = ref("");

const { addTodo } = useTodos();
const handleSubmit = () => {
  addTodo(title.value);
  title.value = "";
  body.value = "";
};
</script>