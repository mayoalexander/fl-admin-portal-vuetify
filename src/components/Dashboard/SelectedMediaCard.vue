<template lang="html">
  <v-card
    v-if="selectedItem"
    color="darkBlue"
    class="elevation-1 mb-0">
    <!-- <v-layout row wrap>
      <v-flex xs3>
        <v-layout align-center justify-center>
          <img style="height:80px;width:80px;" :src="getPhoto(selectedItem)" />
        </v-layout>
      </v-flex>
      <v-flex xs9 class="pl-3">
        <h3 class="mt-0 mb-0">
          <a :href="getURL()" target="_blank" class="white--text">{{ selectedItem.title }}</a>
        </h3>
        <p class="mb-0">
          <i class="fa fa-twitter mr-1"></i>
          <a :href="'https://twitter.com/' + selectedItem.twitter.replace('@', '')" target="_blank">{{ selectedItem.twitter }}</a>
        </p>
        <p class="mb-0">
          <i class="fa fa-instagram mr-1"></i>
          <a :href="'https://instagram.com/' + selectedItem.instagram.replace('@', '')" target="_blank">{{ selectedItem.instagram }}</a>
        </p>
      </v-flex>
    </v-layout> -->

    <div class="">
      <iframe
        :src="getURL()"
        width="100%"
        height="490px"
        scrolling="no"
        frameborder="0"/>
    </div>

  </v-card>
</template>

<script>

export default {
  props: {
    selectedItem: Object
  },
  methods: {
    getPhoto (media) {
      if (media && media.type === 'video') {
        return 'https://i.ytimg.com/vi/' + media.media_id + '/hqdefault.jpg'
      }
      return this.selectedItem.photo
    },
    getURL () {
      return 'https://freelabel.net/content/' + this.selectedItem.type + '/' + this.selectedItem.id
    }
  }
}
</script>

<style lang="css" scoped>
  iframe {
    overflow: hidden;
  }
</style>
