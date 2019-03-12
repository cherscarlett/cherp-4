<template>
  <nav>
    <ul>
      <li>
        <nuxt-link
          to="/resume"
          name="resume"
          v-bind:aria-current="'/resume' === $nuxt.$route.path ? 'page' : false"
        >Engineer</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/writing"
          name="writing"
          v-bind:aria-current="'/writing' === $nuxt.$route.path ? 'page' : false"
        >Writer</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/photography"
          name="photography"
          v-bind:aria-current="'/photography' === $nuxt.$route.path ? 'page' : false"
        >Artist</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  text-transform: lowercase;
  font-size: 2em;
  line-height: 1pxem;
  transition: all 0.6s ease-in-out;
  position: relative;
}
a:after {
  content: '';
  height: 0%;
  width: 1px;
  background: black;
  left: -0.6em;
  position: absolute;
  transition: all 0.6s ease-in-out;
}
a:hover:after,
a:active:after {
  height: 75%;
}

header.page ul {
  display: flex;
}

header.page li {
  margin: 0 1em;
}

@media screen and (max-width: 900px) {
  header.page a {
    font-size: 1.4em;
    line-height: 50px;
  }
}
</style>
