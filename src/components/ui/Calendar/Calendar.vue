
<style scoped>
.calview {

}


</style>

<template>
<div class="calendar">
  <monthview class="calview" v-if="showMonth"
    :eventDateField="eventDateField"
    :events="events"
    @clickDay="onClickDay"
    @clickEvent="onClickEvent" />
  <div class="dayview" v-if="showDay"></div>
</div>
</template>

<script>
import MonthView from './MonthView';

export default {
  name: 'calendar',
  components: {
    monthview: MonthView
  },
  props: ['events', 'eventDateField'],
  data() {
    return {
      showMonth: true,
      showDay: false
    };
  },
  methods: {
    onClickDay(day) {
      this.showDay = true;
    },
    onClickEvent(event) {
      this.$emit('clickEvent', event);
    }
  }
};
</script>
