<template>
  <div v-editable="blok" class="viz-project">
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
    <div class="project-content">
      <div id="image-holder">
        <img id="main-image" :src="blok.image" alt="hero image" width="100%">
      </div>
      <div class="viz-content">
        <h5>{{ blok.name }}</h5>
        <div>
          <h6>Project Link 🔗</h6>
          <p class="markdown" v-html="$md.render(blok.project_link.url)"></p>
        </div>
        <div>
          <h6>Summary</h6>
          <p>{{ blok.summary }}</p>
        </div>
        <div>
          <h6>Description</h6>
          <div class="markdown" v-html="$md.render(blok.description)"></div>
        </div>
        <div>
          <h6>Data Sources</h6>
          <div class="markdown" v-html="$md.render(blok.data_sources)"></div>
        </div>
      </div>
    </div>
    <!-- <hr> -->
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
  margin-bottom: 10rem;
}

#main-image {
  width: 100%;
  border-radius: 4px;
}

.viz-project > .project-content {
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}

.viz-project #image-holder {
  width: 60%;
  border-radius: 4px;
  padding-right: 1.5rem;
  border-right: 1px solid var(--border-color);
}

.viz-content {
  width: 40%;
  padding-left: 1.5rem;
  padding-right: 3rem;
  padding-top: 3rem;
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

hr {
  opacity: 0.3;
  /* margin: 3rem 0 3rem 0; */
  width: 35%;
  margin: 0 auto;
}

@media (max-width: 1025px) {
  .viz-project > .project-content {
    display: block;
  }

  .viz-content {
    width: 100%;
  }

  .viz-project #image-holder {
    width: 100%;
    padding-right: 0;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
