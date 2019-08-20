<template>
  <section>
    <div class="preview-group">
      <div class="flex underline">
        <h5 id="featured">Featured Work</h5>
        <a @click="$store.commit('setSection', 'work')">All Work ⟶</a>
      </div>
      <Grid :blok="featuredWork" />
    </div>
    <div class="preview-group">
      <div class="flex underline">
        <h5 id="featured">Featured Thought</h5>
        <a @click="$store.commit('setSection', 'blog')">All Thoughts ⟶</a>
      </div>
      <!-- <Posts :blok="featuredPosts" /> -->
      <BlogFeature :blok="$store.getters.blog.story.content.body[0].preview[0]" />
    </div>
  </section>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Posts from '@/components/Posts.vue'
import BlogFeature from '@/components/BlogFeature.vue'

export default {
  name: 'Home',
  components: { Grid, Posts, BlogFeature },
  computed: {
    featuredWork() {
      return {
        preview: [
          ...this.$store.getters.work.story.content.body[0].preview
            .filter(d => d.cat === 'Data-Viz 📊')
            .slice(0, 4)
        ]
      }
    },
    featuredPosts() {
      return {
        preview: [
          ...this.$store.getters.blog.story.content.body[0].preview.slice(0)
        ]
      }
    }
  }
}
</script>

<style scoped>
.preview-group {
  margin-bottom: 6rem;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
}

.underline {
  border-bottom: 1px dashed var(--accent-color);
}

#featured {
  margin-bottom: 0.5rem;
  opacity: 0.8;
  font-weight: 300;
}
</style>
