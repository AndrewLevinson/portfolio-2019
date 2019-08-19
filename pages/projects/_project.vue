<template>
  <section id="main-content-area">
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    ></component>
    <a href="#main-content-area">
      <button>↟</button>
    </a>
  </section>
</template>

<script>
export default {
  layout: 'main',
  data() {
    return { story: { content: {} } }
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    }),
      this.$store.commit('setName', this.story.content.maincontent[0].name)
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/projects/${context.params.project}`, {
        version: version
      })
      .then(res => {
        // console.log(res.data.story.content)
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  }
}
</script>

<style scoped>
button {
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: #fff;
  box-shadow: 0px 1px 10px 0px #ccc;
  color: var(--primary-color);
  border: none;
  border-radius: 100%;
  /* padding: 2rem; */
  height: 50px;
  width: 50px;
  line-height: 1;
  font-size: 200%;
}

button:hover {
  bottom: 43px;
  box-shadow: 0px 4px 17px 2px #ccc;
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
</style>
