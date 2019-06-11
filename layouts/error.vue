<template>
  <div class="container">
    <h5>Oh nooo 😬</h5>
    <h1 v-if="error.statusCode === 404">Page Not Found</h1>
    <h1 v-else>An Error Occurred</h1>
    <nuxt-link to="/">
      <h4>Let's go back home</h4>
    </nuxt-link>
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
  padding-top: 5rem;
  text-align: center;
}

h5 {
  opacity: 0.75;
}
h1 {
  margin-top: -2rem;
  margin-bottom: 10rem;
  color: lightcoral;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(204, 204, 204, 0.7);
}
</style>
