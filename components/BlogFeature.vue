<template>
  <transition name="fuzzy">
    <div v-editable="blok" class="blog-features">
      <p class="date">{{ blok.date | dateFormat }}</p>
      <nuxt-link :to="blogPath">
        <h3 class="title">{{ blok.title }}</h3>
      </nuxt-link>
      <p class="subtitle">{{ blok.subtitle }}</p>
      <span class="tag">{{ blok.tag }}</span>
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
  }
}
</script>

<style scoped>
.blog-features {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-color);
}

.blog-features:first-of-type {
  border-top: 1px solid var(--border-color);
  padding-top: 3rem;
}

.tag {
  background-color: none;
  color: #3d3d3d;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 80%;
  border: 1px solid #3d3d3d;
}

.title {
  margin-bottom: 0;
  margin-top: -0.25rem;
  color: var(--link-color);
  transition: all 0.3s ease-in-out;
}

.title:hover {
  color: var(--primary-color);
  opacity: 1;
  transition: all 0.3s ease-in-out;
}

.subtitle {
  opacity: 0.75;
  font-weight: 500;
  margin-bottom: 0.75rem;
}
.date {
  font-size: 85%;
  opacity: 0.75;
  /* font-weight: 600; */
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
