<template lang="html">
  <v-card
    v-if="selectedItem"
    dark color="darkBlue" class="pa-3">

    <selected-media-card :selectedItem="selectedItem"/>

    <!-- <v-btn color="primary mb-1" block>Add To Radio</v-btn> -->
    <v-btn color="primary mb-1" block @click="viewPost()">View Post</v-btn>
    <v-btn color="primary mb-1" block @click="addToPlaylist()">Add To Playlist</v-btn>
    <v-btn color="primary mb-1" block @click="addToExclusives()">Add To Exclusives</v-btn>
    <v-btn color="primary mb-1" block @click="addToFeatured()">Add To Discover Pool</v-btn>
    <v-btn color="primary mb-1" block @click="addToBufferQueue()">Add to Buffer Queue</v-btn>
    <!-- <v-btn color="primary mb-1" block>Publish to Twitter</v-btn> -->
    <v-btn color="primary mb-1" block @click="viewProfile()">View Profile</v-btn>
    <!-- <v-btn color="danger mb-1" block>Delete Track</v-btn> -->
  </v-card>
</template>

<script>
import { fladmin } from '@/utils/fladmin'
export default {
  components: {},
  props: {
    selectedItem: Object,
    uncuratedContent: Object,
    selectedType: String,
    allPlaylists: Array
  },
  data () {
    return {}
  },
  methods: {
    addToBufferQueue () {
      const media = this.selectedItem
      this.$parent.$parent.$parent.addToBufferQueue(media)
    },
    addToExclusives () {
      const media = this.selectedItem
      this.$parent.$parent.$parent.addToExclusives(media)
    },
    viewProfile () {
      const media = this.selectedItem
      window.open('https://freelabel.net/' + media.twitter)
    },
    addToPlaylist () {
      this.$parent.$parent.$parent.addToPlaylist(this.selectedItem)
    },
    viewPost () {
      const media = this.selectedItem
      window.open('https://freelabel.net/content/' + media.type + '/' + media.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
