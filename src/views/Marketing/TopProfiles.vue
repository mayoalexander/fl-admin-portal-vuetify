<template lang="html">
  <v-container class="pt-0">
    <h4 class="display-1 white--text">Top Profiles</h4>
    <loading-spinner v-if="!topArtists" />
    <profile-list
      v-if="topArtists"
      :top_artists="topArtists"
      :headers="headers"
      class="darkBlue"
    />
  </v-container>
</template>

<script>
import ProfileList from '@/components/Profile/List'
import { fladmin } from '@/utils/fladmin'
export default {
  components: {
    ProfileList
  },
  data () {
    return {
      top_artists: null,
      headers: [
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Instagram',
          value: 'instagram',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Twitter',
          value: 'twitter',
          align: 'right'
        }
      ]
    }
  },
  computed: {
    topArtists () {
      return this.top_artists
    }
  },
  async mounted () {
    const artists = await fladmin.getIncompleteChartingProfiles()
    this.top_artists = artists
  }
}
</script>

<style lang="css" scoped>
</style>
