<template>
  <div v-editable="blok" class="project">
    <component v-for="blok in blok.maincontent" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
