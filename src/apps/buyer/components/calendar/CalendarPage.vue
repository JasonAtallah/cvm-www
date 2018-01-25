<style lang="scss" scoped>
.calendar-page {
  height: 100%;
}

.calendar-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid $section-border-color;
}
</style>

<template>
  <BasePage pageName="Calendar">
    <div slot="content" class="calendar-page">
      <MasterDetail>
        <div slot="master" class="calendar-master">
          <Buttons />
          <MonthView :events="events" @dayClick="onDayClicked" />
        </div>
        <div slot="detail" class="calendar-detail">
          <DayDetail v-if="showDay" :events="events" :date="curDate" />
          <AddCalendarEvent v-if="addEvent" :curDate="curDate" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MonthView from '@/components/Calendar/MonthView';
import MasterDetail from '@/components/MasterDetail';
import AddCalendarEvent from './detail/AddCalendarEvent';
import BasePage from '../BasePage';
import Buttons from './master/headers/Buttons';
import DayDetail from './detail/DayDetail';

export default {
  components: {
    AddCalendarEvent,
    BasePage,
    Buttons,
    DayDetail,
    MasterDetail,
    MonthView
  },
  data() {
    return {
      curDate: null
    };
  },
  computed: {
    ...mapGetters({
      overridingDetail: 'overridingDetail',
      events: 'events'
    }),
    addEvent() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'addCalendarEvent');
    },
    showDay() {
      return !!(this.overridingDetail && this.curDate && this.overridingDetail.type === 'viewCalendarDay');
    }
  },
  methods: {
    onDayClicked(date) {
      this.curDate = date;
      this.$store.commit('overrideDetail', {
        type: 'viewCalendarDay'
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
