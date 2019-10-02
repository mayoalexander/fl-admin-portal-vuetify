<template lang="html">
  <v-container class="pt-0 white--text">
    <h4 class="display-1 white--text">Uncurated Content</h4>
    <loading-spinner v-if="!content" />


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
      v-if="content"
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
                <v-btn small fab>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn small fab>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-layout>
            </td>
          </template>
        </v-data-table>
      </div>
    </div>

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
      selectedType: null,
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
  },
  computed: {
    content () {
      return this.uncuratedContent
    }
  },
  methods: {
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
