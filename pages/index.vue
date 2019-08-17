<template>
  <section id="main-content-area">
    <nav id="drop" @scroll="handleScroll">
      <div id="sidebar">
        <ul>
          <!-- <li>
            <a :class="{ active : active_el == 1 }" @click="cat = 'all' , activate(1)">
              All
              <span class="mobile">Work</span>
            </a>
          </li>-->
          <li>
            <a
              :class="{ active : $store.getters.section === 'work' }"
              @click="$store.commit('setSection', 'work'), changeSection()"
            >My Work</a>
          </li>
          <li>
            <a
              :class="{ active : $store.getters.section === 'blog' }"
              @click="$store.commit('setSection', 'blog'), changeSection()"
            >My Thoughts</a>
          </li>

          <li>
            <a
              :class="{ active : $store.getters.section === 'all' }"
              @click="$store.commit('setSection', 'all'), changeSection()"
            >About Andrew 👋🏻</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="heading">
      <h4 v-show="$store.getters.section === 'all'" class="tagline tagline-big">
        My name is
        <span class="datum">Andrew</span> and I like to
        <span class="datum">visualize data</span> &amp;
        <span class="datum">design digital products</span>.
      </h4>
      <h4 v-show="$store.getters.section === 'work'" class="tagline tagline-big">
        This is my
        <span class="datum">work</span>.
      </h4>
      <h4 v-show="$store.getters.section === 'blog'" class="tagline tagline-big">
        These are my
        <span class="datum">thoughts</span>.
      </h4>

      <h5 v-if="$store.getters.section === 'all'">
        Currently, I design and code graphics and dev tools at
        <a
          href="https://graphics.wsj.com/"
          target="_blank"
        >The Wall Street Journal</a>.
      </h5>
      <h5 v-else>Enjoy.</h5>
    </div>
    <div id="work">
      <component
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
        :category="cat"
        :paid="onlyPaid"
        :is="story.content.component"
      ></component>
    </div>
  </section>
</template>

<script>
function myFetchMethod(context) {
  // console.log(context)
  // Check if we are in the editor mode
  let version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  // to-do create service layer for ONE api call

  // Load the JSON from the API
  return context.app.$storyapi
    .get(`cdn/stories/${context.app.store.state.section}`, {
      version: version
    })
    .then(res => {
      console.log(res)
      return context.app.store.commit('setStories', res.data)
    })
    .catch(res => {
      context.error({
        statusCode: res.response.status,
        message: res.response.data
      })
    })
}

export default {
  layout: 'main',
  data() {
    return {
      story: { content: {} },
      cat: 'all',
      onlyPaid: false,
      active_el: 1,
      scrolled: false
    }
  },
  computed: {
    setStories() {
      return this.$store.getters.stories
    }
  },
  watch: {
    setStories() {
      // console.log('setting section to ', this.$store.getters.stories)
      this.story = this.$store.getters.stories.story
    }
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
    window.addEventListener('scroll', this.handleScroll)
  },
  // created() {
  //   window.addEventListener('scroll', this.handleSCroll)
  // },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    changeSection() {
      myFetchMethod(this.$root.$options.context)
    },
    handleScroll() {
      // let header = document.getElementById('drop')
      // if (window.scrollY > 0 && !header.className.includes('drop')) {
      //   header.classList.add('drop')
      // } else if (window.scrollY < 1) {
      //   header.classList.remove('drop')
      // }
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
        console.log(res)
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
#heading {
  /* margin-left: calc(3rem + 10px); */
  /* margin-right: calc(3rem + 10px); */
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: baseline; */
  margin-bottom: 8rem;
  margin-right: 0;
  text-align: left;
  /* display: none; */
}

#heading h4 {
  margin-bottom: 0.5rem;
}

#heading h5 {
  opacity: 0.8;
  font-size: 1.9rem;
  line-height: 1.3;
  letter-spacing: -0.08rem;
}

.tagline {
  /* margin-left: calc(3rem + 10px); */
  /* margin-right: calc(3rem + 10px); */
  margin-top: 1.5rem;
}

.datum {
  animation: appear 2.5s ease-in-out;
}

#work,
ul {
  animation: appear 1s ease-in-out;
}

.section-hed {
  text-transform: uppercase;
  font-size: 100%;
  font-weight: 500;
  opacity: 0.7;
  border-bottom: 2px solid var(--border-color);
}

@keyframes appear {
  0% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.8;
  }
}

h1 {
  margin-bottom: 0rem;
  /* margin-left: 10px; */
  margin-left: calc(3rem + 10px);
  /* line-height: 0; */
}

/* @media (max-width: 1000px) {
  #heading {
    display: block;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
} */

nav {
  text-align: left;
  position: sticky;
  top: 0px;
  padding-top: 2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(247, 247, 247, 0.95);
  background-color: var(--main-bg-color);
  /* border-bottom: 1px solid var(--border-color); */
  box-shadow: none;
  width: calc(100% + 6rem);
  margin-left: -3rem;
  z-index: 997;
  transition: box-shadow 0.4s ease-in-out;
}

.drop {
  border-bottom: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.13);
  transition: box-shadow 0.4s ease-in-out;
}

a {
  display: inline-block;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid transparent;
}

ul {
  margin-left: calc(3rem + 10px);
  margin-right: calc(3rem + 10px);
  list-style: none;
  text-align: right;
  /* margin-top: 0.75rem; */
  margin-top: 1.5rem;
  margin-bottom: 7rem;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  /* max-width: 220px; */
  /* margin-left: calc((100% - 430px) / 2); */
  /* margin-left: calc(100% - 3rem + 10px - 430px); */
}

li {
  padding-right: 3.5rem;
}

li:last-child {
  padding-right: 2rem;
}

a:hover {
  cursor: pointer;
  /* font-weight: bolder; */
  text-decoration: none;
}

.active {
  /* font-weight: bolder; */
  border-bottom: 2px solid var(--link-color);
  z-index: 999;
}

.active:hover {
  border-bottom: 2px solid var(--primary-color);
}
.mobile {
  display: inline;
}

@media (max-width: 600px) {
  nav {
    top: 80px;
    width: calc(100% + 4rem);
    margin-left: -2rem;
    text-align: left;
  }
  ul {
    margin-left: calc(2rem);
  }

  .tagline {
    margin-left: calc(2rem);
    margin-top: 0;
    /* display: none; */
    /* font-size: 90%; */
  }

  .tagline-big {
    display: none;
  }
  .mobile {
    display: none;
  }
}
</style>
