<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <span>
            <h5>{{ event.summary }}</h5>
            <h6>{{ vendor.contact.firstName }} {{ vendor.contact.lastName }} from {{ vendor.company.name }} at {{ formatDate(event.start.dateTime) }}</h6>
          </span>
        </div>

        <!-- <VendorListDetail :vendor="vendor" /> -->

        <div class="modal-footer">
          <button @click.prevent="cancel" class="btn btn-default">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  computed: {
    isVisible() {
      return this.$store.getters.pendingAction.type === 'showCalendarEvent';
    },
    event() {
      return this.$store.getters.pendingAction.event;
    },
    vendor() {
      return this.$store.getters.pendingAction.vendor;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    formatDate(date) {
      return moment(date).format('LLL');
    }
  }
};
</script>
