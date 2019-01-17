<template>
  <div id="intro-holder">
    <section :class="classyName" class="intro-section">
      <h1>Hey, it's Andrew</h1>
      <h4>
        I like to visualize data
        <sup>*</sup> and design digital products. But that doesn't really tell you who I am...
      </h4>
      <!-- <p>
      First I was born. Fast forward a few years and I'm making music and
      touring with my
      <a
        href="#other"
      >
        signed metal band, MONSTERS
        <sup>↡</sup>
      </a>. Fast forward some more and I'm a business consultant building
      <a href="#other">
        financial tools
        <sup>↡</sup>
      </a>
      for startups in Chicago. Fast forward even more and I'm a digital
      product designer for a software agency building
      <a
        href="#product"
      >
        enterprise products
        <sup>↡</sup>
      </a>. And now
      <sup>*</sup> I'm specializing in
      <a href="#data_viz">
        data visualization & storytelling.
        <sup>↡</sup>
      </a>
    </p>
    <p>
      A lot, I know. See how
      <a href="#blog">
        I think about things
        <sup>↡</sup>
      </a>.
    </p>
      <br>-->
      <nuxt-link to="/work">
        <button @click:submit.prevent="onSubmit">See my work →</button>
      </nuxt-link>
      <h6 id="current-life">
        <sup>*</sup> Currently attending Parsons School of Design (2019) for
        <a
          href="https://www.newschool.edu/parsons/ms-data-visualization/"
          target="_blank"
        >
          Data Visualization (MS)
          <sup>⇗</sup>
        </a>
        and working freelance.
      </h6>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'main',
  data() {
    return { classyName: '' }
  },
  mounted() {
    this.classyName = 'appear'
  }
}
</script>

<style scoped>
#intro-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.intro-section {
  /* align-self: center; */
  padding: 0rem 12rem 5rem 12rem;
  /* width: 100%; */
  max-width: 1000px;
  margin: 0 auto;
  /* opacity: 0; */
}

/* button */
button {
  margin-top: 2rem;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  background: transparent;
  border-color: var(--btn-color);
  color: var(--btn-color);
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  /* opacity: 0; */
}

h1,
h4,
button,
h6 {
  opacity: 0;
}

.appear h1 {
  opacity: 1;
  transition: opacity 1s ease-in-out;

  transition-delay: 0s;
}
.appear h4 {
  opacity: 1;
  transition: opacity 1s ease-in-out;

  transition-delay: 1s;
}
.appear button {
  opacity: 1;
  transition: opacity 1s ease-in-out;

  transition-delay: 2s;
}
.appear h6 {
  opacity: 1;
  transition: opacity 1s ease-in-out;

  transition-delay: 3s;
}

button:hover {
  background: var(--btn-color);
  border-color: #fff;
  color: #fff;
  transition: 0.3s all ease-in-out;
  text-decoration: none;
}

#current-life {
  position: fixed;
  bottom: 30px;
  padding-right: 2rem;
}

@media (max-width: 600px) {
  .intro-section {
    padding: 0 2rem 5rem 2rem;
    width: 100%;
    max-width: none;
  }
}
</style>
