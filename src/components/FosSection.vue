<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="font-overpass flex flex-col mt-10 items-center px-5 md:px-14 lg:px-[10rem] lg:flex-row lg:justify-between lg:mt-[5rem]"
  >
    <figure class="lg:-left-[20rem] lg:relative">
      <img :src="laptop" alt="laptop illustration" class="lg:hidden" />
      <img :src="laptopDesktop" alt="laptop illustration" class="hidden lg:block" />
    </figure>

    <div class="text-center mt-5 lg:text-start lg:w-[95%]">
      <header>
        <h1 class="text-2xl text-very-dark-blue font-bold">Free, open, simple</h1>
        <p class="pt-4 text-very-dark-grayish-blue">
          Blogr is a free and open source application backed by a large community of helpful
          developers . It supports features such as code syntax highlighting. RSS feeds, social
          media integration, third-party commenting tools, and works seamlessly with Google
          Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </header>
      <header class="mt-8">
        <h1 class="text-2xl text-very-dark-blue font-bold">Powerful tooling</h1>
        <p class="pt-4 text-very-dark-grayish-blue">
          Batteries included. We built a simple and straightforward CLI tool that makes
          customization and deployment a breeze, but capabale of producing event the most
          complicated sites.
        </p>
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
import laptop from '../assets/illustration-laptop-mobile.svg'
import laptopDesktop from '../assets/illustration-laptop-desktop.svg'
</script>
