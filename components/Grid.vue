<template>
  <div v-editable="blok" class="grid">
    <component v-for="blok in blok.columns" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
