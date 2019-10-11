<template lang="html">
  <v-data-table
      :headers="headers"
      :items="item"
      hide-actions
    >
      <template
        slot="headerCell"
        slot-scope="{ header }"
      >
        <span
          class="subheading font-weight-light text-success text--darken-3"
          v-text="header.text"
        />
      </template>
      <template
        slot="items"
        slot-scope="{ item }"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.country }}</td>
        <td>{{ item.city }}</td>
        <td class="text-xs-right">{{ item.salary }}</td>
      </template>
    </v-data-table>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="css" scoped>
</style>
