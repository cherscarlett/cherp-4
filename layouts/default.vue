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
  },
  transition: {
    name: 'slide',
    mode: 'out-in'
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
  color: white;
  font-family: 'Domaine Display', serif;
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
  color: white;
  text-decoration: none;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: #022728 url(~assets/bg.jpg) bottom center no-repeat;
  background-size: cover;
}
section {
  margin-top: auto;
  position: relative;
  width: 100%;
  padding: 1em 2em;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 1s ease-in-out;
  height: 90vh;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
}
section.page-enter {
  height: 0;
}
section.page-leave-active {
  height: 0;
}
section:before {
  content: '';
  background: rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
section:after {
  content: '';
  filter: blur(8px);
  background: transparent url(~assets/bg.jpg) bottom center no-repeat;
  position: absolute;
  top: -10px;
  left: -10px;
  bottom: -10px;
  right: -10px;
  background-size: 105vw 105vh;
  z-index: -2;
  opacity: 1;
  transition: all 0.5s ease-in;
}

h1 {
  padding: 1em 0;
}
.content {
  overflow: scroll;
  height: 90%;
  padding-bottom: 100px;
  position: relative;
}

p.intro {
  padding: 1em 3em;
  max-width: 600px;
  line-height: 1.3em;
}

h3 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 600px;
  margin: auto;
}

.content-document {
  padding: 2em 0;
  max-width: 800px;
  margin: auto;
}

.content-document a article {
  border: 1px solid transparent;
  transition: all 0.2s ease-out;
}
.content-document a:hover article,
.content-document a:active article {
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.2);
  color: black;
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

@media screen and (max-width: 700px) {
  .content {
    padding-bottom: 200px;
  }
}
</style>
