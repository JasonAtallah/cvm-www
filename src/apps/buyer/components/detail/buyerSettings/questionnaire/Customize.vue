<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <label class="settings-input-label" for="introduction">Introduction Page</label>
        <ElInput type="textarea" id="introduction"
        placeholder="Text for introduction page"
        v-model="newQuestionnaire.introduction" />
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <label class="settings-input-label" for="completion">Completion Page</label>
        <ElInput type="textarea" id="completion"
        placeholder="Text for completion page"
        v-model="newQuestionnaire.completion" />
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click="updateQuestionnaire" :disabled="canNotUpdate">Update</button>
      <button type="button" class="btn btn-lg btn-default" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import {
  Input as ElInput } from 'element-ui';

export default {
  props: ['buyer', 'questionnaire'],
  components: {
    ElInput
  },
  computed: {
    canNotUpdate() {
      return _.isEqual(this.questionnaire.introduction, this.newQuestionnaire.introduction) && _.isEqual(this.questionnaire.completion, this.newQuestionnaire.completion);
    }
  },
  data() {
    return {
      newQuestionnaire: {
        _id: this.questionnaire._id || null,
        introduction: this.questionnaire.introduction || null,
        completion: this.questionnaire.completion || null
      }
    };
  },
  methods: {
    cancel() {
      this.newQuestionnaire.introduction = _.cloneDeep(this.questionnaire.introduction);
      this.newQuestionnaire.completion = _.cloneDeep(this.questionnaire.completion);
    },
    updateQuestionnaire() {
      this.$store.dispatch('updateQuestionnaire', _.cloneDeep(this.newQuestionnaire));
    }
  }
};
</script>
