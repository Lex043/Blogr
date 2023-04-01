<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer
    class="font-overpass bg-very-dark-gray-blue rounded-tr-[5rem] py-10 mt-14 px-5 md:px-14 lg:px-[10rem]"
  >
    <section
      class="mt-10 flex flex-col items-center md:items-start md:flex-row md:mt-0 md:justify-between w-full"
    >
      <figure class="mb-10">
        <img :src="logo" alt="blogr logo" class="max-w-full" />
      </figure>

      <div class="mb-8 text-center md:text-justify">
        <h1 class="text-white mb-4">Product</h1>
        <ul class="text-grayish-blue text-sm flex flex-col gap-1">
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>

      <div class="mb-8 text-center md:text-justify">
        <h1 class="text-white mb-4">Company</h1>
        <ul class="text-grayish-blue text-sm flex flex-col gap-1">
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>

      <div class="text-center md:text-justify">
        <h1 class="text-white mb-4">Connect</h1>
        <ul class="text-grayish-blue text-sm flex flex-col gap-1">
          <li>Contact</li>
          <li>Newsletter</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import logo from '../assets/logo.svg'
</script>
