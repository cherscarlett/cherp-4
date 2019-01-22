<template>
  <div class="lightbox">
    <transition name="fade">
      <div class="image">
        <img v-bind:src="image" alt>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      width: '0px'
    }
  },
  props: ['image'],
  mounted() {
    this.$Lazyload.$on('loaded', ({ el }) => {
      this.loaded((el.naturalWidth / el.naturalHeight) * 85)
    })
  },
  methods: {
    loaded(width) {
      this.width = width + 'vh'
      if (this.$el.parentElement && width >= 20)
        this.$el.parentElement.style.width = this.width
      this.loading = false
    }
  }
}
</script>

<style>
.lightbox {
  max-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.image {
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  max-height: 85vh;
}
</style>
