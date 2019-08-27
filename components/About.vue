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
            <a href="https://twitter.com/andrew_levinson" target="_blank" class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                <path
                  class="icon-path"
                  d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                />
              </svg> &nbsp;Twitter
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

.icon {
  fill: var(--link-color);
  transition: all 0.3s ease-in-out;
}

.icon:hover {
  fill: var(--primary-color);
  transition: all 0.3s ease-in-out;
}

.icon svg path {
  width: 18px;
}

.dev {
  margin-top: 5rem;
  opacity: 0.7;
}
</style>
