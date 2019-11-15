<template lang="html">
  <div class="white--text px-4 text-xs-center">


    <h3 class="display-3">Studios</h3>

    <v-layout row wrap>
      <v-flex sm12 class="text-xs-left pa-2 mb-5">
        <div>
          <h4 class="display-1">Studio Intake Form</h4>
          <p class="mb-3">This is the form where we are going to input studios into the Studio Booking page. We have chosen 6 cities to start with and our goal is to get at least 20 studios per city. Use this form to submit a Studio to be posted to the site. It will not be immedietly posted, as it needs to be fully validated and additional information collected before we can post to the site.</p>
          <h4>Studio Intake Form</h4>
          <p>https://freelabel.typeform.com/to/LQ9r8m</p>
        </div>
        <v-btn color="primary" target="_blank" href="https://freelabel.typeform.com/to/LQ9r8m">
          <v-icon class="mr-1">mdi-plus</v-icon>
          Add New Studio
        </v-btn>
      </v-flex>
      <v-flex sm12 class="text-xs-left pa-2 mb-5">
        <h4 class="display-1">Verification & Approval Spreadsheet</h4>
        <p class="mb-3">After a studio is submitted, we will need to verify that each studio has all the required data, then approve it by completed the required fields, then copying & importing that studio into our database API.</p>
        <v-btn color="primary" target="_blank" href="https://docs.google.com/spreadsheets/d/1Bqvy0JCXXzF9qJOlmMxFCNpArmRbLIPpuwEypMAP6uc/edit#gid=912551184">
          <v-icon class="mr-1">mdi-table</v-icon>
          Open Studio Spreadsheet
        </v-btn>
      </v-flex>
      <v-flex sm12 class="text-xs-left pa-2 mb-5">
        <h4 class="display-1">View Studio Marketplace</h4>
        <p class="mb-3">Once validated and approved, this is where the Studios will display, on the site.</p>
        <v-btn color="primary" target="_blank" href="https://freelabel.net/pages/services/marketplace/admin/1">
          <v-icon class="mr-1">mdi-cart</v-icon>
          Open Studio Marketplace
        </v-btn>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
