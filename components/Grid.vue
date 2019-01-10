<template>
  <div v-editable="blok" :id="blok.name" class="grid">
    <component v-for="blok in blok.preview" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.grid {
  text-align: center;
  display: grid;
  padding: 0.5rem 1rem 1rem 0;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
