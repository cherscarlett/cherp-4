<template>
  <div class="container">
    <Header/>
    <nuxt/>
    <modals-container/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: black;
  font-family: 'Suranna', serif;
  height: 100vh;
}

*,
*:before,
*:after,
ol,
ul {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
section {
  padding: 2em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.76);
  z-index: 999;
  opacity: 1;
}

.v--modal-lightbox {
  top: 50% !important;
  left: 50% !important;
  overflow: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.v--modal-background-click {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.nuxt-progress {
  opacity: 0.5;
  mix-blend-mode: soft-light;
}
</style>
