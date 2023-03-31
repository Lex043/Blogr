<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="font-overpass px-5">
    <figure>
      <img :src="laptop" alt="laptop illuestration" />
    </figure>
    <div class="text-center mt-5">
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
</script>
