<template lang="html">
  <v-card class="elevation-1 pa-2 mb-3">
    <v-layout row wrap>
      <v-flex xs3>
        <v-layout align-center justify-center>
          <img style="height:80px;width:80px;" :src="selectedItem.photo" />
        </v-layout>
      </v-flex>
      <v-flex xs9 class="pl-3">
        <h3 class="mt-0 mb-0">{{ selectedItem.title }}</h3>
        <p class="mb-0">{{ selectedItem.twitter }}</p>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    selectedItem: Object
  }
}
</script>

<style lang="css" scoped>
</style>
