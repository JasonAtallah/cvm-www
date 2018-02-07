<style scoped>
ul.suggestedTimes {
  list-style: none;
  padding-left: 0;
}

ul.suggestedTimes li {
  list-style: none;
  background-color: #FFF;
  padding: 15px;
  border: 1px solid #DDD;
  margin-bottom: 1rem;
}

ul.suggestedTimes button {
  padding: 0;
}
</style>

<template>
  <div>
    <h3>Propose Times to meet with {{ vendor.name }}</h3>
    <p class="lead">
      Invite {{ vendor.name }} to a meeting to review their products. They will receive an email inviting them to choose one of the time slots you provide below. You will be notified when they make their selection.
    </p>

    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-12">

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="location" class="col-sm-4 col-form-label">Location:</label>
                <div class="col-sm-6">
                  <ElSelect v-model="location" clearable @change="onLocationChange" placeholder="Choose a location">
                    <ElOption v-for="(location, index) in locations" :key="index" :label="location.name" :value="index" />
                    <ElOption key="-1" label="Add Location" value="-1">
                      <ElButton type="text" size="medium" style="padding: 0">Add Location</ElButton>
                    </ElOption>
                  </ElSelect>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="startDate" class="col-sm-4 col-form-label">Date:</label>
                <div class="col-sm-8">
                  <ElDatePicker
                    v-model="startDate"
                    :format="datePicker.format"
                    :type="datePicker.type" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="startTime" class="col-sm-4 col-form-label">Time:</label>
                <div class="col-sm-8">
                  <ElTimeSelect
                    v-model="startTime"
                    :picker-options="timePicker" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="duration" class="col-sm-4 col-form-label">Duration (mins):</label>
                <div class="col-sm-3">
                  <ElInputNumber v-model="duration" controlsPosition="right" />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">

              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <button type="button" class="btn btn-primary" @click.prevent="addTime" :disabled="!canAddTime">Add Time</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <br /><br />
              <h4>Added Times</h4>
              <br />
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div v-if="suggestedTimes.length === 0">
                No times added yet
              </div>
              <ul class="suggestedTimes">
                <li v-for="(time, index) in suggestedTimes" :key="index">
                  <div class="row">
                    <div class="col-sm-12">
                      <i class="el-icon-time"></i>
                      <span>{{ formatDate(time.startDate) }} to {{ formatTime(getEndDate(time)) }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-2">
                      <i class="el-icon-location-outline"></i>
                      <span>{{ time.location.name }}</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-2">
                      <i class="el-icon-delete"></i>
                      <button type="button" class="btn btn-link" @click.prevent="removeTime(index)">Remove</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click.prevent="send" :disabled="!canSubmit">Send</button>
      <button type="button" class="btn btn-lg btn-default" @click.prevent="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import {
  Button as ElButton,
  DatePicker as ElDatePicker,
  InputNumber as ElInputNumber,
  Option as ElOption,
  Select as ElSelect,
  TimeSelect as ElTimeSelect } from 'element-ui';

export default {
  components: {
    ElButton,
    ElDatePicker,
    ElInputNumber,
    ElOption,
    ElSelect,
    ElTimeSelect
  },
  data() {
    return {
      startDate: new Date(),
      startTime: null,
      name: null,
      location: null,
      duration: 30,
      suggestedTimes: [],
      datePicker: {
        format: 'MM/dd/yyyy',
        type: 'date'
      },
      timePicker: {
        start: '07:00',
        step: '00:15',
        end: '20:00'
      }
    };
  },
  props: ['params'],
  computed: {
    ...mapGetters({
      events: 'events',
      locations: 'locations'
    }),
    canAddTime() {
      return this.location !== null && this.startDate && this.startTime;
    },
    canSubmit() {
      return this.suggestedTimes.length;
    },
    timeWarning() {
      return '';
    },
    vendor() {
      return this.params.vendor;
    }
  },
  methods: {
    addLocation() {
      this.$store.commit('takeAction', {
        type: 'addLocation'
      });
    },
    addTime() {
      const timeParts = this.startTime.split(':');
      const newTime = {
        name: this.name,
        location: this.locations[this.location],
        duration: this.duration,
        startDate: moment(this.startDate).hour(timeParts[0]).minute(timeParts[1]).toDate()
      };
      const existingTime = _.find(this.suggestedTimes, (suggestedTime) => {
        return moment(suggestedTime.startDate).isSame(newTime.startDate, 'minute');
      });
      if (!existingTime) {
        this.suggestedTimes.push(newTime);
      }
    },
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    formatDate(date) {
      return moment(date).format('LLL');
    },
    formatTime(date) {
      return moment(date).format('h:mm A');
    },
    getEndDate(suggestedTime) {
      return moment(suggestedTime.startDate).add(suggestedTime.duration, 'minutes').toDate();
    },
    onLocationChange(value) {
      if (value === '-1') {
        this.location = null;
        this.addLocation();
      }
    },
    removeTime(index) {
      this.suggestedTimes.splice(index, 1);
    },
    send() {
      if (this.suggestedTimes.length) {
        this.$store.dispatch('sendTimes', {
          vendor: this.vendor,
          suggestedTimes: this.suggestedTimes
        });
      }
    }
  }
};
</script>