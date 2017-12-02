<template>
  <div class="container" id="vendorRejectedPage">
    <h2>Not interested now</h2>
    <hr>
    <!-- {{ vendor }} -->

    {{ buyerInfo }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      response: 'response',
      vendor: 'vendor',
      buyerInfo: 'buyerInfo'
    })
  },
  // beforeMount() {
  //   this.$store.dispatch('loadBuyerInfo', this.vendor._id);
  // }
};
</script>

<style>

</style>
