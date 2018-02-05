<template>
  <Detail title="Calendar" description="Select the calendar you would like to sync with us." :canSave="canSave" :showCancel="false" @save="submitCalendar">
    <div class="form-group col-12">
      <label>Currently selected calendar for scheduling:</label><br>
      <b>{{ buyer.gcalendar.name }}</b>
    </div>
    <div class="form-group col-12">
      <label>Select a different calendar:</label><br>
      <ElSelect v-model="selectedCalendar" @change="onCalendarSelect">
        <ElOption v-for="calendar in unselectedCalendars" :key="calendar.id" :value="calendar.id" :label="calendar.name" />
      </ElSelect>
    </div>
    <div class="form-group col-12 col-sm-6 col-md-6">
      <label>Or create a new one:</label><br>
      <ElInput v-model="calendarName" @keypress="onNameInput" placeholder="CVM Calendar" />
    </div>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Input as ElInput,
  Notification,
  Option as ElOption,
  Select as ElSelect
} from 'element-ui';
import Detail from '@/components/masterDetail/Detail';

export default {
  name: 'set-calendar',
  components: {
    Detail,
    ElInput,
    ElOption,
    ElSelect,
    Notification
  },
  data() {
    return {
      selectedCalendar: null,
      calendarName: null
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      calendars: 'calendars'
    }),
    canSave() {
      return !!(this.selectedCalendar || this.calendarName || this.buyer.gcalendar.name);
    },
    unselectedCalendars() {
      if (!this.calendars) {
        return [];
      }

      return this.calendars.filter(c => c.id !== this.buyer.gcalendar.id);
    }
  },
  methods: {
    onNameInput() {
      this.selectedCalendar = null;
    },
    onCalendarSelect() {
      this.calendarName = null;
    },
    saveCalendarChoice() {
      if (this.selectedCalendar) {
        return this.$store.dispatch('setGCalendar', _.find(this.calendars, { id: this.selectedCalendar }));
      }
      return this.$store.dispatch('createGCalendar', this.calendarName.trim());
    },
    submitCalendar() {
      if (!this.selectedCalendar && !this.calendarName && this.buyer.gcalendar.name) {
        this.$emit('updated');
      } else {
        this.saveCalendarChoice()
          .then(() => {
            this.$emit('updated');
          });
      }
    }
  },
  created: function () {
    this.$store.dispatch('loadCalendars');
  }
};
</script>
