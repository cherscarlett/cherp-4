import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'loader.svg',
  error: 'loader.svg',
  attempt: 10,
  throttleWait: 1000,
  lazyComponent: true
})
