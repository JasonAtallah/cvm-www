<style>

</style>

<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-6 offset-md-3">
      <ElCard>
        <Profile v-if="curTab === 0" :buyer="buyer" @updated="next" />
        <Calendar v-if="curTab === 1" :buyer="buyer" />
        <Questionnaire v-if="curTab === 2" :buyer="buyer" :buyerSettings="buyerSettings" :questionnaire="questionnaire"/>
        <Complete v-if="curTab === 3" :buyer="buyer" />
      </ElCard>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Card as ElCard } from 'element-ui';
import Calendar from '../settings/detail/Calendar';
import Complete from './Complete';
import Profile from './Profile';
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
      curTab: 0
    };
  },
  computed: {
    ...mapGetters({
      buyer: 'buyer',
      buyerSettings: 'buyerSettings',
      questionnaire: 'questionnaire'
    })
  },
  methods: {
    next() {
      this.curTab += 1;
    },
    complete() {
      this.$router.push('/');
    }
  }
};
</script>
