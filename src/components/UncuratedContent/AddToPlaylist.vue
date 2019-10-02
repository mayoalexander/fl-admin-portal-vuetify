<template lang="html">
  <v-card
    v-if="selectedItem"
    dark color="darkBlue" class="pa-3">

    <h4 class="headline">Add To Exclusives</h4>

    <v-card class="elevation-1 pa-2">
      <v-layout row wrap>
        <v-flex xs3>
          <v-layout align-center justify-center>
            <img style="height:80px;width:80px;" :src="selectedItem.photo" />
          </v-layout>
        </v-flex>
        <v-flex xs9>
          <h3 class="mt-0">{{ selectedItem.title }}</h3>
          <p>{{ selectedItem.twitter }}</p>
        </v-flex>
      </v-layout>
    </v-card>

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
