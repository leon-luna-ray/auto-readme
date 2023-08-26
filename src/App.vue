<template>
  <div class="h-screen blue-border hi">
    <div class="p-[1rem] m-[2rem] red-border">Readme Generator</div>
    <div class="terminal font-mono border border-gray-300 p-4">
      <div v-for="(line, index) in lines" :key="index" class="animate-line-reveal relative">
        {{ line }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const lines = ref([
  "Welcome to the Vue Terminal Component!",
  "This is line 2.",
  "And this is the third line.",
])
</script>
