<template>
  <div
    v-if="orders"
    class="white--text">
    <v-layout row wrap>
      <v-flex
        v-for="(item, i) in orders"
        :key="i"
        xs12 sm6
        class="pa-2">
        <v-card
          class="darkBlue white--text mb-2">
          <div class="">
            <img :src="item.photo" alt="" class="w-100">
          </div>
          <div class="pa-3">
            <h1 class="headline mt-0">
              <a
                :href="'https://freelabel.net/pages/services/marketplace/community/' + item.id"
                target="_blank"
                class="white--text">
                {{ item.title }} - ${{ item.price }}
              </a>
            </h1>
            <p class="mt-0">{{ item.description }}</p>
            <p
              v-if="item.delivery_amount && item.delivery_frequency"
              class="mt-0">Delivery Time: {{ item.delivery_amount + ' ' + item.delivery_frequency }}
            </p>
            <v-layout class="">
              <v-btn
                small
                color="primary"
                @click="approveService(item)">
                Approve
              </v-btn>
              <v-btn
                small
                color="primary"
                @click="viewProfile(item)">
                View Profile
              </v-btn>
              <v-btn
                small
                color="primary"
                @click="viewService(item)">
                View Service
              </v-btn>
            </v-layout>
            <!-- {{ item }} -->
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { fladmin } from '@/utils/fladmin'

export default {
  data () {
    return {
      orders: null,
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
    this.orders = await fladmin.getPendingPublishing()
  },
  methods: {
    async approveService (service) {
      this.$swal('done!!')
      this.orders.splice(this.orders.indexOf(service), 1)
      const res = await fladmin.approvePendingService(service)
    },
    async viewProfile (service) {
      window.open('https://freelabel.net/content/profile/' + service.profile_id)
    },
    async viewService (service) {
      console.log({
        service
      })
      window.open('https://freelabel.net/pages/services/marketplace/community/' + service.id)
    }
  }
}
</script>

<style>
.w-100 {
  width: 100%;
}
</style>
