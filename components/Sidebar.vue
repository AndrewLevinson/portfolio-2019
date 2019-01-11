<template>
  <nav>
    <div :class="classyName" class="button-holder">
      <nuxt-link to="/">
        <div class="image-holder">
          <img src="../assets/favicon.png" alt="andrew_l" width="100%">
        </div>
      </nuxt-link>
      <button @click="show = !show">About Me</button>
    </div>

    <transition name="slide">
      <section v-if="show">
        <button class="close-btn" @click="show = !show">Close</button>
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
.custom-appear-class {
  opacity: 0.2;
  transition: all 1s ease;
}
.button-holder {
  position: absolute;
  height: 100vh;
  width: 90px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  z-index: 3;
  display: flex;
}

button {
  align-self: center;
  background: transparent;
  border: none;
  color: coral;
  padding: 0.5rem;
  transform: rotate(-90deg);
}

button:hover {
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
}

/* close x in top right of open panel */
.close-btn {
  position: fixed;
  top: 20px;
  right: 10px;
  transform: rotate(0deg);
  border-radius: 100px;
  /* border-color: coral; */
  border: 1px solid coral;
  padding: 0.75rem;
}

.close-btn:hover {
  color: #fff;
  background-color: coral;
  text-decoration: none;
}

.image-holder {
  position: fixed;
  width: 90px;
}

.image-holder img {
  /* margin: 0 auto; */
  /* text-align: center; */
  padding: 2rem;
  /* max-width: 90px; */
}
nav {
  /* background-color: #fff; */
  z-index: 999;
  position: fixed;
  width: 50%;
  min-width: 300px;
  /* border-right: 1px solid #3d3d3d; */
}

/* .hidden {
  transform: translateX(-90%);
  transition: all 0.3s ease-in-out;
} */

.bounce {
  animation: bounce-in 0.5s;
  animation-delay: 2s;
}

@keyframes bounce-in {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(16px);
  }
  100% {
    transform: translateX(0px);
  }
}

section {
  height: 100vh;
  display: flex;
  text-align: left;
  background-color: #fff;
  border-right: 1px solid #ccc;
  transform: translateX(calc(0% + 90px));
  box-shadow: 0px 1px 16px 0px #ccc;
  position: sticky;
  top: 0;
}

section > div {
  /* align-self: center; */
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
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
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
  transition: transform 0.4s ease-in-out;
}

.slide-enter-active {
  transform: translateX(calc(0% + 90px));
}
.slide-leave-active {
  transform: translateX(-100%);
}

.slide-enter,
.slide-leave-to {
  /* opacity: 0; */
  transform: translateX(-100%);
}
</style>
