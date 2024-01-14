<script setup lang="ts">
import { Routes } from '@/util/enum/routes';
</script>

<template>
  <header class="bg-red-500 text-white">
    <div class="mx-auto flex max-w-screen-md items-center justify-between p-4">
      <h1 class="text-2xl font-bold">Pokedex</h1>
      <nav class="flex gap-4">
        <router-link
          class="font-semibold hover:underline"
          active-class="underline"
          :to="Routes.Pokedex"
          >Pokedex</router-link
        >
        <router-link
          class="font-semibold hover:underline"
          active-class="underline"
          :to="Routes.MyTeam"
          >My Team</router-link
        >
      </nav>
    </div>
  </header>
</template>
