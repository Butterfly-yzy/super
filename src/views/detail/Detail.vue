<template>
  <div>
    {{iid}}
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.$route.query.iid;
    }
  }
</script>
