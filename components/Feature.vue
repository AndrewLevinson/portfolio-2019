<template>
  <nuxt-link v-editable="blok" v-if="!blok.isHidden" :to="projectPath" class="feature" tag="div">
    <video
      v-if="blok.video && isDesktop"
      :poster="blok.image | transformImage('600x0')"
      autoplay
      loop
      muted
      playsinline
    >
      <source :src="blok.video[0].filename" type="video/webm" />
      <source :src="blok.video[1].filename" type="video/mp4" />
      Video Preview: {{blok.name}}
    </video>
    <img v-else :src="blok.image | transformImage('600x0')" :alt="blok.name" />
    <div class="feature-specs">
      <div class="time-tags-wrapper">
        <div class="tags-wrapper">
          <span>{{ blok.cat }}</span>
        </div>
        <div class="time-details">
          <span>{{ blok.release }}</span>
        </div>
      </div>
      <p class="name">{{ blok.name }}</p>
      <p class="description">{{ blok.description }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      isDesktop: null
    }
  },
  computed: {
    projectPath() {
      return `/projects/${this.blok.path}`
    }
  },
  mounted() {
    this.isDesktop = window.innerWidth > 1024 ? true : false
  }
}
</script>

<style scoped>
.feature {
  position: relative;
  text-align: left;
  padding: 0;
  border-radius: var(--radius);
  box-shadow: 0px 0px 8px -5px var(--image-shadow);
  transition: 0.3s all ease-in-out;
}

.feature:first-of-type {
  /* grid-column: span 2; */
  /* grid-row: span 2; */
}

img,
video {
  border-radius: var(--radius);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-specs {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-bg-color);
  box-shadow: 6px 5px 0 0 var(--primary-color);
  border: 1px solid hsla(300, 61%, 25%, 0.75);
  border-radius: var(--radius);
  padding: 1.5rem;
  font-weight: 500;
  color: var(--body-text-color);
  line-height: 1.25;
  height: 100%;
  opacity: 0;
  transition: 0.3s all ease-in-out;
}

.feature-specs div,
.feature-specs p {
  transition: 0.3s all ease-in-out;
}

.description {
  font-weight: 300;
  font-size: 85%;
  opacity: 0.85;
  padding-top: 0.5rem;
}

.time-details > span {
  font-size: 75%;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.time-details {
  text-align: right;
}

.time-tags-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.75rem;
}

.tags-wrapper {
  white-space: nowrap;
}

.view-project {
  display: flex;
  justify-content: space-between;
  color: var(--link-color);
  padding: 1.25rem;
  border-top: 1px solid var(--border-color);
  opacity: 0.8;
  font-weight: 500;
  position: absolute;
  bottom: 0;
  height: 55px;
  width: 100%;
}

.tags-wrapper span {
  background-color: transparent;
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid var(--border-color);
  margin-right: 0.25rem;
}

@media not all and (pointer: coarse) {
  .feature:hover {
    cursor: pointer;
  }
  .feature:hover .feature-specs,
  .feature:hover .feature-specs div,
  .feature:hover .feature-specs p {
    opacity: 1;
    transition: 0.3s all ease-in-out;
  }
  .view-project:hover {
    letter-spacing: 0.05rem;
    opacity: 1;
    color: var(--primary-color);
    transition: all 0.3s ease-in;
  }
}
</style>
