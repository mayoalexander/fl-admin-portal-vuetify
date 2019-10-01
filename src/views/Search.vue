<template lang="html">
  <div class="white--text">
    this is the search
    searchResults: {{ searchResults }}
  </div>
</template>

<script>
export default {
  computed: {
    searchResults () {
      return this.$store.state.searchResults
    }
  }
}
</script>

<style lang="css" scoped>
</style>
