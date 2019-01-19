<template>
  <section id="main-content-area">
    <nav id="drop" @scroll="handleScroll">
      <h1>My Work</h1>
      <div id="sidebar">
        <ul>
          <li>
            <a :class="{ active : active_el == 1 }" @click="cat = 'all' , activate(1)">All Projects</a>
          </li>
          <li>
            <a
              :class="{ active : active_el == 2 }"
              @click="cat = 'Data-Viz 📊', activate(2)"
            >Data Visualization</a>
          </li>
          <li>
            <a
              :class="{ active : active_el == 3 }"
              @click="cat = 'Product Design 👨🏻‍💻', activate(3)"
            >Product Design</a>
          </li>
          <li>
            <a :class="{ active : active_el == 4 }" @click="cat = `Other`, activate(4)">Other Work</a>
          </li>
          <!-- <li>
            <input type="checkbox" name="onlyPaid" @click="onlyPaid = !onlyPaid">Only Show Paid Work
          </li>-->
        </ul>
      </div>
    </nav>
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
    window.removeEventListener('scroll', this.handleSCroll)
  },
  methods: {
    activate: function(el) {
      this.active_el = el
    },
    handleScroll() {
      let header = document.getElementById('drop')
      if (window.scrollY > 0 && !header.className.includes('drop')) {
        header.classList.add('drop')
      } else if (window.scrollY < 1) {
        header.classList.remove('drop')
      }
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
  margin-bottom: 1.5rem;
  /* margin-left: 10px; */
  margin-left: calc(3rem + 10px);

  /* line-height: 0; */
}
nav {
  position: sticky;
  top: 0px;
  padding-top: 2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(251, 251, 251, 0.95);
  border-bottom: 1px solid var(--border-color);
  box-shadow: none;
  width: calc(100% + 6rem);
  margin-left: -3rem;
  z-index: 997;
  transition: box-shadow 0.4s ease-in-out;
}

.drop {
  border-bottom: none;
  box-shadow: 0px 2px 6px 0px #ccc;
  transition: box-shadow 0.4s ease-in-out;
}

a {
  display: inline-block;
  padding-bottom: 1.5rem;
}

ul {
  margin-left: calc(3rem + 10px);
  list-style: none;
  text-align: left;
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
}

li {
  padding-right: 1.5rem;
}

li:last-child {
  padding-right: 1rem;
}

a:hover {
  cursor: pointer;
  font-weight: bolder;
  text-decoration: none;
}

.active {
  font-weight: bolder;
  border-bottom: 3px solid var(--link-color);
  z-index: 999;
  /* transition: all 0.3s ease-in-out; */
}

@media (max-width: 600px) {
  nav {
    top: 80px;
    width: calc(100% + 4rem);
    margin-left: -2rem;
  }
  ul {
    margin-left: calc(2rem);
  }
}
</style>
