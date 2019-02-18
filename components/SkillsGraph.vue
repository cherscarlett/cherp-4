<template>
  <aside class="skills-graph">
    <h3>Skills</h3>
    <div>
      <p>To limit your languages is to limit your world.</p>
      <ul class="skill-container">
        <li class="skill-item" v-for="(skill, index) in skills" :key="index"></li>
      </ul>
      <small>Data from github.</small>
    </div>
  </aside>
</template>

<script>
import * as d3 from 'd3'

export default {
  computed: {
    skills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    const total = d3.max(this.skills, d => d.size) / 3
    d3.selectAll('li.skill-item')
      .data(this.skills)
      .append('div')
      .transition()
      .duration(1000)
      .style(
        'width',
        d =>
          `${(d.size / total <= 0.55 ? (d.size / total) * 4 : d.size / total) *
            100}%`
      )
      .style('min-width', '20%')

    d3.selectAll('li.skill-item div')
      .data(this.skills)
      .append('span')
      .transition()
      .duration(1600)
      .style('opacity', d => (d.size / total <= 0.05 ? '0' : '.4'))
      .text(d => d.name)
  }
}
</script>

<style>
.skills-graph div {
  padding: 1em;
  text-align: center;
}
.skill-container {
  padding-top: 1em;
}
.skills-graph p {
  font-family: 'Domaine Display Narrow', serif;
  font-style: italic;
  font-size: 1.4em;
}
.skill-item {
  width: 50%;
}
.skill-item div {
  position: relative;
  white-space: nowrap;
  max-width: 90%;
  width: 0%;
  text-transform: lowercase;
  font-family: 'Domaine Display Narrow', serif;
  font-style: italic;
  font-weight: bold;
  padding: 0;
  transition: all 1s ease-in-out;
  height: 60px;
  font-size: 1.6em;
  line-height: 60px;
  text-indent: 0.5em;
  cursor: help;
}
.skill-item span {
  opacity: 0;
  transition: all 1s ease-in-out;
  color: black;
}
.skill-item:hover span {
  opacity: 1 !important;
  color: white;
}

.skill-item div:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.55);
  mix-blend-mode: soft-light;
  border: 1px solid white;
  z-index: -1;
}

.skill-item:nth-child(odd) {
  margin-left: 49.5%;
}
.skill-item:nth-child(odd) div {
  text-align: left;
}
.skill-item:nth-child(even) {
  direction: rtl;
  margin-left: 0.5%;
}
.skill-item:nth-child(even) div {
  margin-left: auto;
  text-align: right;
}

small {
  padding: 3em;
  display: inline-block;
  mix-blend-mode: soft-light;
}
</style>
