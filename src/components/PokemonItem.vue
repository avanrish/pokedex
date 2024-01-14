<script setup lang="ts"></script>

<template>
  <li class="flex items-center justify-between rounded-lg border px-4 py-2 shadow-sm">
    <h3 class="font-medium">Bulbasaur</h3>
    <div class="flex items-center gap-x-4">
      <p class="text-sm text-green-500">In team</p>
      <button
        type="button"
        class="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Details
      </button>
    </div>
  </li>
</template>
