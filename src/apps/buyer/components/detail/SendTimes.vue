<template>
  <div>
    <h3 class="modal-title">Propose Times to meet with {{ vendor.name }}</h3>
    <p class="lead">
      Invite {{ vendor.name }} to a meeting to review their products. They will receive an email inviting them to choose one of the time slots you provide below. You will be notified when they make their selection.
    </p>
    <div class="form-group">

      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Calendar Event Name:</label>
            <input type="text" class="form-control" id="name" v-model="name">
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Duration (mins):</label>
            <input type="number" class="form-control" id="duration" v-model="duration">
          </div>
        </div>
      </div>

    </div>

    <div class="card card-body bg-light">
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">

            <div class="row">
              <div class="col-md-12">
                <h4>Suggest Times</h4>
                <br />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">Location:</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" id="location" v-model="location">
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">Date:</label>
                  <div class="col-sm-8">
                    <DatePicker
                      v-model="startDate"
                      :format="datePicker.format"
                      :type="datePicker.type">
                    </DatePicker>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group row">
                  <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">Time:</label>
                  <div class="col-sm-8">
                    <TimeSelect
                      v-model="startTime"
                      :picker-options="timePicker">
                    </TimeSelect>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <button type="button" class="btn btn-primary" @click.prevent="addTime" :disabled="!newTimeIsValid">Add Time</button>
                  <div>
                    {{ timeWarning }}
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <br /><br />
                <h4>Added Times</h4>
                <br />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <ul>
                  <li v-for="(time, index) in suggestedTimes" :key="index">
                    {{ time.location }}
                    {{ time.startDate }} at {{ time.startTime }}
                    <button type="button" class="btn btn-default btn-sm" @click.prevent="removeTime(index)"><i class="fa fa-times"></i></button>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click.prevent="send" :disabled="!canSubmit">Send</button>
      <button type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import { DatePicker, TimePicker, TimeSelect } from 'element-ui';

export default {
  components: {
    DatePicker,
    TimePicker,
    TimeSelect
  },
  data() {
    return {
      startDate: new Date(),
      startTime: null,
      name: null,
      location: '*dispensary address*',
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
      events: 'events'
    }),
    vendor() {
      return this.params.vendor;
    },
    newTimeIsValid() {
      return this.location && this.startDate && this.startTime;
    },
    timeWarning() {
      return '';
    },
    canSubmit() {
      return this.suggestedTimes.length;
    }
  },
  methods: {
    addTime() {
      const newTime = {
        name: this.name,
        location: this.location,
        duration: this.duration,
        startDate: this.startDate,
        startTime: this.startTime
      };
      const existingTime = _.find(this.suggestedTimes, _.pick(newTime, ['startDate', 'startTime']));
      if (!existingTime) {
        this.suggestedTimes.push(newTime);
      }
    },
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    removeTime(index) {
      this.suggestedTimes.splice(index, 1);
    },
    send() {
      this.$store.dispatch('sendTimes', {
        vendor: this.vendor,
        suggestedTimes: this.suggestedTimes
      });
    }
  },
  watch: {
    params(newVal) {
      if (newVal) {
        this.name = `Initial mtg with ${newVal.name}`;
      }
    }
  }
};
</script>
