<template lang="html">
  <material-card
    color="orange"
    title="Top Artists"
    text="New employees on 15th September, 2016"

  >
    <!-- {{ top_artists }} -->
    <v-data-table
      :headers="headers"
      :items="top_artists"
      hide-actions
      dark
      background-color="darkBlue"
      class="darkBlue"
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="font-weight-light text-warning text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ index, item }"
        class="darkBlue"
      >
        <!-- <td>{{ index + 1 }}</td> -->
        <td class="font-weight-bold">
          <a :href="'https://freelabel.net/' + item.twitter" target="_blank" class="lightGrey--text">{{ item.name }}</a>
        </td>
        <td class="text-xs-right">
          <a :href="'https://instagram.com/' + item.instagram" target="_blank" class="lightGrey--text">{{ item.instagram }}</a>
        </td>
        <td class="text-xs-right">
          <a :href="'https://twitter.com/' + item.twitter" target="_blank" class="lightGrey--text">{{ item.twitter }}</a>
        </td>
      </template>
    </v-data-table>
  </material-card>
</template>

<script>
export default {
  props: {
    headers: Array,
    top_artists: Array
  }
}
</script>

<style lang="css">
.theme--dark.v-table {
  background-color:#1c202b !important;
}
</style>
