<template>
<Detail title="Complete" description="Thanks for filling that out, you're ready to go!"
:canSave="true" :showCancel="false" @save="complete" saveLabel="Finish" >
<div class="text-center">
  <div class="row">
    <div class="form-group col-12">
      <span class="lead">Don't worry if you think you filled out something incorrectly, all those fields and more can be found in the settings.</span>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="form-group col-12">
      <span class="lead">Check out your questionnaire <a :href="questionnaireUrl" target="_blank">here</a></span>
    </div>
  </div>
</div>
</Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail
  },
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire',
      settings: 'settings'
    }),
    questionnaireUrl() {
      return `${this.settings.vendorAppUrl}?qid=${this.questionnaire._id}`;
    }
  },
  methods: {
    complete() {
      this.$emit('completed');
    }
  }
};
</script>
