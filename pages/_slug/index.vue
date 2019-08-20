<template>
  <section id="main-content-area">
    <Headline />
    <div id="work">
      <transition name="component" mode="out-in">
        <keep-alive>
          <component
            v-if="$store.getters.section === 'home' || $store.getters.section === 'about'"
            :key="$store.getters.section"
            :is="$store.getters.section"
          ></component>
          <component
            v-else
            :key="story.content._uid"
            :blok="story.content"
            :is="story.content.component"
          ></component>
        </keep-alive>
      </transition>
    </div>
  </section>
</template>

<script>
import Headline from '@/components/Headline.vue'

export default {
  layout: 'main',
  components: {
    Headline
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  computed: {
    setSection() {
      return this.$store.getters[this.$store.getters.section]
    }
  },
  watch: {
    setSection() {
      this.assignContent()
    }
  },
  created() {
    this.assignContent()
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
  methods: {
    assignContent() {
      this.story =
        this.$store.getters.section === 'home' ||
        this.$store.getters.section === 'about'
          ? null
          : this.setSection.story
    }
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
        return context.app.store.commit('setWork', res.data)
      })
      .then(() => {
        return context.app.$storyapi
          .get(`cdn/stories/blog`, {
            version: version
          })
          .then(res => {
            return context.app.store.commit('setBlog', res.data)
          })
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
#work {
  animation: appear 1s ease-in-out;
}
</style>
