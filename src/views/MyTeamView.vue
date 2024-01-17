<script setup lang="ts">
import { onMounted } from 'vue';
import type { TeamPokemon } from '@/types/team';
import { useLocalStorage } from '@vueuse/core';

const team = useLocalStorage<TeamPokemon[]>('team', []);

onMounted(() => {
  document.title = 'My Team | Pokédex';
});
</script>

<template>
  <main class="mx-auto flex w-full max-w-screen-md grow flex-col overflow-y-auto p-4">
    <div v-if="team.length === 0" class="text-center font-medium">
      You don't have any pokemons added
    </div>
    <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div
        :key="pokemon.name"
        v-for="pokemon in team"
        class="flex flex-col items-center rounded-md border p-4"
      >
        <p class="capitalize">{{ pokemon.name }}</p>
        <img class="size-24" :src="pokemon.image" :alt="pokemon.name" />
      </div>
    </div>
  </main>
</template>
