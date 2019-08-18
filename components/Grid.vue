<template>
  <div v-editable="blok" :id="blok.name">
    <!-- <h3>
      This is my work.
      <span class="datum">Enjoy</span>.
    </h3>-->
    <div class="grid">
      <component
        v-for="blok in blok.preview"
        :blok="blok"
        :category="category"
        :paid="paid"
        :is="blok.component"
        :key="blok._uid"
      ></component>
    </div>
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
  /* margin: 0 0 0 16px; */
  margin: 0 auto;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
}
</style>
