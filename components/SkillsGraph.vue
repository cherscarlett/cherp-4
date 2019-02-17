<template>
  <aside class="skills-graph">
    <h3>Skills</h3>
    <div>
      <p>To limit your languages is to limit your world.</p>
    </div>
  </aside>
</template>

<script>
export default {
  props: ['skills']
}
</script>

<style scoped>
div {
  padding: 1em;
  text-align: center;
}
p {
  font-family: 'Domaine Display Narrow', serif;
  font-style: italic;
  font-size: 1.4em;
}
</style>
