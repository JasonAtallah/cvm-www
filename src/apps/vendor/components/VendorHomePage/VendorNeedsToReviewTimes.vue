
<template>
  <div class="container">
    <h2>Vendor reviews times</h2>
    {{ threads.state.suggestedTimes }}
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      threads: 'threads',
      vendor: 'vendor'
    })
  }
};
</script>
