<template>
  <div v-editable="blok" class="teaser">
    <!-- <h3 :id="blok.id" class="section-title">{{ blok.headline }}</h3> -->
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.teaser {
  margin-left: 10px;
  padding-top: 2rem;
  /* position: sticky;
  top: 10px; */
}
.section-title {
  text-align: left;
  border-bottom: 1px dashed #222;
  margin-bottom: 0;
}
</style>
