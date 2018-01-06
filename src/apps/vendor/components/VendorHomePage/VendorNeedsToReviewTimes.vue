
<template>
  <div class="container">
    <h2>Vendor reviews times</h2>
    {{ buyer.state.suggestedTimes }}
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor'
    })
  }
};
</script>
