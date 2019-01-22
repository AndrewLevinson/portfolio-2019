<template>
  <div class="container">
    <h6>Oh nooo :(</h6>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">You can go back home</nuxt-link>
    <h6>or</h6>
    <nuxt-link to="/work">You can go to my work</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  text-align: center;
}
</style>
