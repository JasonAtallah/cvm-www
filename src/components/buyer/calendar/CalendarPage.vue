<style lang="scss" scoped>
.calendar-page {
  height: 100%;
}

.calendar-master {
  height: 100%;
  width: 100%;
  border-right: 1px solid #CCC;
}
</style>

<template>
  <BasePage pageName="Calendar">
    <div slot="content" class="calendar-page">
      <MasterDetail>
        <div slot="master" class="calendar-master">
          <Master />
        </div>
        <div slot="detail" class="calendar-detail">
          <DayDetail v-if="showDay" :events="events" :date="selCalendarDate" />
          <AddCalendarEvent v-if="showAddEvent" :curDate="selCalendarDate" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MasterDetail from '@/components/masterDetail/MasterDetail';
import AddCalendarEvent from './detail/AddCalendarEvent';
import BasePage from '../BasePage';
import DayDetail from './detail/DayDetail';
import Master from './master/Master';

export default {
  components: {
    AddCalendarEvent,
    BasePage,
    DayDetail,
    Master,
    MasterDetail
  },
  computed: {
    ...mapGetters({
      overridingDetail: 'overridingDetail',
      events: 'events',
      selCalendarDate: 'selCalendarDate'
    }),
    showAddEvent() {
      return !!(this.overridingDetail && this.overridingDetail.type === 'addCalendarEvent');
    },
    showDay() {
      return !!(!this.overridingDetail && this.selCalendarDate);
    }
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      component.$store.dispatch('loadEvents');
    });
  }
};
</script>
