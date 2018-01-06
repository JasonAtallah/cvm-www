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
      return _.find(this.messages, message => message.state === this.buyer.state.name).message;
    }
  }
};
</script>