<style lang="scss" scoped>
.calendar-buttons {
  margin: 0;
  padding: .7rem 1rem;
  height: $vendor-list-filter-height;
  width: 100%;
  border-bottom: 1px solid $section-border-color;
}
</style>

<template>
<div class="calendar-buttons">
  <button class="btn btn-sm btn-primary" @click="addEvent">Add Event</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    addEvent() {
      this.$store.commit('takeAction', {
        type: 'addCalendarEvent'
      });
    }
  }
};
</script>
