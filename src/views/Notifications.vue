<template lang="html">
  <v-container class="pt-0">
    <!-- <h4 class="display-1 white--text">Notifications</h4> -->
    <loading-spinner v-if="!notifications" />
    <notifications-list
      v-if="notifications"
      :notifications="notifications"
      :headers="headers"
      class="darkBlue"
      />
  </v-container>
</template>

<script>
import NotificationsList from '@/components/Notifications/List'
import { fladmin } from '@/utils/fladmin'
export default {
  components: {
    NotificationsList
  },
  data () {
    return {
      quotas: null,
      notifications: null,
      headers: [
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Action',
          value: 'instagram',
          align: 'right'
        }
      ]
    }
  },
  async mounted () {
    const result = await fladmin.getNotifications()
    this.notifications = result
  },
  computed: {
    topArtists () {
      return this.top_artists
    }
  }
}
</script>

<style lang="css" scoped>
</style>
