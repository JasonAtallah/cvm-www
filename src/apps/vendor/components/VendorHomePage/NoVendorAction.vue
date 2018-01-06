<template>
  <div class="container">
    {{ message().message }}
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      vendor: 'vendor',
      messages: 'vendorStateMessages'
    })
  },
  methods: {
    message() {
      return _.find(this.messages, message => message.state === this.buyer.state.name);
    }
  }
};
</script>