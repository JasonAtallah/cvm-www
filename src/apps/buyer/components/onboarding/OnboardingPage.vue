<style>
.predashboard-card {
  height: 645px;
}
</style>

<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <ElCard class="predashboard-card">
        <Calendar v-if="form === 'Calendar'" :buyer="buyer" />
        <Profile v-if="form === 'Profile'" :buyer="buyer" />
        <Questionnaire v-if="form === 'Questionnaire'" :buyer="buyer" :buyerSettings="buyerSettings" :questionnaire="questionnaire"/>
        <Complete v-if="form === 'Complete'" :buyer="buyer" />
      </ElCard>
    </div>
  </div><br>
  <div class="row">
    <div class="col-sm-6">
      <button type="button" class="btn btn-default btn-lg pull-right" @click="back">Back</button>
    </div>
    <div class="col-sm-6">
      <button v-if="form === 'Complete'" type="button" class="btn btn-primary btn-lg" @click="save">Save</button>
      <button v-else type="button" class="btn btn-primary btn-lg" @click="next">Next</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Card as ElCard } from 'element-ui';
import Calendar from '../settings/detail/Calendar';
import Complete from './Complete';
import Profile from '../settings/detail/Profile';
import Questionnaire from '../settings/detail/Questionnaire';

export default {
  components: {
    Calendar,
    Complete,
    ElCard,
    Profile,
    Questionnaire
  },
  data() {
    return {
      active: 0,
      form: 'Profile'
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      buyerSettings: 'buyerSettings',
      questionnaire: 'questionnaire'
    }),
    showProfileForm() {
      return this.form === 'Profile';
    }
  },
  methods: {
    back() {
      if (this.active > 0) {
        this.active--;
        this.setForm();
      }
    },
    next() {
      if (this.active < 3) {
        this.active++;
        this.setForm();
      }
    },
    save() {
      this.active = 0;
      this.setForm();
      this.$router.push('/');
    },
    setForm() {
      const forms = ['Profile', 'Calendar', 'Questionnaire', 'Complete'];
      this.form = forms[this.active];
    }
  }
};
</script>
