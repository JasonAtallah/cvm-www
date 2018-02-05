<template>
<Detail title="Complete" description="Thanks for filling that out, you're ready to go!"
:canSave="true" :showCancel="false" @save="complete" actionButtonLabel="Finish" >
<div class="text-center">
  <div class="row">
    <div class="col-12 form-group">
      <span class="lead">Don't worry if you think you filled out something incorrectly, all those fields and more can be found in the settings.</span>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12 col-sm-6 form-group">
      <span class="lead">Check out your questionnaire here.</span>
    </div>
    <div class="col-12 col-sm-6 form-group">
      <button type="button" style="border-radius:12px; background-color:#00e64d; width:200px; height:75px; font-size:30px"><a href="http://localhost:8082/?qid=5a68041f219e50703eb76361#/" target="_blank" style="color:#f2f2f2; text-decoration:none;">Apply</a></button>
    </div>
  </div>
  <div class="row">
    <div class="col-12 form-group">
      <span class="lead">Go to your settings to customize your questionnaire more and generate the button HTML for your own site.</span>
    </div>
  </div>
</div>
</Detail>
</template>

<script>
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail
  },
  methods: {
    complete() {
      this.$emit('completed');
    }
  }
};
</script>
