<template>
  <div>
    <Title>Nuxt 3 Example</Title>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
    <slot />
  </div>
</template>