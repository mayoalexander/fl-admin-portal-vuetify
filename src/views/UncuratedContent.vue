<template lang="html">
  <v-container class="pt-0 white--text">
    <h4 class="display-1 white--text">Uncurated Content</h4>
    <p class="mb-3">This is all the content that does NOT have any likes, playlist placements, ratings, or has not been touched by a curator/admin. Review the content below and like them to add to the discover page, and add to a playlist to place it onto themed projects targed to specific demographics.</p>
    <loading-spinner v-if="!content" />

    <div v-if="content">
      <v-tabs
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
      </v-tabs>

      <div
        v-for="type in types">
        <div v-show="selectedType === type">
          <!-- <h4>{{ type }}</h4> -->
          <v-data-table
            :headers="headers"
            :items="content[type]"
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
              <td class="text-xs-left">{{ props.item.title }}</td>
              <td class="text-xs-left">{{ props.item.twitter }}</td>
              <td class="text-xs-right">{{ props.item.views }}</td>
              <td class="text-xs-right">
                <v-layout row>
                  <v-btn
                    @click="addToExclusives(props.item)"
                    small fab>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn
                    @click="addToPlaylist(props.item)"
                    small fab>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-layout>
              </td>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="dialog"
      scrollable
      persistent :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card
        v-if="selectedItem"
        dark color="darkBlue" class="pa-3">

        <h4 class="headline">Add To Exclusives</h4>

        <v-card class="elevation-1 pa-2">
          <v-layout row wrap>
            <v-flex xs3>
              <v-layout align-center justify-center>
                <img style="height:80px;width:80px;" :src="selectedItem.photo" />
              </v-layout>
            </v-flex>
            <v-flex xs9>
              <h3 class="mt-0">{{ selectedItem.title }}</h3>
              <p>{{ selectedItem.twitter }}</p>
            </v-flex>
          </v-layout>
        </v-card>

        <div class="">
          <h3>Playlist:</h3>
          <v-select
            v-model="selectedPlaylist"
            :items="allPlaylists"
            item-text="name"
            item-value="id"
            label="label"
          ></v-select>

          <v-btn @click="addMediaToPlaylist()" block color="primary">Submit</v-btn>

        </div>

      </v-card>
    </v-dialog>


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
      uncuratedContent: null,
      selectedItem: null,
      selectedPlaylist: null,
      selectedType: null,
      allPlaylists: null,
      dialog: null,
      types: [
        'track', 'video', 'article'
      ],
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
  async mounted () {
    const result = await fladmin.getUncuratedContent()
    this.uncuratedContent = result
    this.selectedType = this.types[0]

    const res = await fladmin.getFeaturedPlaylists()
    this.allPlaylists = res
  },
  computed: {
    content () {
      return this.uncuratedContent
    }
  },
  methods: {
    addMediaToPlaylist () {
      console.log({
        selectedPlaylist: this.selectedPlaylist,
        selectedItem: this.selectedItem,
      })
      this.dialog = false
      // remove from playlist
      const selection = this.uncuratedContent[this.selectedType]
      selection.splice(selection.indexOf(this.selectedItem), 1)
    },
    addToExclusives (item) {
      // fladmin.addToExclusives(item)
      const selection = this.uncuratedContent[this.selectedType]
      selection.splice(selection.indexOf(item), 1)
    },
    addToPlaylist (item) {
      // fladmin.addToExclusives(item)
      this.selectedItem = item
      this.dialog = true
    },
    playTrack (item) {
      if (item.type === 'video') {
        alert('play youtube')
      }
      if (item.type === 'track') {
        alert('play track')
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
