<template>
  <nav>
    <section>
      <nuxt-link to="/">
        <img src="../assets/logo.png" alt="andrew_l" width="160">
      </nuxt-link>
      <p>My name is Andrew and I like to visualize data and design digital products.</p>
      <ul>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          –
          <a href="#data_viz">Data Visualization</a>
        </li>
        <li>
          –
          <a href="#product">Product Design</a>
        </li>
        <li>
          –
          <a href="#other">Other Work</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script>
</script>

<style scoped>
nav {
  /* background-color: #fff; */
  z-index: 2;
  width: 20vw;
}
section {
  text-align: left;
  width: 15vw;
  position: fixed;
}
img {
  margin-top: 11rem;
  margin-bottom: 5rem;
}
ul {
  list-style: none;
  padding-top: 1.5rem;
}
li {
  padding-top: 0.5rem;
}
</style>
