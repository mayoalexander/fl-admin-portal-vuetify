<template lang="html">
  <v-container class="white--text">
    <div v-if="isLoaded">
      <v-layout
        wrap
        column
        space-between>
        <v-layout
          xs12
          align-center
          justify-center
          class="mb-3">
          <div class="mb-3">
            <v-img
              :src="campaign.photo"
              height="160px"
              width="160px" />
          </div>
        </v-layout>
        <v-flex class="text-xs-center px-2">
          <h2 class="display-1 mt-0">{{ campaign.title }}</h2>
          <h5 class="title">{{ campaign.subtitle }}</h5>
          <p class="grey--text lighten-3">Created at: {{ campaign.created_at }}</p>
        </v-flex>
        <v-layout
          align-center
          justify-center
          column
          class="my-3">
          <img
            :src="campaign.qr_code"
            height="160px"
            width="160px"
            alt="">
          <v-btn
            :style="{
              width: '160px'
            }"
            small
            class="success"
            @click="previewScan(campaignURL)">
            Preview Scan
          </v-btn>
        </v-layout>
      </v-layout>

      <v-layout
        row
        wrap
        space-between>
        <!-- <v-flex
          v-if="campaign.attached_items.length > 0"
          xs12
          sm6>
          <h2 class="headline">Services</h2>
          <list-item
            v-for="(item, i) in campaign.attached_items"
            :key="i"
            :item="item" />
        </v-flex> -->
        <!-- <v-flex
          v-if="campaign.attached_users.length > 0"
          xs12
          sm6
          class="">
          <h2 class="headline">Profiles</h2>
          <v-card
            v-for="(item, x) in campaign.attached_users"
            :key="x"
            :item="item"
            class="darkBlue white--text mb-1">
            <v-card-text>
              <v-layout
                row
                wrap>
                <v-flex
                  xs2
                  sm1>
                  <v-img
                    :src="item.photo"
                    height="60px"
                    width="60px"/>
                </v-flex>
                <v-layout
                  xs10
                  sm11
                  justify-start
                  align-start
                  column
                  class="pl-3 text-truncate">
                  <a
                    :href="'https://freelabel.net/content/profile/' + item.pk"
                    target="_blank">
                    <span class="font-weight-bold mr-1 mb-1">{{ item.name }}</span>
                  </a>
                  <div class="ml-0"><i class="fa fa-twitter"/> {{ item.twitter }}</div>
                  <div class="ml-0"><i class="fa fa-instagram"/> {{ item.instagram }}</div>
                </v-layout>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex> -->

        <v-flex
          v-if="campaign.attached_media.length > 0"
          xs12>
          <h2 class="headline">Media</h2>
          <v-card
            v-for="(item, y) in campaign.attached_media"
            :key="y"
            :item="item"
            :href="'https://freelabel.net/content/' + item.type + '/' + item.id"
            class="darkBlue white--text mb-1"
            target="_blank">
            <v-card-text>
              <v-layout
                row
                wrap>
                <v-flex
                  xs2
                  sm1>
                  <v-img
                    :src="item.photo"
                    height="60px"
                    width="60px"/>
                </v-flex>
                <v-layout
                  xs10
                  sm11
                  justify-start
                  align-center
                  class="pl-3 text-truncate">
                  <span>{{ item.twitter }}</span>
                  - "{{ item.title }}"
                </v-layout>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout
        wrap
        space-between>
        <v-flex>
          <h3>Actions</h3>
          <v-layout
            column
            wrap
            justify-start>
            <v-card
              xs12
              class="darkBlue px-4 pb-3 mb-2">
              <v-switch
                v-model="campaign.log_scan"
                class="ml-3"
                color="primary"
                dark
                light
                error
                error-messages="errorMessages"
                false-value="falseValue"
                hide-details
                hint
                persistent-hint
                input-value="inputValue"
                label="Log Scan"
                loading="false"
                validate-on-blur
                value="value"
              />
            </v-card>
            <v-card
              xs12
              class="darkBlue pt-2 px-4">
              <v-text-field
                v-if="campaign.redirect_url"
                id="id"
                v-model="campaign.redirect_url"
                name="name"
                large
                label="Redirect URL"
              />
              <v-btn
                small
                block
                class="darkBlue white--text"
                @click="saveActions()">
                Save
              </v-btn>
            </v-card>

          </v-layout>
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
  computed: {
    campaignURL () {
      // return 'https://freelabel.net/?campaign=' + this.campaign.id + '&popup=true'
      return this.campaign.redirect_url
    }
  },
  async mounted () {
    const campaignId = this.$router.currentRoute.params.id
    const campaign = await this.$fladmin.getCampaign(campaignId)
    this.campaign = campaign
    this.isLoaded = true
  },
  methods: {
    openMedia (item) {
      event.preventDefault()
      event.stopPropagation()
      window.open('https://freelabel.net/' + item.type + '/' + item.id)
    },
    previewScan (url) {
      window.open(url)
    },
    saveActions () {
      // this.$fladmin.updateCampaign({
      //
      // })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
