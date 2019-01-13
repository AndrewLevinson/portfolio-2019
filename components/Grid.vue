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
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
}
</style>
