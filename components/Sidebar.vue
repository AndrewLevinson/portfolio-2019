<template>
  <nav>
    <div :class="classyName" class="button-holder">
      <nuxt-link to="/">
        <div class="logo-holder">
          <!-- <img src="/favicon.svg" alt="andrew_l" width="100%"> -->
          <img src="/icon.svg" alt="andrew_l" width="100%">
        </div>
      </nuxt-link>
      <button id="about-button" @click="show = !show">
        About Andrew 👋
        <!-- <span v-if="show">x</span> -->
        <!-- <span v-else>+</span> -->
      </button>
    </div>

    <transition name="slide">
      <section v-if="show">
        <!-- <button class="close-btn" @click="show = !show">Close</button> -->
        <div>
          <About/>
        </div>
        <footer class="icons">
          <ul>
            <li>
              <a href="/AndrewLevinson_Resume.pdf" target="_blank">
                <i class="far fa-file-alt" alt="my resume link"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AndrewLevinson" target="_blank">
                <i class="fab fa-github" alt="my github site"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/andrew_l/" target="_blank">
                <i class="fab fa-instagram" alt="my instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrew-levinson/" target="_blank">
                <i class="fab fa-linkedin-in" alt="my linked in site"></i>
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </transition>
    <div @click="show = !show">
      <transition name="slowFade">
        <div v-if="show" id="modal-holder"></div>
      </transition>
    </div>
  </nav>
</template>

<script>
import About from '@/components/About.vue'

export default {
  components: {
    About
  },
  data() {
    return { classyName: '', show: false }
  },
  mounted() {
    this.classyName = 'bounce'
  }
}
</script>

<style scoped>
.button-holder {
  position: absolute;
  height: 100vh;
  width: 90px;
  /* background-color: #fff; */
  background-color: var(--main-bg-color);
  border-right: 1px solid var(--border-color);
  z-index: 10;
  display: flex;
  justify-content: center;
}

#about-button {
  align-self: center;
  background: transparent;
  border: transparent;
  /* color: var(--btn-color); */
  /* color: var(--link-color); */
  padding: 0.5rem;
  transform: rotate(-90deg);
  white-space: nowrap;
}

#about-button:hover {
  /* text-decoration: underline; */
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;
}

/* close x in top right of open panel */
/* .close-btn {
  position: fixed;
  background-color: #fff;
  top: 20px;
  right: 2rem;
  transform: rotate(0deg);
  border-radius: 100px;
  border: 1px solid var(--btn-color);
  padding: 0.75rem;
}
.close-btn:hover {
  color: #fff;
  background-color: var(--btn-color);
  text-decoration: none;
} */

.logo-holder {
  position: fixed;
  top: 10px;
  left: 0px;
  width: 90px;
}

.logo-holder img {
  padding: 2rem;
}
nav {
  z-index: 999;
  position: fixed;
  width: 510px;
}

.bounce {
  animation: bounce-in 0.5s;
  animation-delay: 5s;
}

@keyframes bounce-in {
  0% {
    width: 90px;
  }
  50% {
    width: 104px;
  }
  100% {
    width: 90px;
  }
}

@media (max-width: 600px) {
  @keyframes bounce-in {
    0% {
      height: 90px;
    }
    50% {
      height: 104px;
    }
    100% {
      height: 90px;
    }
  }
}

#modal-holder {
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  position: fixed; /* Stay in place */
  /* z-index: -100; */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
}

section {
  height: 100vh;
  display: flex;
  text-align: left;
  /* background-color: #fff; */
  background-color: var(--main-bg-color);
  border-right: 1px solid var(--border-color);
  transform: translateX(calc(0% + 90px));
  /* box-shadow: 0px 1px 16px 0px #ccc; */
  position: sticky;
  top: 0;
  z-index: 1;
}

section > div {
  padding-right: 3rem;
  padding-left: 3rem;
  overflow-y: auto;
}
section img {
  margin-top: 2rem;
  margin-bottom: 5rem;
}

#guitarist {
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
  border-radius: 6px;
}

.about-para {
  font-size: 85%;
}

ul {
  list-style: none;
  padding-top: 1.5rem;
}
li {
  padding-top: 0.5rem;
}

footer {
  height: 10vh;
  width: 100%;
  /* background-color: #fff; */
  background-color: var(--main-bg-color);
  position: fixed;
  bottom: 0;
  border-top: 1px solid var(--border-color);
  z-index: 998;
}

.icons > ul {
  bottom: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}

footer a {
  opacity: 0.8;
}
footer a:hover {
  opacity: 1;
}

i {
  font-size: 150%;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-enter-active {
  transform: translateX(calc(0% + 0px));
}
.slide-leave-active {
  transform: translateX(-100%);
}

.slide-enter,
.slide-leave-to {
  opacity: 0.85;
  transform: translateX(-100%);
}

.slowFade-enter,
.slowFade-leave-to {
  opacity: 0;
}
.slowFade-enter-active {
  transition: opacity 0.6s ease-in-out;
  transition-delay: 0.1s;
}
.slowFade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

@media (min-width: 600px) {
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.4s ease-in-out;
  }

  .slide-enter-active {
    transform: translateX(calc(0% + 90px));
  }
  .slide-leave-active {
    transform: translateX(-100%);
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0.85;
    transform: translateX(-100%);
  }
}

@media (max-width: 600px) {
  nav {
    width: 100vw;
    min-width: 0;
  }

  .button-holder {
    position: sticky;
    height: 90px;
    width: 100vw;
    justify-content: flex-start;
    border-bottom: 1px solid var(--border-color);
  }

  #about-button {
    transform: rotate(0deg);
    padding-top: 1.5rem;
  }

  #about-button:hover {
    padding-top: 1.5rem;
  }

  .logo-holder {
    position: static;
  }

  section {
    transform: translateX(0%);
  }

  section > div {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  footer {
    height: 22vh;
  }
}
</style>
