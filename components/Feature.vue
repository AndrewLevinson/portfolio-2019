<template>
  <div v-editable="blok" class="feature">
    <nuxt-link :to="projectPath">
      <img :src="blok.image" :alt="blok.name">
      <div class="feature-specs">
        <p>{{ blok.name }}</p>
        <p class="details">
          <span>{{ blok.release }}</span> |
          <span>{{ blok.duration }}</span>
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    projectPath: function() {
      return `/projects/${this.blok.path}`
    }
  }
}
</script>

<style scoped>
.feature {
  text-align: left;
  box-shadow: 0px 1px 10px 0px #ccc;
  border: 1px solid #ddd;
  margin: 16px;
  margin-left: 10px;
  padding: 0rem;
  border-radius: 4px;
  transition: 0.3s all ease-in-out;
}

.feature:hover {
  box-shadow: 0px 4px 17px 2px #ccc;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
}

img {
  max-width: 100%;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #ccc;
}

.feature-specs {
  /* display: flex;
  justify-content: space-between;
  vertical-align: baseline;
  align-self: baseline; */
  padding: 0.25rem;
}

/* .feature-specs > p:first-child:hover {
  text-decoration: underline;
  color: green;
} */

p {
  padding: 0.5rem;
  font-weight: bold;
  color: #3b3b3d;
}

.details {
  font-size: 85%;
  margin-top: -1rem;
  margin-bottom: 0.75rem;
  opacity: 0.6;
  text-align: left;
}

a:hover {
  text-decoration: none;
}
</style>
