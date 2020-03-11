<template>
  <div class="px-4 white--text">
    <v-layout wrap>
      <v-flex
        xs12
        class="px-2 mb-3 text-xs-center">
        <div class="data-box pa-4">
          <!-- Email & Phone + Dashboard Type -->
          <p
            v-if="user.email"
            class="title mb-2">{{ user.email }}</p>
          <p v-if="user.phone">{{ user.phone }}</p>
          <p v-if="user.id">ID# {{ user.id }}</p>
          <p v-if="user.user_name">{{ user.user_name }}</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          <!-- Date Created & Last Login -->
          <p v-if="user.date_created"><span class="font-weight-bold">Date Created:</span> {{ $dayjs(user.date_created).format('ddd, MMM D, YYYY - h:mmA') }}</p>
          <p v-if="user.last_login"><span class="font-weight-bold">Last Login:</span> {{ $dayjs(user.last_login).format('ddd, MMM D, YYYY - h:mmA') }}</p>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Services
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          <!-- Profiles -->
          <div
            v-if="user.profiles"
            class="profiles-list">
            <li
              v-for="item in user.profiles"
              :key="item.pk">
              {{ item }}
            </li>
          </div>
          <div v-else>
            <p class="warning--text">No profiles found..</p>
          </div>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Activity
          <div
            v-if="user.activity"
            class="activity-list">
            <li
              v-for="item in user.activity"
              :key="item.pk"
              class="mb-3">
              <h4 class="font-weight-bold mb-1">{{ item.activity }}</h4>
              {{ $dayjs(item.entry_date).format('ddd, MMM D, YYYY - h:mmA') }}
            </li>
          </div>
          <div v-else>
            <p class="warning--text">No activity logged..</p>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Billing
          <p v-if="user.billing.current_balance">
            <span class="font-weight-bold">Balance: </span>
            {{ user.billing.current_balance }}
          </p>
          <p v-if="user.billing">
            {{ user.billing }}
          </p>
        </div>
      </v-flex>
      <v-flex
        xs12
        sm6
        class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Notifications
          <div
            v-if="user.notifications"
            class="notifications-list my-3 mt-4">
            <div
              v-for="item in user.notifications"
              class="mb-3 b-b pb-3">
              <p><span class="font-weight-bold">Type:</span> {{ item.type }}</p>
              <p><span class="font-weight-bold">To:</span> {{ item.to }}</p>
              <p v-if="item.type === 'email'"><span class="font-weight-bold">Subject:</span> {{ item.subject }}</p>
              <p v-html="item.body"> {{ item.body }}</p>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <!-- <div class="white--text">
      user: {{ user }}
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      userId: null,
      user: null
    }
  },
  async mounted () {
    const userID = this.$router.currentRoute.params.id
    this.userId = userID
    const user = await this.$fladmin.getUser(this.userId)
    this.user = user
  }
}
</script>

<style>
  .b-b {
    border-bottom: 1px solid #353535;
  }
  .activity-list li {
    list-style-type: none;
  }
  .data-box {
    background-color: #1c1f2a;
  }
  .data-box p {
    margin-bottom:0;
  }
</style>
