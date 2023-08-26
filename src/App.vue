<template>
  <div id="vue-app" :class="['h-screen container py-[1rem]', globalStore.theme]">
    <header class="flex justify-between items-center">
      <h1>ReadMe</h1>
      <ThemeControls/>
    </header>
    <div class="main flex flex-col gap-y-[2rem]">
      <TerminalText :string="content.intro" :speed="500" />
      <TerminalText :string="content.ready_text" :speed="500" :delay="2000" ref="startTextRef" />
      <h4 v-if="startTextRef">Ref Active</h4>
      <form v-if="isFormActive" action="submit" class="flex flex-col gapp-y-[1rem]">
        <label for="title">What is the project title?</label>
        <input type="text" for="title" class="outline-none">
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useGlobalStore } from './stores/global'
import { content } from './lib/content'

import ThemeControls from './components/ThemeControls.vue'
import TerminalText from './components/TerminalText.vue'
const globalStore = useGlobalStore();

const startTextRef = ref(null);
const isFormActive = ref(false);
</script>
