<template>
  <main class="mx-auto flex w-full max-w-screen-md grow flex-col overflow-auto p-4">
    <search-input />
    <div class="grid gap-4 sm:grid-cols-2">
      <pokemon-card />
      <pokemon-card />
    </div>
  </main>
  <pagination />
</template>

<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import Pagination from '@/components/Pagination.vue';

document.title = 'Pokèdex';
</script>
