<template>
      <div class="theme-controls flex gap-x-[1rem]">
        <div class="theme-btn bg-hacker-green" @click="globalStore.setTheme('hacker')"></div>
        <div class="theme-btn bg-bsod-blue border border-white" @click="globalStore.setTheme('bsod')"></div>
        <div class="theme-btn bg-white border border-black" @click="globalStore.setTheme('')"></div>
      </div>
</template>
<script setup>
import { useGlobalStore } from '../stores/global'

const globalStore = useGlobalStore();
</script>
