<template>
  <v-container>
    <v-tabs
      dark
      grow>
      <v-tab
        v-for="item in tabs"
        :key="item.key"
        @click="selectTab(item.key)">
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <div class="container white--text">
      <!-- selectedTab: {{ selectedTab }} -->
      <pending-publishing v-show="selectedTab === 'pending_publishing'"/>
      <active-orders v-show="selectedTab === 'active_orders'"/>
    </div>
  </v-container>
</template>

<script>
import PendingPublishing from '@/views/Services/Pending/Publishing'
import ActiveOrders from '@/views/Services/Pending/Orders'
export default {
  components: {
    PendingPublishing,
    ActiveOrders
  },
  data () {
    return {
      selectedTab: null,
      tabs: [
        {
          title: 'Pending Publishing',
          key: 'pending_publishing'
        },
        {
          title: 'Active Open Orders',
          key: 'active_orders'
        }
      ]
    }
  },
  mounted () {
    this.selectTab(this.tabs[0].key)
  },
  methods: {
    selectTab (tab) {
      this.selectedTab = tab
    }
  }
}
</script>
