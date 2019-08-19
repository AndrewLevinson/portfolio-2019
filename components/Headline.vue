<template>
  <transition name="component" mode="out-in">
    <div id="heading">
      <h4
        v-show="$store.getters.section === 'all' || $store.getters.section ==='about'"
        class="tagline tagline-big"
      >
        My name is
        <span class="datum">Andrew</span> and I like to
        <span class="datum">visualize data</span> &amp;
        <span class="datum">design digital products</span>.
      </h4>
      <h4 v-show="$store.getters.section === 'work'" class="tagline tagline-big">
        This is some of my
        <span class="datum">work</span>.
      </h4>
      <h4 v-show="$store.getters.section === 'blog'" class="tagline tagline-big">
        These are some of my
        <span class="datum">thoughts</span>.
      </h4>
      <h5 v-if="$store.getters.section === 'all' || $store.getters.section === 'about'">
        Currently, I design and code graphics and dev tools at
        <a
          href="https://graphics.wsj.com/"
          target="_blank"
        >The Wall Street Journal</a>.
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

@media (max-width: 600px) {
  .tagline {
    margin-top: 0;
  }
  #heading {
    margin-bottom: 6rem;
  }
}
</style>
