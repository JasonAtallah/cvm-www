<template>
  <div class="container">
    {{ message() }}
  </div>
</template>
 
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      messages: 'vendorStateMessages'
    })
  },
  methods: {
    message() {
      const message = _.find(this.messages, message => message.state === this.buyer.state.name);
      if (message) {
        return message.message;
      }
      return null;
    }
  }
};
</script>