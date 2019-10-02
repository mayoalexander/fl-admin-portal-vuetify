<template lang="html">
  <v-card
    v-if="selectedItem"
    dark color="darkBlue" class="pa-3">

    <h4 class="headline">Add To Exclusives</h4>

    <selected-media-card :selectedItem="selectedItem"/>

    <div class="">
      <h3>Playlist:</h3>
      <v-select
        v-model="selectedPlaylist"
        :items="allPlaylists"
        item-text="name"
        item-value="id"
        label="label"
      ></v-select>
      <v-btn @click="addMediaToPlaylist()" block color="primary">Submit</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    selectedItem: Object,
    uncuratedContent: Object,
    selectedType: String,
    allPlaylists: Array
  },
  data () {
    return {
      selectedPlaylist: null,
    }
  },
  methods: {
    addMediaToPlaylist () {
      console.log({
        selectedPlaylist: this.selectedPlaylist,
        selectedItem: this.selectedItem,
        parent: this.$parent.$parent.$parent
      })
      this.$parent.$parent.$parent.dialog = false
      // remove from playlist
      const selection = this.uncuratedContent[this.selectedType]
      selection.splice(selection.indexOf(this.selectedItem), 1)
    },
  }
}
</script>

<style lang="css" scoped>
</style>
