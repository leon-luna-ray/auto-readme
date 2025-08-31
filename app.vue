<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
import { useHead } from '#app'
import { useUiStore } from '~/stores/ui'

const ui = useUiStore()

useHead({
  bodyAttrs: {
    class: ui.theme
  }
})
</script>
