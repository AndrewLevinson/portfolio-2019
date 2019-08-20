<template>
  <article class="about">
    <div class="about-me-content">
      <p class="about-text">
        From New York to Chicago and back to New York again, I've been a touring musician in a metal band, a financial consultant for start ups, and a digital product designer at a software agency. Now
        I'm telling stories with data and code. There's clearly a war between
        <a
          href="https://www.youtube.com/watch?v=0jBK4qDJ-OM"
        >my left brain vs. my right brain</a>. In my free time I like playing guitar, making weird music, and browsing
        <a
          href="https://www.reddit.com/r/dataisugly/"
        >my favorite subreddit</a>. I'm probably sitting in a coffee shop in Brooklyn right now working through a strange idea &#8212; so reach out and we can collaborate. ✌🏻
      </p>

      <p class="datum">Say 👋</p>

      <footer class="icons">
        <!-- <p>
          Email:
          <a href="mailto:andrewlevins@gmail.com">andrewlevins@gmail.com</a>
        </p>-->
        <ul>
          <li>
            <a href="mailto:andrewlevins@gmail.com" target="_blank">
              <i class="fas fa-envelope" alt="my email"></i> &nbsp;Email
            </a>
          </li>
          <!-- <li>
            <a href="/AndrewLevinson_Resume.pdf" target="_blank">
              <i class="fas fa-file-download" alt="my resume link"></i> &nbsp;Resume
            </a>
          </li>-->
          <li>
            <a href="https://github.com/AndrewLevinson" target="_blank">
              <i class="fab fa-github" alt="https://github.com/AndrewLevinson"></i> &nbsp;Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/andrew_levinson" target="_blank">
              <i class="fab fa-twitter" alt="https://twitter.com/andrew_levinson"></i> &nbsp;Twitter
            </a>
          </li>
          <li>
            <a href="/AndrewLevinson_Resume.pdf" target="_blank">
              <i class="fas fa-file-download" alt="/AndrewLevinson_Resume.pdf"></i> &nbsp;Resumé
            </a>
          </li>
        </ul>
      </footer>
    </div>
    <div class="dev">
      <p>
        I built this site with
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> and
        <a href="https://www.storyblok.com/" target="_blank">Storyblok</a>. Hosted on
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
    </div>
  </article>
</template>

<style scoped>
.about-me-content {
  max-width: 700px;
}

.about-text {
  margin-bottom: 5rem;
}

footer {
  margin-top: 1rem;
}

.icons li {
  list-style: none;
  display: inline-block;
  padding-right: 3rem;
  margin-bottom: 1.5rem;
}

.dev {
  margin-top: 5rem;
  opacity: 0.6;
}
</style>
