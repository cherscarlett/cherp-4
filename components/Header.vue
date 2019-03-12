<template>
  <header :class="$nuxt.$route.name === 'index' ? '' : 'page'">
    <div>
      <h1>
        <nuxt-link to="/" name="index">Cher</nuxt-link>
      </h1>
      <Nav/>
    </div>
    <Body/>

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
  </header>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Body from '~/components/Body.vue'

export default {
  components: {
    Nav,
    Body
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

header.page {
  height: 50px;
  justify-content: flex-start;
  padding: 0 2em;
}

nav {
  text-align: left;
  margin: 2em 0;
  position: relative;
  z-index: 2;
  transition: all 1s ease-in-out;
}

header.page nav {
  margin: 0 2em;
}

div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: auto;
  transition: all 1s ease-in-out;
}

header.page div {
  flex-direction: row;
  margin: 0;
}

h1 {
  font-family: Noelan, cursive;
  font-size: 7em;
  font-weight: 400;
  /* animation: neon 2s ease-in-out infinite alternate; */
  /* opacity: 0.8; */
  transition: all 1s ease-in;
  padding: 0;
  line-height: 0.9em;
  text-transform: lowercase;
}
header.page h1 {
  font-size: 2em;
  line-height: 1.5em;
}
svg {
  /* animation: neon2 2s ease-in-out infinite alternate; */
  fill: black;
  stroke: none;
  /* opacity: 0.4; */
  width: 50%;
  margin-left: auto;
  height: 90%;
  transition: all 1s ease-in-out;
}
header.page svg {
  height: 20vh;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  width: 20%;
}
h1 a {
  color: black;
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
@-webkit-keyframes neon2 {
  from {
    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff)
      drop-shadow(0 0 3px #fff) drop-shadow(0 0 4px #ff1177)
      drop-shadow(0 0 7px #ff1177) drop-shadow(0 0 8px #ff1177)
      drop-shadow(0 0 10px #ff1177) drop-shadow(0 0 15px #ff1177);
  }
  to {
    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 2px #fff)
      drop-shadow(0 0 3px #fff) drop-shadow(0 0 4px #ff1177)
      drop-shadow(0 0 5px #ff1177) drop-shadow(0 0 6px #ff1177)
      drop-shadow(0 0 7px #ff1177) drop-shadow(0 0 8px #ff1177);
  }
}
.external {
  display: flex;
  justify-content: center;
  width: 6em;
  transition: all 1s ease-in-out;
  z-index: 5;
  width: 100%;
}
header.page .external {
  width: auto;
  line-height: 2em;
  margin-left: auto;
}
.external li {
  display: flex;
  align-items: center;
  justify-content: center;
}
.external a {
  height: 20px;
  width: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: grayscale(100%) brightness(0);
  transition: all 0.6s ease-in-out;
  text-indent: -10000px;
  display: inline-block;
  margin: 0 10px;
}

.external a:hover,
.external a:active {
  filter: grayscale(0%) brightness(100%);
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
@media screen and (max-width: 900px) {
  header.page {
    min-width: 320px;
    padding: 0 0.5em;
  }
  header.page .external {
    width: 20%;
  }
  header.page .external a {
    height: 14px;
    width: 14px;
  }
  header.page nav {
    margin: 0 1em;
  }
  header.page h1 {
    font-size: 1.3em;
    line-height: 50px;
  }
}
</style>
