<template>
  <transition name="fuzzy">
    <div
      v-editable="blok"
      v-show="blok.cat == category && !blok.isHidden || category == `all` && !blok.isHidden"
      class="feature"
    >
      <nuxt-link :to="projectPath">
        <div id="relative">
          <div class="image-holder">
            <img :src="blok.image" :alt="blok.name" />
          </div>
          <div class="feature-specs">
            <div class="time-tags-wrapper">
              <div class="tags-wrapper">
                <span>{{ blok.cat }}</span>
                <!-- <span v-if="blok.isPaid" class="paid">Paid $</span> -->
                <!-- <span v-else class="unpaid">Unpaid</span> -->
              </div>
              <div class="time-details">
                <span>{{ blok.release }}</span>
                <!-- <span>{{ blok.duration }}</span> -->
              </div>
            </div>
            <p class="name">{{ blok.name }}</p>
            <p class="description">{{ blok.description }}</p>
          </div>
        </div>
      </nuxt-link>
      <!-- <nuxt-link :to="projectPath">
        <div class="view-project">
          <p v-if="blok.cat == 'Product Design 👨🏻‍💻'">View Case Study</p>
          <p v-else>View Project Overview</p>
          <p>→</p>
        </div>
      </nuxt-link>-->
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
#relative {
  position: relative;
}
.feature {
  text-align: left;
  /* box-shadow: 0px 1px 10px 0px #ccc; */
  /* border: 1px solid var(--border-color); */
  /* margin: 16px; */
  /* margin-left: 10px; */
  padding: 0rem;
  border-radius: 4px;
  transition: 0.3s all ease-in-out;
  background-color: transparent;
  overflow: hidden;
}

.feature:hover {
  /* box-shadow: 0px 4px 17px 2px #ccc; */
  /* top: -3px; */
  /* transition: 0.5s all ease-in-out; */
  cursor: pointer;
}

.feature:first-of-type {
  /* grid-column: span 2; */
  /* grid-row: span 2; */
}

.image-holder {
  /* border-radius: 4px 4px 0 0; */
  border-radius: 4px;

  /* border-bottom: 1px solid var(--border-color); */
  padding: 0;
  background-color: var(--main-bg-color);

  /* background-color: var(--primary-color); */
}
.image-holder img {
  border-radius: 4px;

  border: 1px solid rgba(204, 204, 204, 0.2);
  width: 100%;

  /* border-radius: 4px 4px 0 0; */
}

.feature-specs {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--link-color);
  /* padding: 1.25rem 1.25rem 70px 1.25rem; */
  padding: 1.5rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.25;
  min-height: calc(100% - 8px);
  /* transform: translateY(calc(100% - 50px)); */
  /* transform: translateY(101%); */
  opacity: 0;
  transition: 0.3s all ease-in-out;
  /* height: 50px; */
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
  color: var(--primary-color);
  transition: all 0.3s ease-in;
}

.tags-wrapper span {
  /* background-color: var(--btn-color); */
  background-color: transparent;
  color: #fff;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid var(--border-color);
  margin-right: 0.25rem;
}
/* 
.tags-wrapper span {
  background-color: none;
  color: #3d3d3d;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 80%;
  border: 1px solid #cccccc;
} */

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
  transition: all 0.3s ease-in-out;
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
