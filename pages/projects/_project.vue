<template>
  <section>
    <h2>My Projectsssss</h2>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    ></component>
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
    })
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    console.log()
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/projects/${context.params.project}`, {
        version: version
      })
      .then(res => {
        console.log(res.data.story.content)
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
