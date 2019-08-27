<template>
  <div v-editable="blok" class="viz-project">
    <div class="intro">
      <div class="details">
        <div class="detail-content">
          <p>{{ blok.year ? blok.year : 2018}}</p>
          <h3>{{ blok.name }}</h3>
          <p id="sub">{{ blok.tagline }}</p>
          <div class="tags-wrapper">
            <span>Data-Viz 📊</span>
            <br />
            <span v-for="tag in blok.tech_used" :key="tag">{{ tag }}</span>
          </div>
          <div class="go-to">
            <a :href="blok.project_link.cached_url">Project Link ⟶</a>
            <a :href="blok.github_link.cached_url">Github Repository ⟶</a>
          </div>
        </div>
      </div>
      <div id="image-holder">
        <a :href="blok.project_link.cached_url" target="_blank">
          <img id="main-image" :src="blok.image" alt="hero image" width="100%" />
        </a>
      </div>
    </div>

    <div class="viz-content">
      <article>
        <div>
          <hr />
          <hr />
        </div>
        <div>
          <h5 id="summary">{{ blok.summary }}</h5>
        </div>
        <div class="description">
          <div class="markdown" v-html="$md.render(blok.description)"></div>
        </div>
        <div class="assets">
          <div v-for="media in blok.viz_media" :key="media.filename" class="viz-media">
            <img :src="media.filename" :alt="media.name" width="100%" />
          </div>
        </div>
      </article>
      <div class="links">
        <div>
          <a :href="blok.project_link.cached_url">Project Link ⟶</a>
        </div>
        <div>
          <a :href="blok.github_link.cached_url">Github Repository ⟶</a>
        </div>
        <div>
          <h6>Data Sources</h6>
          <div class="markdown list" v-html="$md.render(blok.data_sources)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.viz-project {
  max-width: 3000px;
}
.viz-project #main-image {
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 3rem;
}

.viz-project .intro {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 8rem;
}

.viz-project .details {
  width: 40%;
  padding-right: 5rem;
  height: 50vh;
  display: flex;
  align-items: center;
}

.viz-project .detail-content > p:first-child {
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 500;
  opacity: 0.9;
  /* color: var(--primary-color); */
}

.viz-project .tags-wrapper span {
  background-color: none;
  color: var(--primary-color);
  border-radius: var(--radius);
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid var(--primary-color);
  margin-right: 0.5rem;
  margin-top: 1rem;
  display: inline-block;
}

.viz-project .tags-wrapper span:first-child {
  background-color: var(--primary-color);
  color: #fff;
  margin-top: 0rem;
  border: 1px solid var(--primary-color);
}

.viz-project .go-to {
  display: flex;
  margin-top: 3rem;
  max-width: 350px;
  justify-content: space-between;
}

.viz-project #sub {
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.viz-project #image-holder {
  width: 100%;
  max-width: 55%;
  z-index: 100;
  padding-bottom: unset;
}

.viz-project #main-image {
  box-shadow: 0px 4px 17px 2px #ccc;
  border-radius: var(--radius);
}

.viz-content {
  width: 90%;
  margin: 0 auto;
  padding: 6rem 3rem 2rem 0.6rem;
  overflow-x: hidden;
  text-align: left;
}

.viz-content hr {
  /* width: 80%; */
  height: 5px;
  color: none;
  border: none;
  background-color: var(--accent-color);
  /* background-color: #3d3d3d; */
  margin-top: 0.5rem;
  border-radius: var(--radius);
  width: 17.5%;
}

.viz-content div {
  margin-bottom: 3rem;
}

.viz-project h5 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.viz-project #summary {
  text-transform: capitalize;
  /* opacity: 0.8; */
}
.viz-project .description {
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 5rem;
}

.viz-project h6 {
  opacity: 0.8;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.viz-content article {
  /* width: 95%; */
  max-width: 800px;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 5rem;
}

/* .viz-content > .links {
  width: 17.5%;
  padding-right: 5rem;
  position: absolute;
} */

.links > div {
  padding-bottom: 0.5rem;
}

.links > div:first-child {
  margin-top: 1rem;
}

.viz-content .list a {
  display: list-item;
  margin-bottom: 0.5rem;
  margin-left: 1em;
  padding-left: 0px;
  list-style: circle outside;
}

.list br {
  display: none;
}

.list p {
  margin: 0;
}

.viz-content .viz-media img {
  margin-bottom: 8rem;
  /* box-shadow: 0px 4px 17px 2px #ccc; */
  border-radius: var(--radius);
}

@media (max-width: 1025px) {
  .viz-project,
  .links {
    display: block;
  }

  .viz-project > .intro {
    display: flex;
    flex-flow: column-reverse;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .viz-project #image-holder {
    max-width: 100%;
    padding-bottom: 3rem;
  }

  .viz-project #main-image {
    box-shadow: none;
    border-radius: none;
  }

  .viz-project .details {
    width: 95%;
    height: auto;
    /* margin: 0 auto; */
    padding-right: 0;
  }

  .viz-content > .links {
    width: 100%;
    padding-right: 0rem;
    position: relative;
  }

  .viz-content article {
    max-width: 100%;
    margin-left: 0%;
    /* margin: 0 auto; */
  }
  .links > div {
    width: 100%;
    padding: 0;
  }

  .viz-content .viz-media img {
    margin-bottom: 5rem;
  }
  .viz-content {
    width: 95%;
    padding-right: 0.6rem;
    margin: 0;
  }
}

@media (max-width: 600px) {
  .viz-project #main-image {
    width: calc(100% + 4rem);
    margin-left: -2rem;
  }
  /* .viz-project .details,
  .viz-project .detail-content,
  .viz-project .viz-content {
    width: 87.5%;
    margin-left: 7.5%;
  } */

  /* .viz-project .go-to {
    display: block;
    max-width: 100%;
  } */
}
</style>
