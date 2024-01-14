<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="relative mb-4 rounded-md text-gray-400 shadow-sm focus-within:text-red-500">
    <div class="pointer-events-none absolute inset-0 flex items-center pl-3">
      <magnifying-glass-icon class="size-5" aria-hidden="true" />
    </div>
    <input
      type="text"
      name="query"
      class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
      placeholder="Search..."
    />
  </div>
</template>
