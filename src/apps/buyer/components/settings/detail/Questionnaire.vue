<style scoped>
div.preview {
  background-color: #FFFFFF;
  padding: 2rem;
  text-align: center;
}
a.markdown-link {
  border-left: 1px solid #CCCCCC;
  padding-left: 15px;
  margin-left: 15px;
}

a.markdown-link:hover {
  text-decoration: none;
}
</style>

<template>
  <div>
    <h3>Questionnaire</h3>
    <p class="lead">
      Customize your questionnaire.
    </p>
    <div class="card card-body bg-light">
      <ElTabs value="introduction" @tab-click="switchTab">
        <ElTabPane v-for="page in markdownPages" :label="page.label"
        :key="page.value" :name="page.value">
          <div class="form-group" :model="newQuestionnaire[page.value]">
            <div class="row">
              <div class="col-sm-12">
                <ElSwitch v-model="previewMode"
                active-text="Preview"
                inactive-text="Edit"/>
                <ElButton type="text"><a class="markdown-link" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Learn how to use markdown</a></ElButton>
                <div v-if="previewMode" v-html="markdownHtml" class="preview" />
                <div v-else>
                <label class="settings-input-label"></label>
                <ElInput :id="page.value" v-model="newQuestionnaire[page.value]" placeholder="Enter text using markdown"
                type="textarea" :rows="15"/>
                </div>
              </div>
            </div>
          </div>
        </ElTabPane>
        <ElTabPane v-for="page in inputPages" :label="page.label"
        :key="page.value" :name="page.value">
          <div v-for="option in page.options" :key="option">
            {{ option }}
            <ElCheckboxGroup v-model="newQuestionnaire[page.value]">

            </ElCheckboxGroup>
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
  Button as ElButton,
  Checkbox as ElCheckbox,
  CheckboxGroup as ElCheckboxGroup,
  Input as ElInput,
  Switch as ElSwitch,
  Tabs as ElTabs,
  TabPane as ElTabPane,
  Notification } from 'element-ui';

export default {
  components: {
    ElButton,
    ElCheckbox,
    ElCheckboxGroup,
    ElInput,
    ElSwitch,
    ElTabs,
    ElTabPane,
    Notification
  },
  data() {
    return {
      curTab: 'introduction',
      markdown: new showdown.Converter(),
      mode: 'Preview',
      newQuestionnaire: {
        introduction: this.questionnaire.introduction || null,
        completion: this.questionnaire.completion || null
      },
      previewMode: false
    };
  },
  props: ['buyer', 'buyerSettings', 'questionnaire'],
  computed: {
    canNotUpdate() {
      return _.isEqual(this.questionnaire.introduction, this.newQuestionnaire.introduction) && _.isEqual(this.questionnaire.completion, this.newQuestionnaire.completion);
    },
    inputPages() {
      return _.filter(this.questionnairePages, { markdown: false });
    },
    markdownHtml() {
      return this.markdown.makeHtml(this.newQuestionnaire[this.curTab]);
    },
    markdownPages() {
      return _.filter(this.questionnairePages, { markdown: true });
    },
    questionnairePages() {
      return _.find(this.buyerSettings.settingsTabs, { value: 'questionnaire' }).options;
    },
  },
  methods: {
    cancel() {
      this.newQuestionnaire[this.curTab] = _.cloneDeep(this.questionnaire[this.curTab]);
    },
    switchTab(tab) {
      this.curTab = tab.name;
    },
    updateQuestionnaire() {
      const page = { introduction: this.newQuestionnaire[this.curTab] };
      this.$store.dispatch('updateQuestionnaire', page);
      Notification({
        message: `${this.curTab} Page Updated!`,
        type: 'Success',
        duration: 2000
      });
    }
  }
};
</script>
