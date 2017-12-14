
<style scoped>
.calview {

}
</style>

<template>
<div class="calendar">
  <MonthView class="calview" v-if="showMonth"
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
    MonthView
  },
  props: ['events'],
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
