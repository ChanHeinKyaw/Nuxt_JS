import Cookies from 'js-cookie'
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  //nuxtApp.provide('apiFetch', $fetch.create({ baseURL: config.BASE_URL }))
  nuxtApp.provide('apiFetch', $fetch.create({ baseURL: 'http://localhost:8000', credentials:'include',headers:{
    Accept: 'application/json',
    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
  } }))
})