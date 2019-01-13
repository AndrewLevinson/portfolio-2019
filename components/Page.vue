<template>
  <div v-editable="blok" class="page">
    <component
      v-for="blok in blok.body"
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
