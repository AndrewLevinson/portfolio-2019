<template>
  <transition name="fuzzy">
    <div v-editable="blok" class="blog-features">
      <p>{{ blok.date }}</p>
      <nuxt-link :to="blogPath">
        <h4>{{ blok.title }}</h4>
      </nuxt-link>
      <h6>{{ blok.subtitle }}</h6>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    blogPath: function() {
      return `/${this.blok.path.cached_url}`
    }
  },
  mounted() {
    console.log(this.blok)
  }
}
</script>

<style scoped>
.blog-features {
  margin-top: 5rem;
}
.fuzzy-enter-active,
.fuzzy-leave-active {
  transition: all 0.4s ease-in-out;
}

.fuzzy-enter-active {
  /* transform: translateX(calc(0% + 90px)); */
  opacity: 0;
}

.fuzzy-enter,
.fuzzy-leave-to {
  opacity: 0;
  /* transform: translateX(-100%); */
}
</style>
