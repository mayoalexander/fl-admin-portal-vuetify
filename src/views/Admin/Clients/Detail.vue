<template>
  <div class="px-4 white--text">
    <v-layout>
      <v-flex xs12 class="px-2 mb-3 text-xs-center">
        <div class="data-box pa-4">
          Email & Phone + Dashboard Type
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Date Created & Last Login
        </div>
      </v-flex>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Services
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Profiles
        </div>
      </v-flex>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Activity
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Billing
        </div>
      </v-flex>
      <v-flex xs6 class="mb-3 text-xs-center px-2">
        <div class="data-box pa-4">
          Notifications
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
  .data-box {
    background-color: #1c1f2a;
  }
</style>
