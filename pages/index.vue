<template>
  <div/>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.state.token
    },
    access() {
      return this.$store.state.access
    },
    isStale() {
      return Boolean(this.$store.state.staleTime < Date.now())
    }
  }
}
</script>
