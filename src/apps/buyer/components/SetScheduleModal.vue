<style scoped>
.modal {
  text-align: left;
  display: block;
}

.day label {
  font-weight: bold;
}

.hour {
  display: inline-block;
  font-size: smaller;
  padding-right: 10px;
}
</style>

<template>
<div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Set Schedule</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group day" v-for="day in days" :key="day.value">
            <label>{{ day.label }}:</label>
            <div class="hours">
              <div class="hour" v-for="hour in day.hours" :key="hour.value">
                <Checkbox :value="getValueForDayHour(day, hour)" :checked="isChecked(day, hour)" @checked="updateSchedule" /> {{ hour.label }}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
        <button type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Checkbox from '@/components/form/Checkbox';

export default {
  components: {
    Checkbox
  },
  computed: {
    ...mapGetters({
      isVisible: 'setSchedule',
      schedule: 'schedule'
    }),
    days() {
      const days = [];
      const day = moment().day(0);
      const hours = _.range(8, 18).map((hr) => {
        day.hour(hr);
        return {
          value: hr,
          label: day.format('ha')
        };
      });

      for (let i = 0; i < 7; i++) {
        days.push({
          value: day.day(),
          label: day.format('dddd'),
          hours
        });
        day.add(1, 'days');
      }

      return days;
    }
  },
  methods: {
    getValueForDayHour(day, hour) {
      return `${day.value}:${hour.value}`;
    },
    isChecked(day, hour) {
      const value = this.getValueForDayHour(day, hour);
      return this.schedule.indexOf(value) >= 0;
    },
    updateSchedule(data) {
      if (data.checked) {
        this.$store.commit('scheduleAdd', data.value);
      } else {
        this.$store.commit('scheduleRemove', data.value);
      }
    },
    cancel() {
      this.$store.commit('setSchedule', false);
    },
    save() {
      this.$store.dispatch('saveSchedule');
    }
  }
};
</script>
