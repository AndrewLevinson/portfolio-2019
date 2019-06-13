<template>
  <div v-editable="blok" class="blog-post">
    <nav id="breadcrumb-wrap">
      <ul id="breadcrumbs">
        <li>
          <nuxt-link to="/">My Thoughts</nuxt-link>
        </li>
        <li>⟶</li>
        <li id="current">{{ blok.title }}</li>
      </ul>
    </nav>
    <div class="intro">
      <div class="details">
        <div class="detail-content">
          <p class="date">{{ dateFormat(blok.date)}}</p>
          <h3 id="title">{{ blok.title }}</h3>
          <p id="sub">{{ blok.subtitle }}</p>
          <div class="tags-wrapper">
            <span>{{ blok.tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-content">
      <div class="links">
        <div>
          <hr>
          <hr>
        </div>
      </div>
      <article>
        <div id="blog-md" class="markdown" v-html="$md.render(blok.content)"></div>
      </article>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['blok'],
  methods: {
    dateFormat(d) {
      return moment(d).format('LL')
    }
  }
}
</script>

<style>
.blog-post {
  width: calc(100% + 3rem);
  margin-left: -2rem;
  /* margin-right: 3rem; */
  margin-bottom: 3rem;
}

.blog-post .intro {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 8rem;
  overflow-x: hidden;
}

.blog-post .details {
  width: 90%;
  padding-right: 5rem;
  height: 40vh;
  display: flex;
  align-items: center;
}

.blog-post .tags-wrapper span {
  background-color: none;
  color: #3d3d3d;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid #3d3d3d;
}

.blog-post .date {
  padding-left: 0.2rem;
  opacity: 0.9;
}

.blog-post #title {
  margin-top: -0.25rem;
}
.blog-post #sub {
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.blog-content {
  width: 90%;
  margin: 0 auto;
  padding: 6rem 3rem 2rem 0.6rem;
  text-align: left;
  overflow-x: hidden;
}

.blog-content hr {
  /* width: 80%; */
  height: 5px;
  color: none;
  border: none;
  /* background-color: var(--link-color); */
  background-color: #3d3d3d;
  margin-top: 0.5rem;
  border-radius: 6px;
}

.blog-content div {
  margin-bottom: 3rem;
}

.blog-post h5 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.blog-post #summary {
  text-transform: none;
  opacity: 0.8;
}

#blog-md:first-child:first-letter {
  /* color: #903; */
  color: #3d3d3d;
  color: var(--primary-color);
  float: left;
  font-family: 'Playfair Display', serif;
  font-size: 75px;
  line-height: 60px;
  /* padding-top: 4px; */
  padding-right: 8px;
  padding-left: 3px;
}

.blog-content article {
  width: 90%;
  max-width: 800px;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 5rem;
}

.blog-content > .links {
  width: 17.5%;
  padding-right: 5rem;
  /* position: absolute; */
}

.blog-content .links > div {
  padding-bottom: 0;
}

@media (max-width: 1025px) {
  .blog-content {
    display: flex;
    flex-flow: column-reverse;
  }
  .blog-post > .intro {
    display: flex;
    flex-flow: column-reverse;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .blog-post .details {
    width: 90%;
    padding-top: 3rem;
    height: auto;
    margin: 0 auto;
  }

  .blog-content > .links {
    display: none;
  }

  .blog-content article {
    max-width: 100%;
    margin-left: 0%;
    /* margin: 0 auto; */
  }
  .links > div {
    width: 100%;
    padding: 0;
  }

  .blog-content {
    padding-right: 0.6rem;
  }
}
</style>
