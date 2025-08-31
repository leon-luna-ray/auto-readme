<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup>
import { useHead } from '#app'
import { useUiStore } from '~/stores/ui'

const ui = useUiStore()

useHead({
  bodyAttrs: {
    class: ui.theme
  }
})
</script>
