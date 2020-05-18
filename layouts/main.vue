<template>
  <!-- <transition name="page" mode="out-in"> -->
  <div class="main-layout">
    <Navbar />
    <nuxt />
  </div>
  <!-- </transition> -->
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
.main-layout {
  width: 100vw;
  max-width: 2000px;
  margin: 0 auto;
}
</style>
