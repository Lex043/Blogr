<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="bg-mobile-pattern bg-center rounded-bl-[6rem] bg-light-red px-5 md:px-14 lg:px-[10rem]"
  >
    <navbar />
    <div class="py-20">
      <header>
        <h1 class="text-[2rem] pb-2 text-white font-overpass text-center">
          A modern publishing platform
        </h1>
        <p class="text-lg text-white font-overpass text-center">
          Grow your audience and build your online brand
        </p>
      </header>
      <div class="flex gap-4 justify-center mt-4">
        <button
          class="bg-white text-light-red rounded-2xl py-2 px-2 text-sm font-bold border-white border-1 hover:text-white hover:bg-very-light-red"
        >
          Start For Free
        </button>
        <button
          class="text-white rounded-2xl py-2 px-2 text-sm font-bold border-white border-[1px] hover:text-light-red hover:bg-white"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import navbar from './navbar.vue'
</script>
