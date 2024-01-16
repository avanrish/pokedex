<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';
import type { Pokemon } from '@/types/pokemon';

const props = defineProps(['url', 'close']);
const dialog = ref<HTMLDialogElement | null>(null);

const pokemon = ref<Pokemon | null>(null);

watch(
  () => props.url,
  (newUrl) => {
    if (newUrl) {
      pokemon.value = null;
      dialog.value?.showModal();
      fetchPokemon(newUrl);
    } else dialog.value?.close();
  },
);

const fetchPokemon = async (url: string) => {
  const { data } = await axios<Pokemon>(url);
  pokemon.value = data;
};
</script>

<template>
  <dialog ref="dialog">
    <div class="w-screen max-w-sm p-4">
      <div v-if="pokemon" class="flex flex-col items-center">
        <h2 class="font-medium capitalize">{{ pokemon.name }}</h2>
        <img class="my-2 size-24" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <h3>Statistics</h3>
        <table class="border-spacing-4">
          <thead>
            <tr>
              <td class="px-2 py-2 font-semibold sm:px-4">Name</td>
              <td class="mr-4 px-2 py-2 font-semibold sm:px-4">Base stat</td>
              <td class="px-2 py-2 font-semibold sm:px-4">Effort</td>
            </tr>
          </thead>
          <tbody>
            <tr :key="stats.stat.name" v-for="stats in pokemon.stats">
              <td class="px-2 py-2 sm:px-4">{{ stats.stat.name }}</td>
              <td class="px-2 py-2 sm:px-4">{{ stats.base_stat }}</td>
              <td class="px-2 py-2 sm:px-4">{{ stats.effort }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="flex flex-col items-center">
        <h2 class="h-6 w-32 animate-pulse bg-neutral-300"></h2>
        <div class="my-2 size-24 animate-pulse bg-neutral-300" />
        <h3>Statistics</h3>
        <table class="border-spacing-4">
          <thead>
            <tr>
              <td class="px-2 py-2 font-semibold sm:px-4">Name</td>
              <td class="mr-4 px-2 py-2 font-semibold sm:px-4">Base stat</td>
              <td class="px-2 py-2 font-semibold sm:px-4">Effort</td>
            </tr>
          </thead>
          <tbody>
            <tr :key="num" v-for="num in 5">
              <td class="px-2 py-2 sm:px-4">
                <div class="h-6 w-32 animate-pulse bg-neutral-300" />
              </td>
              <td class="px-2 py-2 sm:px-4">
                <div class="h-6 w-8 animate-pulse bg-neutral-300" />
              </td>
              <td class="px-2 py-2 sm:px-4">
                <div class="h-6 w-8 animate-pulse bg-neutral-300" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-2 flex gap-x-2">
        <button
          class="h-10 flex-1 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-red-400 disabled:pointer-events-none disabled:opacity-50"
        >
          Add to team
        </button>
        <form method="dialog" @submit="close" class="flex flex-1">
          <button
            class="h-10 grow rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-900/90 disabled:pointer-events-none disabled:opacity-50"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
