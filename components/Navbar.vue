<template>
  <nav :class="{ border : $route.name != 'slug' && $route.name != 'index'}">
    <transition name="nav" mode="out-in">
      <ul v-if="$route.name === 'slug' || $route.name === 'index'" id="main-nav" key="main-nav">
        <li>
          <a
            :class="{ active : $store.getters.section === 'home' }"
            @click="$store.commit('setSection', 'home')"
          >Home</a>
        </li>
        <li>
          <a
            :class="{ active : $store.getters.section === 'work' }"
            @click="$store.commit('setSection', 'work')"
          >Work</a>
        </li>
        <li>
          <a
            :class="{ active : $store.getters.section === 'blog' }"
            @click="$store.commit('setSection', 'blog')"
          >Thoughts</a>
        </li>
        <li class="desktop">
          <a
            :class="{ active : $store.getters.section === 'about' }"
            @click="$store.commit('setSection', 'about')"
          >About Andrew&nbsp;</a> 👋
        </li>
        <li class="mobile">
          <a
            :class="{ active : $store.getters.section === 'about' }"
            @click="$store.commit('setSection', 'about')"
          >About</a>
        </li>
      </ul>

      <ul v-else id="breadcrumb-nav" key="breadcrumb-nav">
        <li>
          <nuxt-link
            to="/"
            class="active-trans"
          >{{ $store.getters.section === 'blog' ? 'Thoughts' : $store.getters.section === 'work' ? 'Work' : 'Home' }}</nuxt-link>
        </li>
        <li>⟶</li>
        <li id="current">{{ setName }}</li>
        <!-- <nuxt-link :to="blok.name">Next⟶</nuxt-link> -->
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    setName() {
      return this.$store.getters.name
    }
  }
}
</script>

<style scoped>
nav {
  text-align: left;
  position: sticky;
  top: 0px;
  width: 100vw;
  padding: 2rem;
  padding-bottom: 0rem;
  /* background-color: hsla(0, 0%, 97%, 97.5%); */
  background-color: var(--background-nav);
  z-index: 997;
  border-bottom: 1px solid transparent;
  transition: all 1s ease;
}

.border {
  border-bottom: 1px solid var(--border-color);
  transition: all 1s ease;
}

a {
  display: inline-block;
  border-bottom: 2px solid transparent;
}
a:hover {
  cursor: pointer;
  text-decoration: none;
}

#main-nav {
  list-style: none;
  text-align: right;
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
}

#breadcrumb-nav,
#main-nav a {
  padding-bottom: 2rem;
}

#main-nav li {
  padding-right: 3.5rem;
}

#main-nav li:last-child {
  padding-right: 2rem;
}

.active {
  border-bottom: 2px solid var(--link-color);
  z-index: 999;
}

.active:hover {
  border-bottom: 2px solid var(--primary-color);
}

.active-trans {
  border-bottom: 2px solid transparent;
}

#breadcrumb-nav {
  margin-right: 3rem;
  margin-top: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#breadcrumb-nav li {
  list-style: none;
  display: inline;
}

#current {
  opacity: 0.5;
  text-transform: capitalize;
}

.desktop {
  display: list-item;
}
.mobile {
  display: none;
}

@media (max-width: 600px) {
  #main-nav {
    text-align: left;
    justify-content: flex-start;
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: list-item;
  }
}
</style>
