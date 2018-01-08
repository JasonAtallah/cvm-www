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
    <h3 class="modal-title">Propose Times to meet with {{ vendor.name }}</h3>
    <p class="lead">
      Invite {{ vendor.name }} to a meeting to review their products. They will receive an email inviting them to choose one of the time slots you provide below. You will be notified when they make their selection.
    </p>

    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-12">

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">Location:</label>
                <div class="col-sm-8">
                  <!-- <input type="text" class="form-control" id="location" v-model="location"> -->
                  <select v-model="location">
                    <option v-for="(location, index) in locations" :key="index" :value="location.value">
                      {{ location.label }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <div class="form-group row">
                <label for="exampleFormControlSelect1" class="col-sm-4 col-form-label">Duration (mins):</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control" id="duration" v-model="duration">
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
                  {{ time.location }}<br />
                  {{ formatDate(time.startDate) }}<br />
                  {{ time.duration }} mins<br />
                  <button type="button" class="btn btn-link" @click.prevent="removeTime(index)">Remove</button>
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
      events: 'events',
      locations: 'locations'
    }),
    canAddTime() {
      return this.location && this.startDate && this.startTime;
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
    addTime() {
      const timeParts = this.startTime.split(':');
      const newTime = {
        name: this.name,
        location: this.location,
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
  },
  watch: {
    vendor(newVal) {
      if (newVal) {
        this.name = `Initial mtg with ${newVal.name}`;
      }
    }
  }
};
</script>
