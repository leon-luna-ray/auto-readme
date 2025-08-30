<template>
  <Header />
  <NuxtPage />
</template>

<script setup>
import { useHead } from '#app'
import { useGlobalStore } from '~/stores/store'

const globalStore = useGlobalStore()

useHead({
  bodyAttrs: {
    class: globalStore.theme
  }
})
</script>
