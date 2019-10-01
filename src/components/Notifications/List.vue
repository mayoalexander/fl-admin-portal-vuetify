<template lang="html">
  <material-card
    color="orange"
    title="Notifications"
  >
    <v-data-table
      :headers="headers"
      :items="notifications"
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
        <td>{{ item }}</td>
        <td>
          <v-btn small>
            View
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </material-card>
</template>

<script>
export default {
  props: {
    headers: Array,
    notifications: Array
  }
}
</script>

<style lang="css">
.theme--dark.v-table {
  background-color:#1c202b !important;
}
</style>
