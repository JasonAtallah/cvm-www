<style scoped>

</style>

<template>
<div class="modal set-calendar" tabindex="-1" role="dialog" :style="{display: isVisible}">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ isVisible }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="saveChanges(123)">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'set-calendar',
  computed: {
    ...mapGetters({
      buyer: 'session/profile'
    }),
    isVisible() {
      const profile = this.$store.getters['session/profile'];
      if (profile && profile.gcalendarId) {
        return 'none';
      }
      return 'block';
    }
  },
  methods: {
    closeDetail() {
      this.$store.commit('buyer/setSelVendor', null);
    },
    saveChanges(gcalendarId) {
      this.$store.commit('session/setGcalendarId', gcalendarId);
    }
  },
  watch: {
    isVisible() {
      this.$store.dispatch('buyer/getGCalendarList');
    }
  }
};
</script>
