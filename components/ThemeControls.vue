<template>
      <div class="theme-controls flex gap-x-[1rem]">
        <div class="theme-btn bg-hacker-green" @click="ui.setTheme('hacker')"></div>
        <div class="theme-btn bg-bsod-blue border border-white" @click="ui.setTheme('bsod')"></div>
        <div class="theme-btn bg-white border border-black" @click="ui.setTheme('')"></div>
      </div>
</template>
<script setup>

import { useUiStore } from '~/stores/ui'

const ui = useUiStore();
</script>
