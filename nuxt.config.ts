// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-09-19",
  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss"
  ],
  // runtimeConfig: {
  //   SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  // }
})
