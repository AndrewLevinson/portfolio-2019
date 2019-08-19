<template>
  <div class="main-layout">
    <Navbar />
    <transition name="page">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
