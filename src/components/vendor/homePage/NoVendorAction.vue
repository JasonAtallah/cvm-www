<style scoped>
span {
  font-size: 2rem;
}
</style>

<template>
  <Detail :title="detailHeader.title" :description="detailHeader.description"
    :showSave="false" :showCancel="false">
    <span>{{ message() }}</span>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '../../masterDetail/Detail';

export default {
  components: {
    Detail
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      messages: 'vendorStateMessages',
    })
  },
  props: ['detailHeader'],
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
