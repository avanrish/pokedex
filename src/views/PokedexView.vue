<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

import PokemonItem from '@/components/PokemonItem.vue';
import PokedexPagination from '@/components/PokedexPagination.vue';
import type { PokemonsResult } from '@/types/pokemons-result';

const limit = 20;

const isLoading = ref(true);
const pokemons = ref<{ name: string; url: string }[]>([]);
const currentPage = ref(1);
const totalPages = ref(1);

const fetchPokemons = async () => {
  isLoading.value = true;
  const { data } = await axios<PokemonsResult>('https://pokeapi.co/api/v2/pokemon', {
    params: { limit, offset: (currentPage.value - 1) * limit },
  });
  totalPages.value = Math.ceil(data.count / limit);
  pokemons.value = data.results;
  isLoading.value = false;
};

const previous = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const next = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

watch(currentPage, fetchPokemons);

onMounted(() => {
  document.title = 'Pokèdex';
});

fetchPokemons();
</script>

<template>
  <main class="mx-auto flex w-full max-w-screen-md grow flex-col overflow-y-scroll p-4">
    <ul class="space-y-2">
      <template v-if="isLoading">
        <pokemon-item v-for="index in 20" :key="index" :pokemon="null" />
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
  <pokedex-pagination
    :current-page="currentPage"
    :total-pages="totalPages"
    :previous="previous"
    :next="next"
  />
</template>
