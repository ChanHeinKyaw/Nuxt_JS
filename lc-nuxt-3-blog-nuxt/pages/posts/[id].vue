<template>
  <div class="container mx-auto w-1/2 py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/1`">Title of Post</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>Feb 2, 2022</div>
      <div>&middot;</div>
      <div>Andre Madarang</div>
    </div>
    <div class="post-content mt-4">
      {{ $route.params.id }} Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Laboriosam, tempore adipisci deleniti at optio iste dolores delectus
      voluptatum fugit, sequi quos in ullam eos quisquam mollitia doloremque eum
      vel quam facilis laborum blanditiis officiis, accusantium necessitatibus
      fugiat! Eum, voluptas repellendus sint officiis et, vel doloremque rerum
      distinctio voluptate ea voluptates neque mollitia omnis saepe voluptatem?
      Ab, maxime at sunt laborum fuga a. Ex id eligendi excepturi eaque
      voluptatem aut iure, minima quo dolor quasi repellat voluptas a cupiditate
      tenetur ratione perferendis itaque doloremque? Dignissimos sit
      reprehenderit blanditiis ut illo odio veniam iste officiis fugiat. Odio
      nostrum voluptatibus nam suscipit expedita?
    </div>
  </div>
</template>
