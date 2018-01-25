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
          <DayDetail v-if="curDate" :events="events" :date="curDate" />
        </div>
      </MasterDetail>
    </div>
  </BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import MonthView from '@/components/Calendar/MonthView';
import MasterDetail from '@/components/MasterDetail';
import BasePage from '../BasePage';
import Buttons from './master/headers/Buttons';
import DayDetail from './detail/DayDetail';

export default {
  components: {
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
      events: 'events'
    })
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
