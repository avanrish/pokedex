<template>
  <main class="mx-auto flex w-full max-w-screen-md grow flex-col overflow-y-auto p-4">
    <search-input />
    <ul class="space-y-2">
      <pokemon-item />
      <pokemon-item />
    </ul>
  </main>
  <pokedex-pagination />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SearchInput from '@/components/SearchInput.vue';
import PokemonItem from '@/components/PokemonItem.vue';
import PokedexPagination from '@/components/PokedexPagination.vue';

onMounted(() => {
  document.title = 'Pokèdex';
});
</script>
