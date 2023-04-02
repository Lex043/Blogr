<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="py-10 flex justify-between items-center">
    <figure>
      <img :src="logo" alt="logo" />
    </figure>
    <figure>
      <img :src="hamburger" alt="hamburger" />
    </figure>
  </nav>
</template>

<script setup lang="ts">
import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
</script>
