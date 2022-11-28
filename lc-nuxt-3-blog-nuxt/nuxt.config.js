export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  modules: ['@nuxtjs/tailwindcss']
})