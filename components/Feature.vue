<template>
  <div v-editable="blok" v-show="!blok.isHidden" class="feature">
    <nuxt-link :to="projectPath">
      <div id="relative">
        <div class="image-holder">
          <img :src="blok.image" :alt="blok.name" />
        </div>
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
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    projectPath() {
      return `/projects/${this.blok.path}`
    }
  }
}
</script>

<style scoped>
#relative {
  position: relative;
}
.feature {
  text-align: left;
  padding: 0rem;
  border-radius: var(--radius);
  transition: 0.3s all ease-in-out;
  background-color: transparent;
  overflow: hidden;
}

.feature:hover {
  cursor: pointer;
}

.feature:first-of-type {
  /* grid-column: span 2; */
  /* grid-row: span 2; */
}

.image-holder {
  border-radius: var(--radius);
  padding: 0;
  background-color: var(--main-bg-color);
}

.image-holder img {
  border-radius: var(--radius);
  border: 1px solid rgba(204, 204, 204, 0.2);
  width: 100%;
}

.feature-specs {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--accent-color);
  padding: 1.5rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.25;
  min-height: calc(100% - 8px);
  opacity: 0;
  transition: 0.3s all ease-in-out;
}

.feature-specs div,
.feature-specs p {
  transform: scale(0.9);
  transition: 0.3s all ease-in-out;
}

.feature:hover .feature-specs,
.feature:hover .feature-specs div,
.feature:hover .feature-specs p {
  opacity: 1;
  transform: scale(1);
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

.view-project:hover {
  letter-spacing: 0.05rem;
  opacity: 1;
  color: var(--primary-color);
  transition: all 0.3s ease-in;
}

.tags-wrapper span {
  background-color: transparent;
  color: #fff;
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid var(--border-color);
  margin-right: 0.25rem;
}
</style>
