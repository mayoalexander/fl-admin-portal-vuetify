<template lang="html">
  <v-card color="darkBlue white--text text-capitalize">
    <v-card-text>
      <h4>{{ formatCampaignItemName(item.type) }}</h4>
      <p>{{ item.date }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    formatCampaignItemName (type) {
      return type.replace('_', ' ')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
