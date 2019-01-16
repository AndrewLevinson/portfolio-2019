<template>
  <section class="intro-section">
    <h1>Hey, it's Andrew</h1>
    <h5>
      I like to
      <a href="home#data_viz">
        visualize data
        <sup>↡</sup>
      </a>
      and
      <a href="home#product">
        design digital products
        <sup>↡</sup>.
      </a>
      But that doesn't really tell you who I am...
      <br>
    </h5>
    <p>
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
    <br>
    <h6>
      <a style="font-weight:800">*</a> Currently attending Parsons School
      of Design (2019) for
      <a
        href="https://www.newschool.edu/parsons/ms-data-visualization/"
        target="_blank"
      >
        Data Visualization (MS)
        <sup>⇗</sup>
      </a>
      and working freelance.
    </h6>
    <nuxt-link to="/work">
      <button @click:submit.prevent="onSubmit">See my work →</button>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  layout: 'main'
}
</script>

<style scoped>
.intro-section {
  padding: 10rem 12rem 5rem 12rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* button */
button {
  align-self: flex-start;
  padding: 0.75rem;
  border-radius: 6px;
  text-align: center;
  background: transparent;
  border-color: var(--btn-color);
  color: var(--btn-color);
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
}

button:hover {
  background: var(--btn-color);
  border-color: #fff;
  color: #fff;
  transition: 0.3s all ease-in-out;
}

.button-container:hover {
  text-decoration: none;
}

@media (max-width: 600px) {
  .intro-section {
    padding: 140px 2rem 5rem 2rem;
    width: 100%;
    max-width: none;
  }
}
</style>
