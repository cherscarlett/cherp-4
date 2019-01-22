<template>
  <nav>
    <ul>
      <li>
        <nuxt-link
          to="/resume"
          name="resume"
          v-bind:aria-current="'/resume' === $nuxt.$route.path ? 'page' : false"
        >Resume</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/writing"
          name="writing"
          v-bind:aria-current="'/writing' === $nuxt.$route.path ? 'page' : false"
        >Writing</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/photography"
          name="photography"
          v-bind:aria-current="'/photography' === $nuxt.$route.path ? 'page' : false"
        >Photography</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin-top: auto;
  position: relative;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in;
  transform: translateX(0) translateY(0);
}
header.page nav {
  transform: translateX(0) translateY(-5vh);
}
nav:before {
  content: '';
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}
nav:after {
  content: '';
  filter: blur(8px);
  background: transparent url(~assets/bg.jpg) bottom center no-repeat;
  position: absolute;
  top: -10px;
  left: -10px;
  bottom: -10px;
  right: -10px;
  background-size: 100vw 100vh;
  z-index: -1;
  opacity: 1;
  transition: all 0.5s ease-in;
}
header.page nav:after {
  background-position: top center;
  opacity: 0;
}
ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.5s ease-in;
  z-index: 4;
}
header.page ul {
  width: 50%;
  margin-left: 50%;
}
li {
  font-size: 1.5em;
  text-transform: lowercase;
  text-align: center;
  flex-grow: 1;
  font-style: italic;
  font-family: 'Domaine Display Narrow';
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
}
a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease-out;
}
a:hover,
a:active {
  color: #ff1177;
}
@media screen and (max-width: 600px) {
  header.page ul {
    width: 100%;
    margin-left: 0;
  }
}
</style>
