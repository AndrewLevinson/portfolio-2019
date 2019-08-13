<template>
  <div v-editable="blok" :id="blok.name" class="grid">
    <component
      v-for="blok in blok.preview"
      :blok="blok"
      :category="category"
      :paid="paid"
      :is="blok.component"
      :key="blok._uid"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['blok', 'category', 'paid']
}
</script>

<style scoped>
.grid {
  text-align: center;
  display: grid;
  padding: 0.5rem 0 1rem 0;
  margin: 0 0 0 16px;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
