<template>
  <main class="h-full">
    <TheHeader />
    <FutureSection />
    <InfraSection />
    <FosSection />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import FutureSection from './components/FutureSection.vue'
import InfraSection from './components/InfraSection.vue'
import FosSection from './components/FosSection.vue'
import TheFooter from './components/TheFooter.vue'
import scroll from './components/animations/scroll'
import { onMounted } from 'vue'

onMounted(() => {
  scroll()
})
</script>
