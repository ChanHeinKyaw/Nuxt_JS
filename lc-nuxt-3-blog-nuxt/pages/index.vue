<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
//const { data: posts } = await useFetch('/api/posts', {
//  baseURL: 'http://127.0.0.1:8000',
//})
//const nuxtApp = useNuxtApp()

const posts = await useNuxtApp().$apiFetch('/api/posts')
</script>
