<template>
  <section class="intro-section">
    <div>
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
    </div>
  </section>
</template>

<script>
export default {
  layout: 'main'
}
</script>

<style scoped>
.intro-section {
  height: 100vh;
  width: 100vw;
  display: flex;
  text-align: center;
  align-self: center;
}
.intro-section > div {
  text-align: left;
  align-self: center;
  margin: 0 auto;
  width: 45%;
}

/* button */
button {
  text-align: center;
  align-self: flex-start;
  padding: 0.75rem;
  margin: 0 auto;
  margin-top: -8rem;
  border-radius: 6px;
  background: transparent;
  border-color: coral;
  color: coral;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

button:hover {
  background: coral;
  border-color: #fff;
  color: #fff;
  transition: 0.3s all ease-in-out;
}

.button-container:hover {
  text-decoration: none;
}
</style>
