<template>
  <div v-editable="blok" class="page">
    <component v-for="blok in blok.body" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
