<template lang="html">
  <v-container class="pt-0 white--text">
    <h4 class="display-1 white--text">Buffer Queue</h4>
    <p class="mb-3">aslkdfjlaksdj</p>

    <loading-spinner v-if="!queuedPosts" />

    <div v-if="queuedPosts">
      <!-- <v-tabs
        color="darkBlue"
        dark
        slider-color="red"
      >
        <v-tab
          v-for="type in types"
          :key="type"
          ripple
          @click="selectedType = type"
        >
          <span class="text-capitalize">{{ type }}s</span>

        </v-tab>
      </v-tabs> -->

      <v-data-table
        :headers="headers"
        :items="queuedPosts"
        hide-actions
        dark
        background-color="darkBlue"
        class="darkBlue"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">
            <v-btn
              @click="playTrack(props.item)"
              color="primary" fab small round>
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </td>
          <td class="text-xs-left">{{ parse(props.item.data).title }}</td>
          <td class="text-xs-left">{{ parse(props.item.data).twitter }}</td>
          <td class="text-xs-left">{{ parse(props.item.data).type }}</td>
          <td class="text-xs-right">{{ parse(props.item.data).views }}</td>
          <td class="text-xs-right">
            <v-layout row justify-end>
              <!-- <v-btn
                @click="addToExclusives(props.item)"
                small fab>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn
                @click="addToPlaylist(props.item)"
                small fab>
                <v-icon>mdi-plus</v-icon>
              </v-btn> -->
              <v-btn
                @click="lauchBufferApproval(props.item)"
                small fab>
                <v-icon>mdi-apps</v-icon>
              </v-btn>
            </v-layout>
          </td>
        </template>
      </v-data-table>
    </div>
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card v-if="selectedItem" color="darkBlue" class="white--text">
        <selected-media-card :selectedItem="parse(selectedItem.data)" />

        <div v-if="isApproving">
          <loading-spinner />
        </div>
        <v-card-actions v-else>
          <v-btn :disabled="isApproving" color="success lighten-1" block @click="approve(selectedItem)">Approve</v-btn>
          <v-btn :disabled="isApproving" color="danger lighten-4" block @click="decline(selectedItem)">Decline</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      queuedPosts: null,
      selectedItem: null,
      isApproving: null,
      dialog: null,
      types: [ 'track', 'video', 'article' ],
      headers: [
        {
          sortable: false,
          text: '',
          value: ''
        },
        {
          sortable: true,
          text: 'Title',
          value: 'title'
        },
        {
          sortable: true,
          text: 'Twitter',
          value: 'twitter',
          align: 'left'
        },
        {
          sortable: true,
          text: 'Type',
          value: 'type',
          align: 'left'
        },
        {
          sortable: true,
          text: 'Views',
          value: 'views',
          align: 'right'
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
  methods: {
    parse (data) {
      return JSON.parse(data)
    },
    lauchBufferApproval (item) {
      this.selectedItem = item
      this.dialog = true
    },
    async approve (item) {
      this.isApproving = true
      this.$fladmin.approveBufferQueuePost(item)
      .then((res) => {
        this.dialog = false
        const collection = this.queuedPosts
        collection.splice(collection.indexOf(item), 1)
      })
      .catch((e) => {
        // alert('Something went wrong. Please try again later..')
        console.log({ error: e })
      })
      .finally(() => {
        this.dialog = false
        this.isApproving = false
      })

    },
    decline (item) {
      this.dialog = false
      const collection = this.queuedPosts
      collection.splice(collection.indexOf(item), 1)
    },
  },
  async mounted () {
    const res = await this.$fladmin.getBufferQueue()
    this.queuedPosts = res
  }
}
</script>

<style lang="css" scoped>
</style>
