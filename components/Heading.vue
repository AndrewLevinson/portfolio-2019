<template>
  <header>
    <h1>
      <nuxt-link to="/home">
        <img src="../assets/logo.png" alt="andrew_l" width="160">
      </nuxt-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped>
header {
  /* background-color: #111; */
  padding: 20px;
  color: #fff;
  text-align: left;
  z-index: 2;
}

h1 {
  margin: 0;
}
</style>
