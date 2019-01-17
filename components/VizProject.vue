<template>
  <div v-editable="blok" class="viz-project">
    <nav id="breadcrumb-wrap">
      <ul id="breadcrumbs">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>⟶</li>
        <li>
          <nuxt-link to="/work">My Work</nuxt-link>
        </li>
        <li>⟶</li>
        <li id="current">{{ blok.name }}</li>
      </ul>
    </nav>
    <div id="image-holder">
      <img id="main-image" :src="blok.image" alt="hero image" width="100%">
    </div>
    <div class="project-content">
      <div class="viz-content">
        <h5>{{ blok.name }}</h5>
        <div>
          <h6>Summary</h6>
          <p>{{ blok.summary }}</p>
        </div>
        <div>
          <h6>Description</h6>
          <div class="markdown" v-html="$md.render(blok.description)"></div>
        </div>
        <div class="links">
          <div>
            <h6>Project Link 🔗</h6>
            <p class="markdown" v-html="$md.render(blok.project_link.url)"></p>
          </div>
          <div>
            <h6>Codebase 🔗</h6>
            <p>
              <a :href="blok.github_link.cached_url">Github Repository</a>
            </p>
          </div>
          <div>
            <h6>Data Sources</h6>
            <div class="markdown" v-html="$md.render(blok.data_sources)"></div>
          </div>
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
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 3rem;
}

.viz-project > .project-content {
  padding-bottom: 2rem;
  padding-top: 3rem;
  width: 80%;
  margin: 0 auto;
}

.viz-project #image-holder {
  width: 100%;
  /* padding-right: 1.5rem; */
  /* border-right: 1px solid var(--border-color); */
}

.viz-content {
  /* width: 55%; */
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: left;
  /* align-self: center; */
}

.viz-content div {
  margin-bottom: 3rem;
}

.viz-content h6 {
  opacity: 0.6;
  text-transform: uppercase;
  margin-bottom: -0.1rem;
}

.viz-content h5 {
  text-align: center;
  padding-bottom: 3rem;
}

.links {
  display: flex;
  justify-content: space-between;
  /* text-align: center; */
  padding-top: 2rem;
}

.links > div {
  width: 33%;
  padding: 1rem;
  text-align: left;
}

.links > div:first-child {
  padding-left: 0;
}

@media (max-width: 1025px) {
  .viz-project,
  .links {
    display: block;
  }
  .links > div {
    width: 100%;
    padding: 0;
  }

  .viz-project > .project-content {
    width: 90%;
    /* margin-left: 7.5%; */
  }
}
</style>
