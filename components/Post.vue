<template>
  <div v-editable="blok" class="viz-project">
    <nav id="breadcrumb-wrap">
      <ul id="breadcrumbs">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>⟶</li>
        <li id="current">{{ blok.title }}</li>
      </ul>
    </nav>
    <div class="intro">
      <div class="details">
        <div class="detail-content">
          <p>{{ blok.date}}</p>
          <h3>{{ blok.title }}</h3>
          <p id="sub">{{ blok.subtitle }}</p>
          <div class="tags-wrapper">
            <span>{{ blok.tag }}</span>
          </div>
        </div>
      </div>
      <!-- <div id="image-holder">
        <a :href="blok.project_link.cached_url" target="_blank">
          <img id="main-image" :src="blok.image" alt="hero image" width="100%">
        </a>
      </div>-->
    </div>

    <div class="project-content">
      <div class="viz-content">
        <div class="links">
          <div>
            <hr>
            <hr>
          </div>
          <div>
            <!-- <a :href="blok.project_link.cached_url">Project Link ⟶</a> -->
          </div>
          <div>
            <!-- <a :href="blok.github_link.cached_url">Github Repository ⟶</a> -->
          </div>
          <div>
            <h6>Data Sources</h6>
            <!-- <div class="markdown" v-html="$md.render(blok.data_sources)"></div> -->
          </div>
        </div>
        <article>
          <div>
            <!-- <h5>Summary</h5> -->
            <!-- <h5 id="summary">{{ blok.summary }}</h5> -->
          </div>
          <div class="description">
            <!-- <h5>Description</h5> -->
            <div class="markdown" v-html="$md.render(blok.content)"></div>
          </div>
          <!-- <div class="assets">
            <div v-for="media in blok.viz_media" :key="media.filename" class="viz-media">
              <img :src="media.filename" :alt="media.name" width="100%">
            </div>
          </div>-->
        </article>
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
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 3rem;
}

.viz-project > .project-content {
  padding-bottom: 2rem;
  padding-top: 3rem;
  overflow-x: hidden;
  /* width: 90%; */
  /* margin: 0 auto; */
}

.viz-project .intro {
  display: flex;
  justify-content: space-between;
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
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  opacity: 0.9;
  /* color: var(--primary-color); */
}

.viz-project .tags-wrapper span {
  background-color: none;
  color: #3d3d3d;
  border-radius: 4px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  font-size: 75%;
  border: 1px solid #3d3d3d;
  margin-right: 0.5rem;
  margin-top: 1rem;
  display: inline-block;
}

.viz-project .tags-wrapper span:first-child {
  background-color: var(--btn-color);
  color: #fff;
  margin-top: 0rem;
  border: 1px solid var(--btn-color);
}

.viz-project #sub {
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.viz-project #image-holder {
  width: 100%;
  max-width: 60%;
  z-index: 100;
  padding-bottom: unset;
}

.viz-project #main-image {
  box-shadow: 0px 4px 17px 2px #ccc;
  border-radius: 4px;
}

.viz-content {
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-left: 0.6rem;
  padding-right: 3rem;
  text-align: left;
}

.viz-content hr {
  /* width: 80%; */
  height: 5px;
  color: none;
  border: none;
  /* background-color: var(--link-color); */
  background-color: #3d3d3d;
  margin-top: 0.5rem;
  border-radius: 6px;
}

.viz-content div {
  margin-bottom: 3rem;
}

.viz-project h5 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.viz-project #summary {
  text-transform: none;
  opacity: 0.8;
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
  max-width: 70%;
  margin-left: 22.5%;
  /* margin: 0 auto; */
}

.viz-content > .links {
  width: 17.5%;
  padding-right: 5rem;
  position: absolute;
}

.links > div {
  padding-bottom: 0.5rem;
}

.links > div:first-child {
  margin-top: 1rem;
}

.viz-content .viz-media img {
  margin-bottom: 8rem;
  box-shadow: 0px 4px 17px 2px #ccc;
  border-radius: 4px;
}

@media (max-width: 1025px) {
  .viz-project,
  .links {
    display: block;
  }

  .viz-content {
    display: flex;
    flex-flow: column-reverse;
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
    width: 90%;
    height: auto;
    margin: 0 auto;
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

  .viz-project > .project-content {
    width: 100%;
    display: block;
  }

  .viz-content .viz-media img {
    margin-bottom: 5rem;
  }
  .viz-content {
    padding-right: 0.6rem;
  }
}
</style>
