<template lang="html">
  <v-container class="pt-0 white--text">
    <h4 class="display-1 white--text">
      Buffer Queue

      <v-btn
        href="https://publish.buffer.com/profile/5987abdd9b9dad1c23715d48/tab/queue"
        target="_blank"
        color="primary"
        small>
        Open Buffer
      </v-btn>
      <v-btn
        href="https://freelabel.net/admin/automation"
        target="_blank"
        color="primary"
        small>
        Open Automation
      </v-btn>

    </h4>
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
        <template
          slot="items"
          slot-scope="props">
          <td class="text-xs-left pa-0 pr-2">
            <v-img :src="parse(props.item.data).photo" alt="" :style="{ width: '116px' }" />
          </td>
          <!-- <td class="text-xs-left">
            <v-btn
              color="primary"
              fab
              small
              round
              @click="playTrack(props.item)">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </td> -->
          <td class="text-xs-left">
            <a
              href="#"
              @click="lauchBufferApproval(props.item)"
              class="white--text">
              {{ parse(props.item.data).title }}
            </a>
          </td>
          <td class="text-xs-left red--text font-weight-bold">{{ parse(props.item.data).twitter }}</td>
          <td class="text-xs-left">{{ parse(props.item.data).type }}</td>
          <td class="text-xs-right">{{ parse(props.item.data).views }}</td>
          <td class="text-xs-right">
            <v-layout
              row
              justify-end>
              <v-btn
                small
                fab
                @click="lauchBufferApproval(props.item)">
                <v-icon>mdi-apps</v-icon>
              </v-btn>
            </v-layout>
          </td>
        </template>
      </v-data-table>
    </div>
    <v-dialog
      v-model="dialog"
      :persistent="false"
      :overlay="false"
      scrollable
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card
        v-if="selectedItem"
        color="darkBlue"
        class="white--text">
        <div
          v-if="previewPost"
          class="media-preview">
          <selected-media-card :selected-item="parse(selectedItem.data)" />
        </div>
        <div v-else class="img-preview">
          <img
            :src="selectedItem.photo"
            :style="{
              width: '100%'
            }"
            class="w-100 img-fluid" >
        </div>
        <!-- selectedItem: {{ selectedItem.photo }} -->
        <div v-if="isApproving">
          <loading-spinner />
        </div>
        <v-card-actions v-else>
          <v-btn
            :disabled="isApproving"
            color="success lighten-1"
            block
            @click="approve(selectedItem)">Approve</v-btn>
          <v-btn
            :disabled="isApproving"
            color="danger lighten-4"
            block
            @click="decline(selectedItem)">Decline</v-btn>
          <v-btn
            :disabled="isApproving"
            color="lighten-4"
            class="black--text"
            block
            @click="preview(selectedItem)">Preview</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      previewPost: false,
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
  async mounted () {
    const res = await this.$fladmin.getBufferQueue()
    this.queuedPosts = res
  },
  methods: {
    parse (data) {
      return JSON.parse(data)
    },
    playTrack (item) {
      this.lauchBufferApproval(item)
    },
    lauchBufferApproval (item) {
      event.preventDefault()
      this.previewPost = false
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
      this.previewPost = false
    },
    decline (item) {
      this.isApproving = true
      this.$fladmin.declineBufferQueuePost(item)
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
      this.previewPost = false
    },
    preview () {
      this.previewPost = true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
