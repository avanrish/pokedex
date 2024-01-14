<script setup lang="ts"></script>

<template>
  <div class="bg-gray-100 p-4">
    <div class="mx-auto flex max-w-4xl items-center justify-center gap-4">
      <button
        class="h-10 rounded-md border bg-white px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
      >
        Previous
      </button>
      <p class="mx-2 text-center text-sm text-gray-500">Page 1 of 10</p>
      <button
        class="h-10 rounded-md border bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-900/90 disabled:pointer-events-none disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>
