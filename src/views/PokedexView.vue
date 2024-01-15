<template>
  <main class="mx-auto flex w-full max-w-screen-md grow flex-col overflow-y-auto p-4">
    <ul class="space-y-2">
      <template v-if="isLoading">
        <pokemon-item v-for="index in 10" :key="index" :pokemon="null" />
      </template>
      <template v-else>
        <template v-if="pokemons.length === 0">
          <li class="flex items-center justify-center rounded-lg border px-4 py-2 shadow-sm">
            <h3 class="font-medium">No results found</h3>
          </li>
        </template>
        <template v-else>
          <pokemon-item v-for="pokemon in pokemons" :key="pokemon" :pokemon="pokemon.name" />
        </template>
      </template>
    </ul>
  </main>
  <pokedex-pagination />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

import PokemonItem from '@/components/PokemonItem.vue';
import PokedexPagination from '@/components/PokedexPagination.vue';

const isLoading = ref(true);
const pokemons = ref<{ name: string; url: string }[]>([]);

const fetchPokemons = async () => {
  const { data } = await axios('https://pokeapi.co/api/v2/pokemon', { params: {} });
  pokemons.value = data.results;
  isLoading.value = false;
};

onMounted(() => {
  document.title = 'Pokèdex';
});

fetchPokemons();
</script>
