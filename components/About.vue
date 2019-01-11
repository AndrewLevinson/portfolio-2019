<template>
  <article class="about">
    <h2 id="about">About Me</h2>
    <h5>My name is Andrew and I like to visualize data and design digital products.</h5>
    <div class="about-me-content">
      <div class="img-holder">
        <img src="../assets/guitarist@1x.png" width="100%" alt="pic of me playing guitar">
      </div>
      <div class="about-text" v-html="$md.render(aboutMD)"></div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      aboutMD: `From New York to Chicago and back to New York again, I've been a touring musician in a metal band, a financial consultant for start ups, and a digital product designer at a software agency. Now I'm telling data-driven stories with code. There's clearly a war between **[my left brain vs. my right brain ⇗](https://www.youtube.com/watch?v=0jBK4qDJ-OM)** . In my free time I like playing guitar, making weird music, and browsing **[my favorite subreddit ⇗](https://www.reddit.com/r/dataisugly/)** . I'm probably sitting in a coffee shop in Brooklyn right now working through a strange idea – so reach out and we can collaborate. ✌🏻 
      
##### —
#### Reach Out
___
Full Name: **Andrew Levinson**
Email: **[andrewlevins@gmail.com](mailto:andrewlevins@gmail.com)**
Cell: **[224-622-1788](tel:+2246221788)**
___
`
    }
  }
}
</script>

<style scoped>
.about {
  margin: 7rem 0 5% 0;
}

.about-me-content {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 10rem;
  max-width: 100%;
  /* flex-wrap: wrap-reverse; */
  /* margin-left: 10px; */
}

.img-holder {
  max-width: 40%;
  float: left;
  margin-right: 3rem;
}

img {
  border-radius: 4px;
  max-width: 100%;
}

.about-text {
  width: 60%;
  /* max-width: 500px; */
  /* margin-left: 1rem; */
  align-self: center;
  font-size: 85%;
  /* width: ; */
}

a {
  text-decoration: none;
}
</style>
