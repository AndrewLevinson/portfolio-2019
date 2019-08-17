
<template>
  <div v-editable="blok" :id="blok.name" class="list">
    <!-- <h3>
      These are my thoughts.
      <span class="datum">Enjoy</span>.
    </h3>-->
    <component v-for="blok in blok.preview" :blok="blok" :is="blok.component" :key="blok._uid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.list {
  /* margin-left: 10px; */
  margin-top: 4rem;
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .list {
    margin-left: 0px;
  }
}
</style>
