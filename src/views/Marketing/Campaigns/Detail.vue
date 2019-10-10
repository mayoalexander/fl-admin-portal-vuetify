<template lang="html">
  <v-container class="white--text">
    <div v-if="isLoaded">
      <v-layout wrap space-between>
        <v-flex>
          <v-img :src="campaign.photo" height="100" width="100" />
        </v-flex>
        <v-flex class="text-xs-center">
          <h2 class="display-1 mt-0">{{ campaign.title }}</h2>
          <h5 class="title">{{ campaign.subtitle }}</h5>
          <p class="grey--text lighten-3">Created at: {{ campaign.created_at }}</p>
        </v-flex>
        <v-layout justify-end>
          <div class="">
            <v-btn color="primary" block>Launch</v-btn>
          </div>
        </v-layout>
      </v-layout>

      <v-layout wrap space-between>
        <v-flex>
          <h2 class="headline">{{ campaign.description }}</h2>
        </v-flex>
      </v-layout>


      <v-layout row wrap space-between>
        <v-flex xs4>
          <h2 class="headline">Users</h2>
          {{ campaign.attached_users }}
        </v-flex>
        <v-flex xs4>
          <h2 class="headline">Campaign Items</h2>
          {{ campaign.attached_items }}
        </v-flex>
        <v-flex xs4>
          <h2 class="headline">Media</h2>
          {{ campaign.attached_media }}
        </v-flex>
      </v-layout>

      {{ campaign }}
      <!-- <material-stats-card
        color="green"
        icon="mdi-store"
        title="Revenue"
        value="$34,245"
        sub-icon="mdi-calendar"
        sub-text="Last 24 Hours"
      /> -->
    </div>
    <loading-spinner v-else />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      campaign: null,
      isLoaded: false
    }
  },
  async mounted () {
    const campaignId = this.$router.currentRoute.params.id
    const campaign = await this.$fladmin.getCampaign(campaignId)
    this.campaign = campaign
    this.isLoaded = true
  }
}
</script>

<style lang="css" scoped>
</style>
