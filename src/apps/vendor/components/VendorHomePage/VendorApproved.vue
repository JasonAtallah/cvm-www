<template>
  <div class="container" id="vendorApprovedPage">
    <h2>Schedule an appointment</h2>
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
