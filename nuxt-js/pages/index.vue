<template>
  <div>
    This is the main page
    <Counter />
    <div>
      x: {{ x }},
      y: {{ y }}
    </div>

    <div>
      <ul v-for="user in users" :key="user.id">
        <li>{{user.name}}</li>
      </ul>
    </div>

    <hr>

    <div>
      <ul v-for="user in user2" :key="user.id">
        <li>{{user.name}}</li>
      </ul>
    </div>

      <hr>

    <div>
      <ul v-for="user in user3" :key="user.id">
        <li>{{user.name}}</li>
      </ul>
    </div>

    <div>
      {{ user.id }}
      {{ user.name }}
      {{ user.email }}
    </div>

    <div>
      <h2>Weather</h2>
      <div>Description: {{weather.weather[0].description}}</div>
      <div>Temperature: {{weather.main.temp}}</div>
    </div>
  </div>
  
</template>


<script setup>
 const {x,y} = useMouse();

 const users = ref([]);

 onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => users.value = data);
 })

const { data: user2 } = await useAsyncData('user2', () => $fetch('https://jsonplaceholder.typicode.com/users'))

const { data: user3 } = await useFetch('https://jsonplaceholder.typicode.com/users')

const {data: user} = await useFetch('https://jsonplaceholder.typicode.com/users/1',{pick: ['id','name','email']})

const {data: weather} = await useFetch('/api/weather')

</script>