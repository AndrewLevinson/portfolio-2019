
<template>
  <div v-editable="blok" :id="blok.name">
    <component v-for="blok in blok.preview" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
