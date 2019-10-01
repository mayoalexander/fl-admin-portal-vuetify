<template lang="html">
  <v-container>
    <v-card
      dark
      background-color="darkBlue"
      class="darkBlue elevation-1 py-2">
        <div v-if="searchResults">
          <v-data-table
          :headers="headers"
          :items="searchResults"
          color="darkBlue"
          hide-actions
          dark
          background-color="darkBlue"
          class="darkBlue"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-right">
              <img :src="props.item.photo" style="width:48px;height:48px;border-radius:50%;"/>
            </td>
            <!-- <td class="text-xs-right"></td> -->
            <td class="text-xs-left">
              <div class="ml-3 mb-3">
                <h4 class="font-weight-bold mb-0">{{ props.item.name }}</h4>
                Instagram: {{ props.item.instagram }}
                <br>
                Twitter: {{ props.item.twitter }}
              </div>
            </td>
            <td class="text-xs-right">{{ props.item.city }} {{ props.item.state }}</td>
            <td class="text-xs-right">
              <v-btn dark small >
                View
              </v-btn>
            </td>
          </template>
        </v-data-table>
        </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          sortable: false,
          text: 'Profile',
          value: 'name'
        },
        {
          sortable: true,
          text: 'City',
          value: 'city',
          align: 'right'
        },
        {
          sortable: true,
          text: 'Location',
          value: 'city',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions',
          align: 'right'
        }
      ]
    }
  },
  computed: {
    searchResults () {
      let result
      const obj = this.$store.state.searchResults
      if (obj) {
        result = Object.keys(obj).map(function(key) {
          return obj[key]
        })
      }
      return result
    }
  }
}
</script>

<style lang="css" scoped>
</style>
