<template>
  <div v-editable="blok" :class="blok.name" class="case-study">
    <img id="hero-image" :src="blok.hero_img" alt="hero image" width="100%" />
    <div class="content">
      <h5>{{ blok.summary }}</h5>
      <div v-lazy-load="$md.render(blok.content_intro)" class="markdown"></div>
      <div v-if="blok.solution_peek == ''"></div>
      <div v-else class="solution-peek">
        <div class="peek">
          <div>
            <h5 class="highlight">01</h5>
            <div class="item">
              <p v-lazy-load="$md.render(blok.peek_1)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img
              :src="blok.solution_peek[0].filename | transformImage('500x0')"
              alt="preview gif"
              width="100%"
            />
          </div>
        </div>
        <div class="peek">
          <div>
            <h5 class="highlight">02</h5>
            <div class="item">
              <p v-lazy-load="$md.render(blok.peek_2)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img
              :src="blok.solution_peek[1].filename | transformImage('500x0')"
              alt="preview gif"
              width="100%"
            />
          </div>
        </div>
        <div class="peek">
          <div>
            <h5 class="highlight">03</h5>
            <div class="item">
              <p v-lazy-load="$md.render(blok.peek_3)"></p>
            </div>
          </div>
          <div class="image-holder">
            <img
              :src="blok.solution_peek[2].filename | transformImage('500x0')"
              alt="preview gif"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div class="markdown" v-html="$md.render(blok.content_2)"></div>
      <div v-if="blok.name == 'Music'" class="iframe-holder">
        <iframe
          src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5BYcVtabMy7tNii9fHcklK"
          width="100%"
          height="380px"
          frameborder="0"
          allowtransparency="true"
        ></iframe>
      </div>
      <div v-if="blok.name !== 'Business' && blok.name !== 'Music'" class="solutions">
        <h6>Solution Showcase</h6>
        <h5>Final Designs</h5>
        <p>You made it to the end! Below are the final completed designs in the form of images, gifs, and videos.</p>
        <div v-if="blok.name == 'Unbreakable'" class="solution-vids">
          <video
            v-for="vid in blok.showcase"
            :key="vid.name"
            :src="vid.filename"
            :name="vid.name"
            controls="controls"
            width="100%"
          ></video>
        </div>
        <div v-else class="solution-imgs">
          <img
            v-for="pic in blok.showcase"
            :key="pic.name"
            :src="pic.filename | transformImage('1200x0')"
            :alt="pic.name"
            width="100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  head() {
    return {
      title: `Andrew Levinson — ${this.blok.name}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Andrew Levinson — ${this.blok.name}`
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `Andrew Levinson — ${this.blok.name}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.blok.name}: ${this.blok.summary}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.blok.name}: ${this.blok.summary}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.blok.hero_img
        }
      ]
    }
  }
}
</script>

<style>
.highlight {
  color: var(--primary-color);
}
.case-study {
  width: calc(100% + 6rem);
  margin-left: -3rem;
  margin-bottom: 10rem;
}

.content {
  width: 60%;
  margin: 0 auto;
}

#hero-image {
  width: 100%;
  z-index: 100;
  /* border-radius: 0 0 4px 4px; */
}
.content h5 {
  margin-top: 6rem;
}

.content h6 {
  margin-bottom: -5.25rem;
  padding-top: 3rem;
  opacity: 0.7;
}

.content > h5:first-child {
  text-align: center;
  color: var(--primary-color);
  padding: 3rem 0 3rem 0;
  /* font-weight: 400; */
}

/* peek image */
.content .image-holder img {
  margin-top: 3rem;
  width: 350px;
}
.Unbreakable .image-holder img {
  max-width: 250px;
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

.iframe-holder {
  border-radius: var(--radius);
  height: 100%;
  width: 80%;
  margin: 0 auto;
  padding-top: 3rem;
}

.solution-vids {
  text-align: center;
  display: grid;
  padding: 3rem 0 3rem 0;
  margin: 0;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
}
.solution-vids video {
  width: 85%;
  max-width: 400px;
}

.solution-imgs {
  padding-top: 3rem;
  width: calc(100% + 0rem);
  /* margin-left: -3rem; */
}

.solution-imgs img {
  margin-bottom: 2rem;
}

@media (max-width: 1025px) {
  .peek {
    display: block;
    margin-bottom: 6rem;
  }
  .content .image-holder img {
    width: 100%;
    padding-left: 3rem;
  }
}

@media (max-width: 600px) {
  .case-study {
    width: calc(100% + 4rem);
    margin-left: -2rem;
  }
  .content {
    width: 85%;
    margin-left: 7.5%;
  }
  .content > h5:first-child {
    text-align: left;
  }
  .item {
    /* padding-right: 0; */
    width: 100%;
  }
}
</style>
