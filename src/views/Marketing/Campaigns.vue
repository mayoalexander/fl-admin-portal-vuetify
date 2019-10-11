<template lang="html">
  <v-container
    v-if="campaigns"
    class="mt-0 pt-0">
    <!-- this is the campaign -->
    <!-- {{ campaigns }} -->
    <v-card
      class="darkBlue white--text mb-2"
      v-for="item in campaigns">
      <v-layout row wrap class="">
        <v-flex xs2>
          <v-img :src="item.photo" height="50" width="50" />
        </v-flex>
        <v-flex xs7 class="text-truncate">
          <h4>{{ item.title }}</h4>
        </v-flex>
        <!-- <v-flex><span class="headline title">{{ item.total_views }}</span></v-flex> -->
        <!-- <v-flex>{{ item.attached_items.length }}</v-flex> -->
        <!-- <v-flex>{{ item.attached_media.length }}</v-flex> -->
        <v-flex xs2 class="text-xs-right">
          <v-btn
            :to="'/marketing/campaigns/' + item.id"
            small color="darkBlue">
            View
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <!-- <v-data-table
      :headers="headers"
      :items="campaigns"
      hide-actions
      color="darkBlue"
      class="darkBlue"
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="subheading font-weight-light text-success text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <td>
          <v-img :src="item.photo" height="50" width="50" />
        </td>
        <td class="text-truncate">
          <h4>{{ item.title }}</h4>
        </td>
        <td><span class="headline title">{{ item.total_views }}</span></td>
        <td>{{ item.attached_items.length }}</td>
        <td>{{ item.attached_media.length }}</td>
        <td class="text-xs-right">
          <v-btn
            :to="'/marketing/campaigns/' + item.id"
            small color="darkBlue">
            View
          </v-btn>
        </td>
      </template>
    </v-data-table> -->

    <material-card
      v-if="campaigns"
      color="green"
      title="Active Campaigns"
      text="Campaigns are projects that you can attach actions, media, content, profiles, etc. They are used to create global initatives that use a collection of assets to create maximum impact."
    >

    </material-card>
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
