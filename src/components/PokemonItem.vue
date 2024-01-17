<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import type { TeamPokemon } from '@/types/team';
import { computed } from 'vue';

const props = defineProps(['pokemon', 'setUrl']);

const team = useLocalStorage<TeamPokemon[]>('team', []);

const isInTeam = computed(() => team.value.findIndex((p) => p.name === props.pokemon) > -1);
</script>

<template>
  <li class="flex items-center justify-between rounded-lg border px-4 py-2 shadow-sm">
    <h3 v-if="pokemon" class="font-medium capitalize">{{ pokemon }}</h3>
    <h3 v-else class="h-6 w-32 animate-pulse rounded bg-neutral-300"></h3>
    <div class="flex items-center gap-x-4">
      <p v-if="isInTeam" class="text-sm text-green-500">In team</p>
      <button
        type="button"
        class="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:opacity-50"
        :disabled="!setUrl"
        @click="setUrl"
      >
        Details
      </button>
    </div>
  </li>
</template>
