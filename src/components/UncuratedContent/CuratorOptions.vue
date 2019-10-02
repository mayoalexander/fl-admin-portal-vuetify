<template lang="html">
  <v-card
    v-if="selectedItem"
    dark color="darkBlue" class="pa-3">

    <v-card class="elevation-1 pa-2 mb-3">
      <v-layout row wrap>
        <v-flex xs3>
          <v-layout align-center justify-center>
            <img style="height:80px;width:80px;" :src="selectedItem.photo" />
          </v-layout>
        </v-flex>
        <v-flex xs9 class="pl-3">
          <h3 class="mt-0 mb-0">{{ selectedItem.title }}</h3>
          <p class="mb-0">{{ selectedItem.twitter }}</p>
        </v-flex>
      </v-layout>
    </v-card>

    <v-btn color="primary mb-1" block>Add To Radio</v-btn>
    <v-btn color="primary mb-1" block @click="addToBufferQueue()">Add To Buffer</v-btn>
    <v-btn color="primary mb-1" block>Publish to Twitter</v-btn>
  </v-card>
</template>

<script>
import { fladmin } from '@/utils/fladmin'
export default {
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
      fladmin.addToBufferQueue(media)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
