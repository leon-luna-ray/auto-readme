<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
const ui = useUiStore()
const { theme } = storeToRefs(ui)

useHead({
  bodyAttrs: {
    class: theme || 'hacker'
  },
  title: 'Auto-README',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Automatically generated README.md files' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' },
    { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#000000' }
  ],
})
</script>
