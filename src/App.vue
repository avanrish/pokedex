<script setup lang="ts">
import { RouterView } from 'vue-router';
import PokedexHeader from '@/components/PokedexHeader.vue';
</script>

<template>
  <pokedex-header />
  <router-view />
</template>
