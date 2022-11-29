<template>
    <div class="container mx-auto w-1/2 py-8">
      <ul
        v-if="errors.length > 0"
        className="mb-4 list-disc list-inside text-sm text-red-600"
      >
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
      <form action="#" class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block font-semibold">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="px-2 py-2 w-full shadow rounded mt-2"
          />
        </div>
  
        <div>
          <label for="password" class="block font-semibold">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="px-2 py-2 w-full shadow rounded mt-2"
          />
        </div>
        <div>
          <button
            type="submit"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
          >
            Login
          </button>
          <span v-show="isLoading">Loading</span>
        </div>
      </form>
    </div>
  </template>
  
<script setup>
definePageMeta({
    middleware: ['guest']
})
const email = ref('')
const password = ref('')
const errors = ref([])
const isLoading = ref(false);

const {$apiFetch} = useNuxtApp();

async function csrf(){
    return $apiFetch('/sanctum/csrf-cookie')
}

async function login() {
    isLoading.value = true;
    await csrf();
    try{
        await $apiFetch('/login', {
        method: 'POST',
        body: {
            email: email.value,
            password: password.value,
        },
    })
  
    const user = await $apiFetch('/api/user')
    const { setUser } = useAuth();
    setUser(user.name);

    alert('Loggin')
    window.location.pathname = "/my-info"
    }catch(err){
        errors.value = Object.values(err.data.errors).flat()
    }
    isLoading.value = false
}
  </script>
  