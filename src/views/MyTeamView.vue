<template>
  <div>
    <h1>This is a team page</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'My Team | Pokèdex';
});
</script>
