<script setup>
const { data, error } = await useFetch("/api/150");
const { data: todos } = await useFetch("https://dummyjson.com/todos");
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <pre v-if="data">
    {{ data }}
  </pre>
  <div v-else>
    <p>{{ error }}</p>
  </div>
  <pre>
    {{ todos }}
  </pre>
</template>
