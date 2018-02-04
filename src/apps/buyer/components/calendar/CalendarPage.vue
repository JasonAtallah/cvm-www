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
          <ElCard v-else>
            <AddCalendarEvent v-if="addEvent" :curDate="curDate" />
          </ElCard>
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Card as ElCard } from 'element-ui';
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
    ElCard,
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
      return !!(!this.overridingDetail && this.curDate);
    }
  },
  methods: {
    onDayClicked(date) {
      this.curDate = date;
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
