
<template>
  <div v-editable="blok" :id="blok.name" class="list">
    <h3>hi im all posts</h3>
    <component v-for="blok in blok.preview" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
/* .grid {
  text-align: center;
  display: grid;
  padding: 0.5rem 0 1rem 0;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
} */

.list {
  margin-left: 10px;
}

@media (max-width: 600px) {
  .list {
    margin-left: 0px;
  }
}
</style>
