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
        v-for="(type, i) in types"
        :key="i">
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
            <template
              slot="items"
              slot-scope="props">
              <td class="text-xs-left">
                <v-btn
                  color="primary"
                  fab
                  small
                  round
                  @click="playTrack(props.item)">
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </td>
              <td class="text-xs-left">{{ props.item.title }}</td>
              <td class="text-xs-left">{{ props.item.twitter }}</td>
              <td class="text-xs-right">{{ props.item.views }}</td>
              <td class="text-xs-right">
                <v-layout row>
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
                    small
                    fab
                    @click="launchPostOptions(props.item)">
                    <v-icon>mdi-apps</v-icon>
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
      :overlay="false"
      scrollable
      max-width="500px"
      transition="dialog-transition"
    >
      <add-to-playlist
        v-if="dialog_contents === 'add_to_playlist'"
        :selected-item="selectedItem"
        :all-playlists="allPlaylists"
        :uncurated-content="uncuratedContent"
        :selected-type="selectedType"
      />
      <curator-options
        v-if="dialog_contents === 'more_options'"
        :selected-item="selectedItem"
        :all-playlists="allPlaylists"
        :uncurated-content="uncuratedContent"
        :selected-type="selectedType"
      />
    </v-dialog>

  </v-container>
</template>

<script>
import NotificationsList from '@/components/Notifications/List'
import AddToPlaylist from '@/components/UncuratedContent/AddToPlaylist'
import CuratorOptions from '@/components/UncuratedContent/CuratorOptions'
import { fladmin } from '@/utils/fladmin'
export default {
  components: {
    NotificationsList,
    CuratorOptions,
    AddToPlaylist
  },
  data () {
    return {
      uncuratedContent: null,
      selectedItem: null,
      selectedType: null,
      allPlaylists: null,
      dialog_contents: null,
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
  computed: {
    content () {
      return this.uncuratedContent
    }
  },
  async mounted () {
    const result = await fladmin.getUncuratedContent()
    this.uncuratedContent = result
    this.selectedType = this.types[0]

    const res = await fladmin.getFeaturedPlaylists()
    this.allPlaylists = res
  },
  methods: {
    addToExclusives (item) {
      fladmin.addToExclusives(item)
      const selection = this.uncuratedContent[this.selectedType]
      selection.splice(selection.indexOf(item), 1)
      this.dialog = false
    },
    addToBufferQueue (media) {
      fladmin.addToBufferQueue(media)
      this.dialog = false

      // remove from the array
      const selection = this.uncuratedContent[this.selectedType]
      selection.splice(selection.indexOf(media), 1)
    },

    addToPlaylist (item) {
      this.selectedItem = item
      this.dialog = true
      this.dialog_contents = 'add_to_playlist'
    },
    launchPostOptions (item) {
      this.selectedItem = item
      this.dialog = true
      this.dialog_contents = 'more_options'
    },
    playTrack (item) {
      this.selectedItem = item
      this.dialog = true
      this.dialog_contents = 'more_options'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
