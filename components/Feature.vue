<template>
  <transition name="fuzzy">
    <div
      v-editable="blok"
      v-show="blok.cat == category && !blok.isHidden || category == `all` && !blok.isHidden"
      class="feature"
    >
      <nuxt-link :to="projectPath">
        <img :src="blok.image" :alt="blok.name">
        <div class="feature-specs">
          <div class="time-tags-wrapper">
            <div class="tags-wrapper">
              <span>{{ blok.cat }}</span>
              <span v-if="blok.isPaid" class="paid">Paid $</span>
              <!-- <span v-else class="unpaid">Unpaid</span> -->
            </div>
            <div class="time-details">
              <span>{{ blok.release }}</span>
              <span>{{ blok.duration }}</span>
            </div>
          </div>
          <p class="name">{{ blok.name }}</p>
          <p class="description">{{ blok.description }}</p>
        </div>
      </nuxt-link>
      <nuxt-link :to="projectPath">
        <div class="view-project">
          <p v-if="blok.cat == 'Product Design 👨🏻‍💻'">View Case Study</p>
          <p v-else>View Project Overview</p>
          <p>→</p>
        </div>
      </nuxt-link>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['blok', 'category', 'paid'],
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
  border: 1px solid var(--border-color);
  margin: 16px;
  margin-left: 10px;
  padding: 0rem;
  border-radius: 4px;
  transition: 0.3s all ease-in-out;
  background-color: #fff;
  position: relative;
  top: 0;
}

.feature:hover {
  box-shadow: 0px 4px 17px 2px #ccc;
  top: -3px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
}

img {
  max-width: 100%;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid var(--border-color);
}

.feature-specs {
  padding: 1.25rem 1.25rem 70px 1.25rem;
  font-weight: 500;
  color: #3b3b3d;
  line-height: 1.25;
}

.description {
  font-weight: 300;
  font-size: 85%;
  opacity: 0.85;
  padding-top: 0.5rem;
  /* padding-bottom: 2rem; */
}

.time-details > span {
  font-size: 75%;
  /* margin-top: -0.75rem; */
  margin-bottom: 0.5rem;
  opacity: 0.5;
}

.time-details {
  text-align: right;
  /* flex-wrap: wrap-reverse; */
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
  /* font-weight: bolder; */
  letter-spacing: 0.05rem;
  opacity: 1;
  transition: all 0.3s ease-in;
}

.tags-wrapper span {
  background-color: var(--btn-color);
  color: #fff;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border-color: #fff;
  margin-right: 0.25rem;
}

.paid {
  background-color: #5fde89 !important;
}
.unpaid {
  background-color: #979797 !important;
}

a:hover {
  text-decoration: none;
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
