<template>
  <article class="about">
    <!-- <h2 id="about">About Me</h2> -->
    <p class="my-name">
      My name is
      <span class="datum">Andrew</span>
      <br>and I like to
      <span class="datum">visualize data</span>
      <br>and
      <span class="datum">design digital products</span>.
    </p>
    <div class="about-me-content">
      <div class="first">
        <div class="img-holder">
          <img src="../assets/guitarist@1x.png" width="100%" alt="pic of me playing guitar">
        </div>
        <div class="about-text" v-html="$md.render(aboutMD)"></div>
      </div>
      <!-- <div class="float"> -->
      <div class="reach" v-html="$md.render(reachoutMD)"></div>
      <!-- </div> -->
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      aboutMD: `From New York to Chicago and back to New York again, I've been a touring musician in a metal band, a financial consultant for start ups, and a digital product designer at a software agency. Now **I'm telling data-driven stories with code**. There's clearly a war between [my left brain vs. my right brain](https://www.youtube.com/watch?v=0jBK4qDJ-OM). In my free time I like playing guitar, making weird music, and browsing [my favorite subreddit](https://www.reddit.com/r/dataisugly/) . I'm probably sitting in a coffee shop in Brooklyn right now working through a strange idea – so reach out and we can collaborate. ✌🏻 
##### —`,
      reachoutMD: `
#### Reach Out
___
Full Name: **Andrew Levinson**
Email: **[andrewlevins@gmail.com](mailto:andrewlevins@gmail.com)**
___`
    }
  }
}
</script>

<style scoped>
.about {
  margin: 8rem 0 5% 0;
}

.about-me-content {
  padding-top: 1rem;
  padding-bottom: 5rem;
  max-width: 100%;
  width: 100%;
  font-size: 85%;
}

.img-holder {
  float: left;
  max-width: 30%;
  margin-right: 2rem;
}

img {
  border-radius: 4px;
  max-width: 100%;
}

span {
  font-weight: 700;
  font-size: 115%;
  /* color: var(--primary-color); */
  /* text-decoration: underline; */
}

.my-name {
  margin-bottom: 2.5rem;
  text-align: right;
}

@media (max-width: 600px) {
  .about {
    margin-top: 1.5rem;
  }
  span {
    font-size: 95%;
  }
  .my-name {
    margin-bottom: 1.5rem;
  }
}
</style>
