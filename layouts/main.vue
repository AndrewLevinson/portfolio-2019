<template>
  <transition name="page" mode="out-in">
    <div class="main-layout">
      <Navbar />
      <nuxt />
    </div>
  </transition>
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
