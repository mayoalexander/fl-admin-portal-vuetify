<template>
  <div
    v-if="orders"
    class="white--text">
    <v-card
      v-for="(item, i) in orders"
      :key="i"
      class="darkBlue white--text pa-3 mb-2">
      <div>
        <h1 class="headline mt-0">
          <a
            :href="'https://freelabel.net/pages/services/marketplace/community/' + item.id"
            target="_blank">
            {{ item.title }} - ${{ item.price }}
          </a>
        </h1>
        <p class="mt-0">{{ item.description }}</p>
        <p
          v-if="item.delivery_amount && item.delivery_frequency"
          class="mt-0">Delivery Time: {{ item.delivery_amount + ' ' + item.delivery_frequency }}
        </p>
        <div class="">
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
        </div>
        <!-- {{ item }} -->
      </div>
    </v-card>
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
      this.orders.splice(this.orders.indexOf(service), 1)
      const res = await fladmin.approvePendingService(service)
    },
    async viewProfile (service) {
      window.open('https://freelabel.net/content/profile/' + service.profile_id)
    }
  }
}
</script>
