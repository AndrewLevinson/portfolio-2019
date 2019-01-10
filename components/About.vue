<template>
  <section v-editable="blok" class="about">
    <h2 id="about">{{ blok.about_me_title }}</h2>
    <div class="about-me-content">
      <div class="img-holder">
        <img :src="blok.avatar_pic" width="100%" alt="pic of me playing guitar">
      </div>
      <div class="about-text" v-html="$md.render(blok.about_me_desc)"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.about {
  margin: 5% 0 5% 0;
}

.about-me-content {
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  margin-left: 10px;
}

.img-holder {
  width: 30%;
}

img {
  border-radius: 4px;
  max-width: 100%;
}

.about-text {
  width: 70%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  align-self: center;
}

a {
  text-decoration: none;
}
</style>
