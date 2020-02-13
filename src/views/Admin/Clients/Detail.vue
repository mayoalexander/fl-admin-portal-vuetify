<template>
  <div class="px-4">
    This is the customer detail page
    <div class="white--text">
      user: {{ user }}
    </div>
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

</style>
