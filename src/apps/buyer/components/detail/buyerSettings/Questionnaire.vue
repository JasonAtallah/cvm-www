<template>
  <div>
    <h3>Questionnaire</h3>
    <p class="lead">
      Customize your questionnaire and get button code.
    </p>
    <div class="card card-body bg-light">
      <ElTabs value="introduction" @tab-click="switchTab">
        <ElTabPane v-for="page in questionnairePages" :label="page.label"
        :key="page.value" :name="page.value">
          <div class="form-group" :model="newQuestionnaire[page.value]">
            <div class="row">
              <div class="col-sm-12">
                <label class="settings-input-label"></label>
                <ElInput :id="page.value" v-model="newQuestionnaire[page.value]" placeholder="Enter text using markdown" />
              </div>
            </div>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click="updateQuestionnaire" :disabled="canNotUpdate">Save</button>
      <button type="button" class="btn btn-lg btn-default" @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Input as ElInput,
  Tabs as ElTabs,
  TabPane as ElTabPane,
  Notification } from 'element-ui';

export default {
  props: ['buyer', 'buyerSettings', 'questionnaire'],
  components: {
    ElInput,
    ElTabs,
    ElTabPane,
    Notification
  },
  computed: {
    canNotUpdate() {
      return _.isEqual(this.questionnaire.introduction, this.newQuestionnaire.introduction) && _.isEqual(this.questionnaire.completion, this.newQuestionnaire.completion);
    },
    questionnairePages() {
      return _.find(this.buyerSettings.settingsTabs, { value: 'questionnaire' }).options;
    }
  },
  data() {
    return {
      curTab: 'introduction',
      newQuestionnaire: {
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
    switchTab(tab) {
      this.curTab = tab.name;
    },
    updateQuestionnaire() {
      let page;
      if (this.curTab === 'introduction') {
        page = {
          introduction: this.newQuestionnaire.introduction
        };
      } else if (this.curTab === 'completion') {
        page = {
          completion: this.newQuestionnaire.completion
        };
      }
      this.$store.dispatch('updateQuestionnaire', page);
      Notification({
        title: 'Success',
        messages: 'Questionnaire updated',
        type: 'success',
        duration: 2000
      });
    }
  }
};
</script>

<style>

</style>
