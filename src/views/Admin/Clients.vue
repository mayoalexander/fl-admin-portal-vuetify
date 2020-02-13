<template>
  <div class="pa-2">
    <div class="heading white--text text-xs-center mb-3">
      <h4 class="display-1 ">Clients</h4>
      <p v-if="allUsers">
        Results: {{ allUsers.length }} results found
      </p>
    </div>
    <div class="clients-list px-4">
      <v-text-field
        label="Search Users"
        v-model="query"
      ></v-text-field>

      <v-card v-for="(item, i) in filteredUsers" class="mb-3 pa-3" :key="i">
        <p v-if="item.id">ID: {{ item.id }} - [{{ item.user_name }}]</p>
        <p v-if="item.email" class="font-weight-bold">{{ item.email }}</p>
        <p v-if="item.phone">{{ item.phone }}</p>
        <p v-if="item.date_created">
          <span class="font-weight-bold">Created: </span>
          {{ formatDate(item.date_created) }}
        </p>
        <p v-if="item.last_login">
          <span class="font-weight-bold">Last Login: </span>
          {{ formatDate(item.last_login) }}
        </p>

        <div class="more-info">
          <p v-if="item.dashboard_type" class="mt-3">DB UI Type: <span class="font-weight-bold text-capitalize">{{ item.dashboard_type }}</span></p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { fladmin } from '@/utils/fladmin'
export default {
  data () {
    return {
      allUsers: null,
      query: ''
    }
  },
  methods: {
    formatDate (date) {
      return this.$dayjs(date).format('ddd, MMM D, YYYY - h:mmA')
    }
  },
  computed: {
    filteredUsers () {
      const query = this.query.toLowerCase().trim()
      if (query.length >= 3) {
        const result = this.allUsers.filter(item => {
          const email = item.email.toLowerCase()
          const user_name = item.user_name.toLowerCase()
          const phone = item.phone.toLowerCase()
          if (email.includes(query)) { return item }
          if (user_name.includes(query)) { return item }
          if (phone.includes(query)) { return item }
        })
        return result
      } else {
        return this.allUsers
      }
    }
  },
  async mounted () {
    const clients = await fladmin.getAllUsers()
    this.allUsers = clients
    console.log({
      clients
    })
  }
}
</script>

<style scoped>
  .clients-list p {
    margin-bottom:0px !important;
  }
</style>
