import tailwindcss from "@tailwindcss/vite";

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
  ],
  runtimeConfig: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
