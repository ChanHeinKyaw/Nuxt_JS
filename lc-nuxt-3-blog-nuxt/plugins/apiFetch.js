export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  //nuxtApp.provide('apiFetch', $fetch.create({ baseURL: config.BASE_URL }))
  nuxtApp.provide('apiFetch', $fetch.create({ baseURL: 'http://localhost:8000' }))
})