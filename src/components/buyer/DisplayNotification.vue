<template>
  <div>
    {{ notificationInfo }}
  </div>
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
      if (this.notificationInfo !== null) {
        Notification(this.notificationInfo);
        this.$store.commit('notificationInfo', null);
        return true;
      }
      return false;
    }
  }
};
</script>

<style>

</style>
