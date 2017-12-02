<template>
  <div class="container" id="vendorRejectedPage">
    <h2>Check back later</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      response: 'response',
      vendor: 'vendor'
    })
  }
};
</script>

<style>

</style>
