<template>
  <div>{{ displayNotification }}</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Notification } from 'element-ui';

export default {
  components: {
    Notification
  },
  computed: {
    ...mapGetters({
      notificationInfo: 'notificationInfo'
    }),
    displayNotification() {
      Notification(this.notificationInfo);
      this.$store.commit('notificationInfo', null);
      return '';
    }
  }
};
</script>

<style>

</style>
