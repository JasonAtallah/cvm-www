<template>
  <div class="container" id="vendorPendingPage">
    <h2>Waiting for buyer response</h2>
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