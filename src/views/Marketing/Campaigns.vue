<template lang="html">
  <v-container
    v-if="campaigns"
    class="mt-0 pt-0">
    <!-- this is the campaign -->
    <!-- {{ campaigns }} -->
    <v-card
      :to="'/marketing/campaigns/' + item.id"
      v-for="(item, i) in campaigns"
      :key="i"
      class="darkBlue white--text mb-2">
      <v-layout
        row
        wrap
        class="">
        <v-flex xs2>
          <v-img
            :src="item.photo"
            height="50"
            width="50" />
        </v-flex>
        <v-flex
          xs7
          class="text-truncate">
          <h4>{{ item.title }}</h4>
        </v-flex>
        <!-- <v-flex><span class="headline title">{{ item.total_views }}</span></v-flex> -->
        <!-- <v-flex>{{ item.attached_items.length }}</v-flex> -->
        <!-- <v-flex>{{ item.attached_media.length }}</v-flex> -->
        <v-flex
          xs2
          class="text-xs-right">
          <v-btn
            :to="'/marketing/campaigns/' + item.id"
            small
            color="darkBlue">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <material-card
      v-if="campaigns"
      color="green"
      title="Active Campaigns"
      text="Campaigns are projects that you can attach actions, media, content, profiles, etc. They are used to create global initatives that use a collection of assets to create maximum impact."
    />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      campaigns: null,
      headers: [
        {
          sortable: false,
          text: 'Name',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Total Views',
          value: 'country'
        },
        {
          sortable: false,
          text: 'Campaign Items',
          value: 'city'
        },
        {
          sortable: false,
          text: 'Attached Media',
          value: 'salary',
          align: 'right'
        }
      ]
    }
  },
  async mounted () {
    const campaigns = await this.$fladmin.getCampaigns()
    this.campaigns = campaigns
  }
}
</script>

<style lang="css">
.text-truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
