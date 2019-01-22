<template>
  <header v-bind:class="$nuxt.$route.name === 'index' ? '' : 'page'">
    <h1>Cher Scarlett</h1>
    <h2>Software Engineer</h2>
    <Nav/>
  </header>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  overflow: hidden;
  position: relative;
}

header.page {
  height: 100px;
  justify-content: flex-start;
}

h1 {
  font-family: Noelan, cursive;
  font-size: 7em;
  font-weight: 400;
  width: 100%;
  animation: neon 2s ease-in-out infinite alternate;
  color: #022728;
  mix-blend-mode: hard-light;
  opacity: 0.8;
  margin-top: auto;
  margin-left: 50%;
  transform: translateX(-20vw) translateY(0) rotate(0);
  transition: all 1s ease-in;
  padding: 0;
  line-height: 0.9em;
  position: absolute;
}

header.page h1 {
  font-size: 2.5em;
  transform: translateX(-45vw) translateY(1vh) rotate(0);
}

h2 {
  text-transform: uppercase;
  text-shadow: 0 2px 8px #000;
  letter-spacing: 1px;
  transform: translateX(100%) translateY(350%);
  opacity: 1;
  position: absolute;
  transition: all 1s ease-in;
}

header.page h2 {
  opacity: 0;
}

svg {
  width: 100%;
  height: 2em;
}

text {
  text-anchor: middle;
}
@-webkit-keyframes neon {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    transform: rotate(45deg) translateX(-40vw) translateY(10vh);
  }

  header.page h1 {
    font-size: 1.5em;
    transform: translateX(-20vw) translateY(7vh) rotate(0);
  }
  h2 {
    transform: translateX(0) translateY(900%);
  }
}
</style>
