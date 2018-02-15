<style scoped>
div.field-rows {
  margin-bottom: 1rem;
}
</style>

<template>
  <Detail title="Add An Event" description="Add a new event to your calendar"
    @save="save" @cancel="cancel">
    <ElForm :model="calendarEvent" :rules="eventFormRules" ref="event">
      <div class="row field-rows">
        <div class="col-sm-12">
          <ElFormItem label="Name" prop="name">
            <ElInput name="eventName" placeholder="Event Name" v-model="calendarEvent.name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row field-rows">
        <div class="col-sm-4">
          <ElFormItem label="Date" prop="date">
            <ElDatePicker name="date" placeholder="Pick a day" v-model="calendarEvent.date" />
          </ElFormItem>
        </div>
        <div class="col-sm-4">
          <ElFormItem label="Time" prop="time">
            <ElTimeSelect name="time" v-model="calendarEvent.time"
            :picker-options="{
              start: '06:00',
              step: '00:15',
              end: '23:45'
            }"/>
          </ElFormItem>
        </div>
        <div class="col-sm-4">
          <ElFormItem label="Duration" prop="duration">
            <ElInputNumber name="duration" v-model="calendarEvent.duration"
            controls-position="right" :min="1" />
          </ElFormItem>
        </div>
      </div>
      <div class="row field-rows">
        <div class="col-sm-12">
          <ElFormItem label="Location" prop="location">
            <ElInput name="location" placeholder="Location" v-model="calendarEvent.location" />
          </ElFormItem>
        </div>
      </div>
    </ElForm>
  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '@/components/masterDetail/Detail';
import moment from 'moment';
import {
  DatePicker as ElDatePicker,
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  InputNumber as ElInputNumber,
  TimeSelect as ElTimeSelect } from 'element-ui';

export default {
  components: {
    Detail,
    ElDatePicker,
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElTimeSelect
  },
  data() {
    return {
      calendarEvent: {
        name: null,
        date: null,
        time: null,
        duration: 30,
        location: null
      }
    };
  },
  props: ['curDate'],
  computed: {
    ...mapGetters({
      settings: 'settings'
    }),
    eventFormRules() {
      return this.settings.rules['new-event'];
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    getDateTime(date, time) {
      const timeParts = time.split(':');
      const dateM = moment(date).hour(timeParts[0]).minute(timeParts[1]);
      return dateM.toJSON();
    },
    save() {
      const calendarEvent = {
        name: this.calendarEvent.name,
        dateTime: this.getDateTime(this.calendarEvent.date, this.calendarEvent.time),
        duration: this.calendarEvent.duration,
        location: this.calendarEvent.location
      };

      this.validateForm('event')
        .then(() => {
          this.$store.dispatch('createCalendarEvent', calendarEvent);
          this.cancel();
        });
    },
    validateForm(formRef) {
      return new Promise((res, rej) => {
        this.$refs[formRef].validate((valid) => {
          if (valid) {
            res();
          } else {
            rej();
          }
        });
      });
    }
  }
};
</script>
