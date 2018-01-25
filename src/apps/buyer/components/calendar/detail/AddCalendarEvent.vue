<style scoped>
div.field-rows {
  margin-bottom: 1rem;
}
</style>

<template>
  <div>
    <h3>Add An Event</h3>
    <p class="lead">
      Add a new event to your calendar.
    </p>
    <div class="card card-body bg-light">
      <div class="row field-rows">
        <div class="col-sm-12">
          <label for="eventName">Name:</label>
          <ElInput name="eventName" placeholder="Event Name" v-model="calendarEvent.name" />
        </div>
      </div>
      <div class="row field-rows">
        <div class="col-sm-4">
          <label for="date">Date:</label>
          <ElDatePicker name="date" placeholder="Pick a day" v-model="calendarEvent.date" />
        </div>
        <div class="col-sm-4">
          <label for="time">Time:</label>
          <ElTimeSelect name="time" v-model="calendarEvent.time"
          :picker-options="{
            start: '06:00',
            step: '00:15',
            end: '24:00'
          }"/>
        </div>
        <div class="col-sm-4">
          <label for="duration">Duration (mins):</label>
          <ElInputNumber name="duration" v-model="calendarEvent.duration"
          controls-position="right" :min="1" />
        </div>
      </div>
      <div class="row field-rows">
        <div class="col-sm-12">
          <label for="location">Location:</label>
          <ElInput name="location" placeholder="Location" v-model="calendarEvent.location" />
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button id="save" type="button" class="btn btn-primary" @click="save">Save</button>
      <button id="cancel" type="button" class="btn btn-default" @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import {
  DatePicker as ElDatePicker,
  Input as ElInput,
  InputNumber as ElInputNumber,
  TimeSelect as ElTimeSelect } from 'element-ui';

export default {
  components: {
    ElDatePicker,
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
  methods: {
    backToCurDate() {
      if (this.curDate) {
        this.$store.commit('overrideDetail', {
          type: 'viewCalendarDay'
        });
      }
    },
    cancel() {
      this.$store.commit('cancelDetailOverride');
      this.backToCurDate();
    },
    save() {
      this.$store.dispatch('createCalendarEvent', this.calendarEvent);
      this.backToCurDate();
    }
  }
};
</script>
