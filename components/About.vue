<template>
  <article class="about">
    <div class="about-me-content">
      <p class="about-text">
        From New York to Chicago and back to New York again, I've been a touring musician in a metal band, a financial consultant for start ups, and a digital product designer at a software agency. Now
        <strong>I'm telling data-driven stories with code</strong>. There's clearly a war between
        <a
          href="https://www.youtube.com/watch?v=0jBK4qDJ-OM"
        >my left brain vs. my right brain</a>. In my free time I like playing guitar, making weird music, and browsing
        <a
          href="https://www.reddit.com/r/dataisugly/"
        >my favorite subreddit</a>. I'm probably sitting in a coffee shop in Brooklyn right now working through a strange idea &#8212; so reach out and we can collaborate. ✌🏻
      </p>
      <div class="email">
        <p>
          Say hi at
          <a href="mailto:andrewlevins@gmail.com">andrewlevins@gmail.com</a>
        </p>
      </div>

      <footer class="icons">
        <ul>
          <li>
            <a href="/AndrewLevinson_Resume.pdf" target="_blank">
              <i class="far fa-file-alt" alt="my resume link"></i> &nbsp;Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/AndrewLevinson" target="_blank">
              <i class="fab fa-github" alt="my github site"></i> &nbsp;Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/andrew_levinson" target="_blank">
              <i class="fab fa-twitter" alt="my twitter"></i> &nbsp;Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </article>
</template>

<style scoped>
.about-me-content {
  max-width: 700px;
}

.about-text {
  margin-bottom: 8rem;
}

@media (max-width: 600px) {
  .about-text {
    margin-bottom: 6rem;
  }
}

footer {
  margin-top: 2rem;
}

.icons li {
  list-style: none;
  display: inline-block;
  padding-right: 3rem;
}

footer a {
  opacity: 0.75;
}
footer a:hover {
  opacity: 1;
}
</style>
