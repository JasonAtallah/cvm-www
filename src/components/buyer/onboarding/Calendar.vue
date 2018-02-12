<template>
  <Detail title="GCalendar Sync" description="Any appointments you make in CVM actually get saved in a Google Calendar of your choosing."
    :canSave="canSave" :showCancel="false" @save="submitCalendar">
    <div class="form-group col-12">
      <label>Select a calendar:</label><br>
      <ElSelect v-model="selectedCalendar" @change="onCalendarSelect">
        <ElOption v-for="calendar in calendars" :key="calendar.id" :value="calendar.id" :label="calendar.name" />
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
  Option as ElOption,
  Select as ElSelect
} from 'element-ui';
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail,
    ElInput,
    ElOption,
    ElSelect
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
      return !!(this.selectedCalendar || this.calendarName);
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
      this.saveCalendarChoice()
        .then(() => {
          this.$emit('updated');
        });
    }
  },
  created: function () {
    this.$store.dispatch('loadCalendars');
  }
};
</script>
