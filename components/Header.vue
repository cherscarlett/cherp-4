<template>
  <header v-bind:class="$nuxt.$route.name === 'index' ? '' : 'page'">
    <h1>
      <nuxt-link to="/" name="index">Cher Scarlett</nuxt-link>
    </h1>
    <h2>Software Engineer</h2>
    <ul class="external">
      <li>
        <a href="//twitter.com/codehitchhiker" class="twitter">twitter.com/codehitchhiker</a>
      </li>
      <li>
        <a href="//linkedin.com/in/cherscarlett" class="linkedin">linkedin.com/in/cherscarlett</a>
      </li>
      <li>
        <a href="//github.com/cherscarlett" class="github">linkedin.com/in/cherscarlett</a>
      </li>
    </ul>
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
  mix-blend-mode: hard-light;
  opacity: 0.8;
  margin-top: auto;
  margin-left: 50%;
  transform: translateX(-20vw) translateY(0) rotate(0);
  transition: all 1s ease-in;
  padding: 0;
  line-height: 0.9em;
  position: absolute;
  z-index: 2;
}
h1 a {
  color: #022728;
}

header.page h1 {
  font-size: 2.5em;
  transform: translateX(-72vw) translateY(1vh) rotate(0);
  width: 50%;
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
.external {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 6em;
  transform: translateX(66%) translateY(430%) scale(1);
}
header.page .external {
  transform: translateX(41vw) translateY(8vh) scale(0.75);
}
.external a {
  height: 20px;
  width: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: grayscale(100%) brightness(2.5);
  transition: all 0.6s ease-in-out;
  text-indent: -10000px;
  display: inline-block;
  z-index: 5;
}

.external a:hover,
.external a:active {
  filter: grayscale(0%) brightness(1);
}

.twitter {
  background-image: url(~assets/twitter.svg);
}
.github {
  background-image: url(~assets/github.svg);
}
.linkedin {
  background-image: url(~assets/linkedin.svg);
}

@media screen and (max-width: 1024px) {
  h1 {
    transform: rotate(0) translateX(-35vw) translateY(0);
  }
}
@media screen and (max-width: 880px) {
  h1 {
    transform: rotate(25deg) translateX(-45vw) translateY(10vh);
  }

  h2 {
    transform: translateX(0) translateY(900%);
  }

  .external {
    transform: translateX(0) translateY(900%);
  }
}
@media screen and (max-width: 700px) {
  h1 {
    transform: rotate(45deg) translateX(-40vw) translateY(10vh);
  }

  header.page h1 {
    font-size: 1.5em;
    transform: translateX(-68vw) translateY(8vh) rotate(0);
  }

  header.page .external {
    transform: translateX(32vw) translateY(8vh) scale(0.75);
  }
}
</style>
