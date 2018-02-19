<template>
  <div></div>
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
    })
  },
  watch: {
    notificationInfo(newVal) {
      if (newVal) {
        Notification(newVal);
        this.$store.commit('notificationInfo', null);
      }
    }
  }
};
</script>
