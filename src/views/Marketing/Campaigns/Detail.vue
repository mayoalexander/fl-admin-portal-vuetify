<template lang="html">
  <v-container class="white--text">
    <div v-if="isLoaded">
      <v-layout wrap space-between>
        <v-layout xs12 align-center justify-center class="mb-3">
          <div class="">
            <v-img :src="campaign.photo" height="100" width="100" />
          </div>
        </v-layout>
        <v-flex class="text-xs-center px-2">
          <h2 class="display-1 mt-0">{{ campaign.title }}</h2>
          <h5 class="title">{{ campaign.subtitle }}</h5>
          <p class="grey--text lighten-3">Created at: {{ campaign.created_at }}</p>
        </v-flex>
        <v-layout justify-center>
          <div class="">
            <img :src="campaign.qr_code" height="100px" width="100px" alt="">
            <!-- <v-btn color="primary" block>Launch</v-btn> -->
          </div>
        </v-layout>
      </v-layout>

      <v-layout wrap space-between>
        <v-flex>
          <h2 class="headline">{{ campaign.description }}</h2>
        </v-flex>
        <v-flex>
          <h3>Actions</h3>
          <v-layout row wrap justify-start>
            <v-card class="darkBlue px-4 mr-2">
              <v-switch
                class="ml-3"
                color="primary"
                dark light
                error error-messages="errorMessages"
                false-value="falseValue"
                hide-details
                hint persistent-hint
                input-value="inputValue"
                label="Log Scan"
                loading="false"
                ripple="true"
                validate-on-blur
                value="value"
              ></v-switch>
            </v-card>
            <v-card class="darkBlue px-4">
              <v-text-field
                name="name"
                label="Redirect URL"
                v-model="JSON.parse(campaign.actions).actions[1].redirect"
                id="id"
              ></v-text-field>
            </v-card>

          </v-layout>
        </v-flex>
      </v-layout>


      <v-layout row wrap space-between>
        <v-flex xs12 sm6>
          <h2 class="headline">Campaign Items</h2>
          <list-item v-for="(item, i) in campaign.attached_items" :item="item" />
        </v-flex>
        <v-flex xs12 sm6 class="px-2">
          <h2 class="headline">Profiles</h2>
          <v-card
            v-for="item in campaign.attached_users" :item="item"
            class="darkBlue white--text mb-1">
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs2 sm1>
                  <v-img :src="item.photo" height="60px" width="60px"/>
                </v-flex>
                <v-layout xs10 sm11 justify-start align-start column class="pl-3 text-truncate">
                  <a :href="'https://freelabel.net/content/profile/' + item.pk" target="_blank">
                    <span class="font-weight-bold mr-1 mb-1">{{ item.name }}</span>
                  </a>
                  <div class="ml-0"><i class="fa fa-twitter"></i> {{ item.twitter }}</div>
                  <div class="ml-0"><i class="fa fa-instagram"></i> {{ item.instagram }}</div>
                </v-layout>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <h2 class="headline">Media</h2>
          <v-card
            v-for="(item, i) in campaign.attached_media" :item="item"
            class="darkBlue white--text mb-1"
            :href="'https://freelabel.net/content/' + item.type + '/' + item.id"
            target="_blank">
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs2 sm1>
                  <v-img :src="item.photo" height="60px" width="60px"/>
                </v-flex>
                <v-layout xs10 sm11 justify-start align-center class="pl-3 text-truncate">
                  <span>{{ item.twitter }}</span>
                  - "{{ item.title }}"
                </v-layout>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <loading-spinner v-else />
  </v-container>
</template>

<script>
import UsersList from '@/components/Dashboard/UsersList'
import ListItem from '@/components/Dashboard/ListItem'
export default {
  components: {
    UsersList,
    ListItem
  },
  data () {
    return {
      campaign: null,
      isLoaded: false
    }
  },
  methods: {
    openMedia (item) {
      event.preventDefault()
      event.stopPropagation()
      window.open('https://freelabel.net/' + item.type + '/' + item.id)
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
