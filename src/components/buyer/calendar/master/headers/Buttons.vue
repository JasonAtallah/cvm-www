<style lang="scss" scoped>
.calendar-buttons {
  margin: 0;
  padding: .7rem 1rem;
  height: $vendors-master-row-height;
  color: $vendors-master-color;
  border-bottom: 1px solid $section-border-color;
  width: 100%;
}
</style>

<template>
<div class="calendar-buttons">
  <button id="addEvent" class="btn btn-sm btn-primary" @click="addEvent">Add Event</button>
</div>
</template>

<script>
export default {
  methods: {
    addEvent() {
      this.$store.commit('overrideDetail', {
        type: 'addCalendarEvent'
      });
    }
  }
};
</script>
