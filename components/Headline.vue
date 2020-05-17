<template>
  <transition name="component" mode="out-in">
    <div id="heading">
      <div class="dark-tag">dark mode detected 🌒</div>
      <div class="dark-tag-mobile">🌒</div>
      <h4
        v-show="$store.getters.section === 'home' || $store.getters.section ==='about'"
        class="tagline tagline-big"
      >
        My name is
        <span class="datum">Andrew</span> and I like to
        <span class="datum">visualize data</span> &amp;
        <span class="datum">design digital products</span>
      </h4>
      <h4 v-show="$store.getters.section === 'work'" class="tagline tagline-big">
        This is some of my
        <span class="datum">work</span>.
      </h4>
      <h4 v-show="$store.getters.section === 'blog'" class="tagline tagline-big">
        These are some of my
        <span class="datum">thoughts</span>.
      </h4>
      <h5 v-if="$store.getters.section === 'home' || $store.getters.section === 'about'">
        Currently, I design & code visuals at
        <a
          href="https://graphics.wsj.com/"
          target="_blank" rel="noopener"
        >The Wall Street Journal</a> and teach
        <a
          href="https://courses.newschool.edu/courses/PUCD2126/6770/"
          target="_blank" rel="noopener"
        >Core Lab Interaction</a> at Parsons School of Design.
      </h5>
      <h5 v-else>Enjoy.</h5>
    </div>
  </transition>
</template>

<style scoped>
#heading {
  margin-bottom: 8rem;
  margin-top: 7rem;
  margin-right: 0;
  text-align: left;
}

#heading h4 {
  margin-bottom: 0.5rem;
}

#heading h5 {
  opacity: 0.8;
  font-size: 1.9rem;
  line-height: 1.3;
  letter-spacing: -0.08rem;
  font-weight: 300;
}

.tagline {
  margin-top: 1.5rem;
}

#heading:first-child {
  animation: appear 0.5s ease-in-out;
}

.datum {
  animation: appear 2.5s ease-in-out;
}
.dark-tag,
.dark-tag-mobile {
  display: none;
  opacity: 0;
  letter-spacing: 3px;
  position: fixed;
  text-transform: uppercase;
  z-index: 998;
  top: 4rem;
  left: 3rem;
  font-size: 80%;
}

@media (max-width: 600px) {
  .tagline {
    margin-top: 0;
  }
  #heading {
    margin-bottom: 6rem;
  }
}

@media (prefers-color-scheme: dark) {
  .dark-tag-mobile {
    display: block;
    top: 1rem;
    left: unset;
    right: 1.5rem;
    animation: detector 1s ease-in-out forwards;
    animation-delay: 2s;
  }
  @media (min-width: 767px) {
    .dark-tag {
      display: block;
      /* opacity: 0.75; */
      animation: detector 1s ease-in-out forwards;
      animation-delay: 2s;
    }
    .dark-tag-mobile {
      display: none;
    }
  }

  @keyframes detector {
    0% {
      opacity: 0;
    }

    30%,
    70% {
      opacity: 0.75;
    }

    60%,
    80% {
      opacity: 0.3;
    }

    100% {
      opacity: 0.75;
    }
  }
}
</style>
