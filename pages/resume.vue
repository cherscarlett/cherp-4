<template>
  <section>
    <header>
      <h1>Resume</h1>
      <p
        class="intro"
      >Software Engineer with over 20 years of experience in front-end technologies and 15 years of full-stack experience.</p>
      <nav class="crumb-nav">
        <ul>
          <li v-for="(crumb, idx) in crumbs" :key="idx">
            <button
              :disabled="currentCrumb === crumb.id ? true : false"
              class="crumb"
            >{{crumb.label}}</button>
          </li>
        </ul>
      </nav>
    </header>
    <div class="content content-resume">
      <div :class="`resume-list ${crumb === 'resume' ? 'is-active-crumb' : ''}`">
        <h3 class="resume-type">Employment</h3>
        <ol class="resume-document">
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>Starbucks</h1>
                  <h2>Lead Software Engineer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Remote</p>
                  <p class="timespan">November 2017 - present</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Turning code into coffee so you can turn coffee into code.</p>
                  </li>
                  <li>
                    <p>Led replatforming efforts for Careers hub from .net to react-static.</p>
                  </li>
                  <li>
                    <p>Led creation of a new marketing-driven web platform tool for internal content creators.</p>
                  </li>
                  <li>
                    <p>Led a team of four engineers working to add features and improve the Starbucks PWA.</p>
                  </li>
                  <li>
                    <p>Led initiatives in celebrating and appreciating cultural diversity among our customers.</p>
                  </li>
                  <li>
                    <p>Led efforts in moving to quickly merging pull requests and early QA sign off for daily deployments.</p>
                  </li>
                  <li>
                    <p>Led efforts to increase reusability of Starbucks branded React components across the tech org.</p>
                  </li>
                  <li>
                    <p>Janitor and servant of the Starbucks Pattern Library.</p>
                  </li>
                  <li>
                    <p>Spear-headed efforts for an internal Starbucks technology blog.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>React Native</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>CSSModules</li>
                  <li>Javascript</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>World Wide Technology</h1>
                  <h2>Senior Software Engineer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Saint Louis, MO</p>
                  <p class="timespan">August 2016 - August 2017</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Overhauled internal SQL processes in groovy to micro-services in a RESTful API based in Node.js.</p>
                  </li>
                  <li>
                    <p>Integrated third party software with Oracle PL/SQL APIs by creating a state manager to maintain data integrity.</p>
                  </li>
                  <li>
                    <p>Worked on angular/groovy based applications to provide Project, Time, and People Management with a great user experience in lieu of Oracle's web-based applications.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>Tomcat</li>
                  <li>Maven</li>
                  <li>Grunt</li>
                  <li>LESS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Angular</li>
                  <li>Groovy</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>Blizzard Entertainment</h1>
                  <h2>Software Engineer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Irvine, CA</p>
                  <p class="timespan">August 2015 - August 2016</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Mentored at-risk youth to build a special development build of Hearthstone with 4 other engineers. The kids got to design their own cards and play with the special version on campus at the end of the 6-month program.</p>
                  </li>
                  <li>
                    <p>Led efforts to overhaul esports experiences for Tespa, Blizzcon, World of Warcraft, Heroes of the Storm and Overwatch.</p>
                  </li>
                  <li>
                    <p>Conceptualized and co-authored Python replay parser service for Heroes of the Dorm (utilizing celery &amp; docker); causing a demand for support for live statistic API connections for sites and users.</p>
                  </li>
                  <li>
                    <p>Helped lead department-wide shift into newer technologies and better practices.</p>
                  </li>
                  <li>
                    <p>Built new Blizzcon.com site; including a heavy influence in vision, design, and UX on new interactive schedule, livestream and VOD experiences, esports hub, and 'con-textual attendance' April Fools' joke launched in 2017. Led front-end strategy prior to exit, and was consulted with after my departure.</p>
                  </li>
                  <li>
                    <p>Co-developed the redesigned tespa.org to work with our internal CMS, despite the support not being optimal, leading to big change discussions for internal tools with development teams and Blizzard users as stakeholders.</p>
                  </li>
                  <li>
                    <p>Developed some of the best esports brackets on the web; including designing and developing a custom Angular admin interface that communicated with our internal game data API for storage.</p>
                  </li>
                  <li>
                    <p>Led front-end strategy on Tespa's redesigned marketing site.</p>
                  </li>
                  <li>
                    <p>Assisted in development of game marketing sites for Heroes of the Storm and Overwatch.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Node.js</li>
                  <li>Jade</li>
                  <li>Freemarker</li>
                  <li>Tomcat</li>
                  <li>Maven</li>
                  <li>Gulp</li>
                  <li>LESS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Angular</li>
                  <li>Ember</li>
                  <li>Handlebars</li>
                  <li>PHP</li>
                  <li>Protobuf</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>cherp.io</h1>
                  <h2>Designer &amp; Engineer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Remote</p>
                  <p class="timespan">January 2014 - Present</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Design, develop &amp; maintain personal website to showcase and expand current capabilities.</p>
                  </li>
                  <li>
                    <p>Explore emerging technology to incorporate and enhance professional projects.</p>
                  </li>
                  <li>
                    <p>Write public, open-source code to help others and knowledge-share.</p>
                  </li>
                  <li>
                    <p>Mentor youth and adults to engage and become educated in STEM.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Ruby</li>
                  <li>Rails</li>
                  <li>Haml</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>SASS</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Node.js</li>
                  <li>JavaScript</li>
                  <li>Marko</li>
                  <li>Jade</li>
                  <li>jQuery</li>
                  <li>Three.js</li>
                  <li>D3</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Jekyll</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                  <li>Vue.js</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>USA Today (Gannett)</h1>
                  <h2>Senior Developer, Web &amp; Emerging Platforms</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">McLean, VA</p>
                  <p class="timespan">November 2011 - August 2015</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Developed and maintained front-end of 100+ mobile sites (grails/JSON/XML) and hybrid iPhone/Android applications for local Gannett markets across the United States.</p>
                  </li>
                  <li>
                    <p>Assisted in grails/groovy/velocity scripting in site maintenance and new feature additions.</p>
                  </li>
                  <li>
                    <p>Assisted in concept, design and development of a new, improved CMS for journalists working for USAT and Gannett.</p>
                  </li>
                  <li>
                    <p>Maintained front-end of the new USA Today desktop HTML5/CSS3 website.</p>
                  </li>
                  <li>
                    <p>Developed and maintained front-end redesign of USA Today and Gannett publishing and broadcast mobile sites, including innovating new ad experiences, new user experiences (longform stories, galleries, live video broadcasts) working in Django, Python, HTML5, CSS3 and Javascript/AJAX.</p>
                  </li>
                  <li>
                    <p>Spear-headed VR Stories project.</p>
                  </li>
                  <li>
                    <p>Completed light, fill-in design work.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Python</li>
                  <li>Django</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>Underscorejs</li>
                  <li>RequireJS</li>
                  <li>Backbonejs</li>
                  <li>jQuery</li>
                  <li>SQL</li>
                  <li>Groovy</li>
                  <li>Velocity</li>
                  <li>SpringSource MVC</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>Biego</h1>
                  <h2>Full-Stack Engineer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Remote</p>
                  <p class="timespan">January 2008 - December 2008</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Designed various types of database-driven web applications; including marketing sites with custom CMS solutions and social networks.</p>
                  </li>
                  <li>
                    <p>Architected data structures for web applications based in Ruby on Rails using MySQL.</p>
                  </li>
                  <li>
                    <p>Developed and maintained server-side applications using Ruby on Rails.</p>
                  </li>
                  <li>
                    <p>Developed the front-end of Ruby applications in Haml and Sass.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Ruby</li>
                  <li>Rails</li>
                  <li>MySQL</li>
                  <li>Sass</li>
                  <li>Haml</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>JavaScript</li>
                  <li>RJS</li>
                  <li>Prototype</li>
                  <li>Scriptaculous</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>Neutrino</h1>
                  <h2>Front-End Developer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Remote</p>
                  <p class="timespan">January 2008 - Present</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Worked closely with the design team to translate Real Estate Website designs into pixel-perfect functioning sites.</p>
                  </li>
                  <li>
                    <p>Explored technologies to enhance a user's experience in each site with emerging code and techniques.</p>
                  </li>
                  <li>
                    <p>Designed fill-in pages such as pop-ups and marketing pages.</p>
                  </li>
                  <li>
                    <p>Filled in on server-side code when needed using PHP.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>LuxuryRealEstate.com</h1>
                  <h2>Front-End Developer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Seattle, WA</p>
                  <p class="timespan">March 2006 - January 2008</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Developed and maintained front-end of hundreds of real estate desktop websites.</p>
                  </li>
                  <li>
                    <p>Assisted in ruby on rails development in site maintenance and enhancements.</p>
                  </li>
                  <li>
                    <p>Completed light, fill-in design work, such as pop-ups and forms.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Ruby</li>
                  <li>.NET</li>
                  <li>Haml</li>
                  <li>Sass</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>RJS</li>
                  <li>jQuery</li>
                  <li>mySQL</li>
                </ul>
              </div>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>cherstewart.com [retired]</h1>
                  <h2>Designer &amp; Developer</h2>
                </hgroup>
                <div class="metadata">
                  <p class="location">Remote</p>
                  <p class="timespan">March 2005 - November 2011</p>
                </div>
              </header>
              <div class="resume-document-content">
                <ul>
                  <li>
                    <p>Acquired and fulfilled contracts to concept, design and develop database-driven websites using Ruby on Rails and PHP.</p>
                  </li>
                  <li>
                    <p>Set-up and maintained web servers.</p>
                  </li>
                  <li>
                    <p>Explored emerging technologies with personal and pro-bono projects.</p>
                  </li>
                </ul>
              </div>
              <div class="resume-document-skills">
                <ul>
                  <li>Ruby</li>
                  <li>PHP</li>
                  <li>Rails</li>
                  <li>Haml</li>
                  <li>Sass</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>RJS</li>
                  <li>Ajax</li>
                  <li></li>
                </ul>
              </div>
            </article>
          </li>
        </ol>
        <h3 class="resume-type">Education</h3>
        <ol class="resume-document">
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>University of Missouri</h1>
                  <h2>Physics &amp; Astronomy</h2>
                </hgroup>
                <div class="metadata edu">
                  <p class="location">Saint Louis, MO</p>
                  <p class="timespan">September 2008 - May 2011</p>
                </div>
              </header>
            </article>
          </li>
          <li class="resume-document-item">
            <article>
              <header>
                <hgroup>
                  <h1>Academy of Art</h1>
                  <h2>Photography &amp; Web Design</h2>
                </hgroup>
                <div class="metadata edu">
                  <p class="location">Remote</p>
                  <p class="timespan">September 2005 - May 2007</p>
                </div>
              </header>
            </article>
          </li>
        </ol>
      </div>
      <SkillsGraph/>
    </div>
  </section>
</template>
<script>
import SkillsGraph from '~/components/SkillsGraph.vue'

export default {
  components: { SkillsGraph },
  computed: {
    crumbs() {
      return [
        {
          label: 'Experience & Education',
          id: 'resume'
        },
        {
          label: 'Skills',
          id: 'skills'
        }
      ]
    },
    currentCrumb() {
      return 'resume'
    }
  },
  methods: {
    updateCrumb(crumb) {
      this.currentCrumb = crumb
    }
  }
}
</script>
<style>
.content-resume {
  display: grid;
  grid-template-columns: 60% 40%;
  overflow: hidden;
}
.resume-list,
.skills-graph {
  padding-top: 1em;
  overflow: auto;
}
.skills-graph {
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.skills-graph h3 {
  margin: 0 2em;
}
.resume-document {
  max-width: 800px;
  margin: auto;
}
.resume-document-item {
  text-align: left;
  padding: 1em 0 2em 0;
}
.resume-document-item header {
  display: flex;
  align-items: center;
}
.resume-document-item .metadata {
  margin-left: auto;
  text-align: right;
}
.resume-document-item .timespan {
  font-style: italic;
}
.resume-document-item h1 {
  font-weight: bold;
  font-size: 2em;
  padding: 0;
  margin: 0;
  line-height: 1em;
}
.resume-document-item h2 {
  font-weight: normal;
  font-style: italic;
  font-size: 1.2em;
}
.resume-document-content {
  margin: 2em 0;
}
.resume-document-content li {
  margin: 1em 3em;
  line-height: 1.3em;
}
.resume-document-skills ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.66);
  color: black;
  border: 1px solid white;
  font-weight: bold;
  padding: 1em;
}
.resume-document-skills li {
  text-align: center;
  padding: 10px 20px;
}
.crumb-nav {
  display: none;
}
@media screen and (max-width: 900px) {
  .content-resume {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
  .skills-graph {
    display: none;
  }
  .crumb-nav {
    display: none;
  }
  .crumb-nav li {
    display: inline;
  }
  .crumb {
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    appearance: none;
    padding: 1em;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;
  }
  .crumb:not([disabled]) {
    cursor: pointer;
  }
  .crumb[disabled] {
    color: black;
    background: rgba(255, 255, 255, 0.4);
  }
}
@media screen and (max-width: 600px) {
  .metadata:not(.edu) {
    font-size: 1em;
    transform: rotate(-90deg);
    transform-origin: 87% 23%;
    white-space: nowrap;
  }
  .edu {
    white-space: nowrap;
  }
  .timespan {
    font-size: 0.9em;
  }
}
</style>
