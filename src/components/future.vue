<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="mt-10 px-5">
    <h1 class="text-center text-2xl font-overpass text-very-dark-blue font-bold">
      Designed for the future
    </h1>
    <div>
      <figure class="mt-10">
        <img :src="editor" alt="editor illustration" class="max-w-full" />
      </figure>
      <div class="flex flex-col gap-10 mt-6">
        <header class="text-center">
          <h1 class="text-2xl font-overpass text-very-dark-blue font-bold">
            Introducing an extensible editor
          </h1>
          <p class="text-very-dark-grayish-blue pt-4 font-overpass">
            Blogr features an exceedingly intuitive interface which lets you focus on one thing:
            creating content. The editor supports management of multiple blogs and allows easy
            manipulation of embeds such as images videos, and Markdown. Extensiblity with plugins
            and themes provide easy ways to add functionality or change the looks of a blog.
          </p>
        </header>
        <header class="text-center">
          <h1 class="text-center text-2xl font-overpass text-very-dark-blue font-bold">
            Robust content management
          </h1>
          <p class="text-very-dark-grayish-blue pt-4 font-overpass">
            Flexible content management enables users to easily move through posts. Increase the
            usability of your blog by adding customized categories, sections, format, flow. With
            this functionality you are in full control.
          </p>
        </header>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import editor from '../assets/illustration-editor-mobile.svg'
</script>
