<template>
  <div id="vue-app" :class="['h-screen container py-[1rem]', theme]">
    <header class="flex justify-between items-center">
      <h1>ReadMe Generator</h1>
      <div class="theme-controls flex gap-x-[1rem]">
        <div class="theme-btn bg-hacker-green" @click="setTheme('hacker')"></div>
        <div class="theme-btn bg-bsod-blue border border-white" @click="setTheme('bsod')"></div>
        <div class="theme-btn bg-white border border-black" @click="setTheme('')"></div>
      </div>
    </header>
    <div class="main flex flex-col gap-y-[2rem]">
      <TerminalText :string="content.intro" :speed="500" />
      <TerminalText :string="content.ready_text" :speed="500" :delay="2000" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { content } from './lib/content'

import TerminalText from './components/TerminalText.vue'

const theme = ref('hacker');

const setTheme = (value) => {
  theme.value = value;
}
</script>
