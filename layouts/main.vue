<template>
  <transition name="page">
    <div class="main-layout">
      <Sidebar />
      <nuxt />
    </div>
  </transition>
</template>



<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
</style>
