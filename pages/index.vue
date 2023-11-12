<script setup>
const { data } = await useFetch("/api/1");
const { data: todos } = await useFetch("https://dummyjson.com/todos");
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <pre>
    {{ data }}
  </pre>
  <pre>
    {{ todos }}
  </pre>
</template>
