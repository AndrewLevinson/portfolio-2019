<template>
  <div class="main-layout">
    <Sidebar/>
    <transition name="fade">
      <nuxt/>
    </transition>
  </div>
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
.main-layout {
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
  width: 95%;
  margin: 0 auto;
}
</style>
