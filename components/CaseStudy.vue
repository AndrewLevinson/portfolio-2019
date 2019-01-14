<template>
  <div v-editable="blok" class="case-study">
    <img id="hero-image" :src="blok.hero_img" alt="hero image" width="100%">
    <nav id="breadcrumb-wrap">
      <ul id="breadcrumbs">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>⟶</li>
        <li>
          <nuxt-link to="/Work">My Work</nuxt-link>
        </li>
        <li>⟶</li>
        <li id="current">{{ blok.name }}</li>
      </ul>
    </nav>
    <div class="content">
      <h5>{{ blok.summary }}</h5>
      <div class="markdown" v-html="$md.render(blok.content_intro)"></div>
      <div class="solution-peek">
        <div class="peek">
          <div>
            <h5 class="blue">01</h5>
            <div class="item">
              <p v-html="$md.render(blok.peek_1)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img :src="blok.solution_peek[0].filename" alt="preview gif" width="100%">
          </div>
        </div>
        <div class="peek">
          <div>
            <h5 class="blue">02</h5>
            <div class="item">
              <p v-html="$md.render(blok.peek_2)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img :src="blok.solution_peek[1].filename" alt="preview gif" width="100%">
          </div>
        </div>
        <div class="peek">
          <div>
            <h5 class="blue">03</h5>
            <div class="item">
              <p v-html="$md.render(blok.peek_3)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img :src="blok.solution_peek[2].filename" alt="preview gif" width="100%">
          </div>
        </div>
      </div>
      <div class="markdown" v-html="$md.render(blok.content_2)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok', 'category', 'paid']
}
</script>

<style>
.blue {
  color: var(--primary-color);
}
.case-study {
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 10rem;
}
#breadcrumb-wrap {
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
  z-index: 990;
  /* height: 100px; */
}
#breadcrumbs {
  margin-left: 3rem;
  padding: 2rem 0 2rem 0;
}
#breadcrumbs li {
  list-style: none;
  display: inline;
}

#current {
  opacity: 0.5;
}
.content {
  width: 60%;
  margin: 0 auto;
}

#hero-image {
  width: 100%;
  /* border-radius: 0 0 4px 4px; */
}
.content h5 {
  margin-top: 6rem;
}

.content h6 {
  margin-bottom: -5.25rem;
  opacity: 0.7;
}

.content > h5:first-child {
  text-align: center;
  color: var(--primary-color);
  padding: 3rem 0 3rem 0;
  font-weight: 500;
}

/* peek image */
.content .image-holder img {
  margin-top: 3rem;
  width: 325px;
}

.markdown img {
  width: 100%;
  /* max-width: 600px; */
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
}
.markdown p {
  margin-bottom: 3rem;
}

.solution-peek {
  margin-top: 3rem;
}

.peek {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
}

.peek div:first-child {
  display: flex;
  /* justify-content: space-between; */
}
.item {
  padding-left: 2.5rem;
  padding-right: 3rem;
  width: 85%;
}

.markdown ul,
.markdown ol {
  /* margin-top: 2rem; */
  margin-bottom: 2rem;
  margin-left: 1em;
  padding-left: 0px;
  list-style: circle outside;
}
</style>