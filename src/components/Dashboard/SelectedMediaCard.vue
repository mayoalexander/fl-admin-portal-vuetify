<template lang="html">
  <v-card class="elevation-1 pa-2 mb-0">
    <v-layout row wrap>
      <v-flex xs3>
        <v-layout align-center justify-center>
          <img style="height:80px;width:80px;" :src="getPhoto(selectedItem)" />
        </v-layout>
      </v-flex>
      <v-flex xs9 class="pl-3">
        <h3 class="mt-0 mb-0">{{ selectedItem.title }}</h3>
        <p class="mb-0">
          <i class="fa fa-twitter mr-1"></i>
          <a :href="'https://twitter.com/' + selectedItem.twitter" target="_blank">{{ selectedItem.twitter }}</a>
        </p>
        <p class="mb-0">
          <i class="fa fa-instagram mr-1"></i>
          <a :href="'https://instagram.com/' + selectedItem.instagram.replace('@', '')" target="_blank">{{ selectedItem.instagram }}</a>
        </p>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    selectedItem: Object
  },
  methods: {
    getPhoto (media) {
      if (media.type === 'video') {
        return 'https://i.ytimg.com/vi/' + media.media_id + '/hqdefault.jpg'
      }
      return this.selectedItem.photo
    }
  }
}
</script>

<style lang="css" scoped>
</style>
