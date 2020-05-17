<template>
  <div v-editable="blok" :id="blok.name">
    <div class="grid">
      <component v-for="blok in blok.preview" :blok="blok" :is="blok.component" :key="blok._uid"></component>
    </div>
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
  padding: 0.5rem 0 1rem 0;
  margin: 0 auto;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: 260px;
}
</style>
