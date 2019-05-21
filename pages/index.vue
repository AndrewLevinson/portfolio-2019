<template>
  <section id="main-content-area">
    <nav id="drop" @scroll="handleScroll">
      <div id="heading">
        <!-- <h1>My Work</h1> -->
        <h4 class="tagline tagline-big">
          My name is
          <span class="datum">Andrew</span> and I like to
          <span class="datum">visualize data</span> &
          <span class="datum">design digital products</span>.
        </h4>
        <p class="tagline tagline-small">
          My name is
          <span class="datum">Andrew</span> and I like to
          <span class="datum">visualize data</span> &
          <span class="datum">design digital products</span>.
        </p>
      </div>
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
          <!-- <li>
            <a :class="{ active : active_el == 4 }" @click="cat = `Other`, activate(4)">Other Work</a>
          </li>-->
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
    window.removeEventListener('scroll', this.handleScroll)
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
#heading {
  /* margin-left: calc(3rem + 10px); */
  /* margin-right: calc(3rem + 10px); */
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: baseline; */
  margin-bottom: 1.5rem;
}

.tagline {
  margin-left: calc(3rem + 10px);
  margin-right: calc(3rem + 10px);
  margin-top: 1.5rem;
}

.tagline-small {
  display: none;
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
  border-bottom: 1px solid var(--border-color);
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
  border-bottom: 3px solid transparent;
}

ul {
  margin-left: calc(3rem + 10px);
  list-style: none;
  text-align: left;
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
  max-width: 430px;
  /* margin-left: calc((100% - 430px) / 2); */
  /* margin-left: calc(100% - 3rem + 10px - 430px); */
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
}

.active:hover {
  border-bottom: 3px solid var(--primary-color);
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

  .tagline-small {
    display: block;
  }

  .tagline-big {
    display: none;
  }
}
</style>
