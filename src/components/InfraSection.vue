<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="bg-very-dark-gray-blue mt-[10rem] rounded-bl-[5rem] rounded-tr-[5rem] relative md:px-14 md:mt-[14rem] lg:flex lg:items-center lg:justify-between lg:px-[10rem] lg:mt-[8rem]"
  >
    <div class="relative bottom-36 lg:bottom-0 lg:w-[40%]">
      <img :src="phone" alt="phone illustration" class="max-w-full" />
    </div>
    <header class="px-5 pb-12 text-center -mt-[8rem] lg:mt-0 lg:text-start lg:w-[50%] lg:pb-0">
      <h1 class="text-overpaas text-white text-3xl">State of the Art Infrastructure</h1>
      <p class="text-grayish-blue pt-8 font-overpass">
        With reliability and speed in mind. worldwide data centers provide the backbone for
        ultra-fast connectivity. This ensures your site will load instantly, no matter where your
        readers are, keeping your site competitive
      </p>
    </header>
  </section>
</template>

<script setup lang="ts">
import phone from '../assets/illustration-phones.svg'
</script>
