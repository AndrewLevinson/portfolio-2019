<template>
  <section id="main-content-area">
    <nav>
      <h1>My Work</h1>
      <div id="sidebar">
        <span>
          <ul>
            <li>
              <a href="#data_viz">Data Visualizations</a>
            </li>
            <li>
              <a href="#product">Product Design</a>
            </li>
            <li>
              <a href="#other">Other Work</a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
    <div id="work">
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :is="story.content.component"
      ></component>
    </div>
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

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/work`, {
        version: version
      })
      .then(res => {
        // console.log(res.data.story.content.body)
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
h1 {
  margin-bottom: 0;
  /* line-height: 0; */
}
nav {
  margin-left: 10px;
  position: sticky;
  top: 0px;
  padding-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed coral;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 4;
}
ul {
  list-style: none;
  text-align: right;
  /* margin-left: 10px; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* min-width: 280px; */
  /* max-width: 500px; */
}
</style>
