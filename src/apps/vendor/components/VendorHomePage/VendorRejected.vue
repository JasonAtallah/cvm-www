<template>
  <div class="container" id="vendorRejectedPage">
    <h2>Sorry not interested</h2>
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
