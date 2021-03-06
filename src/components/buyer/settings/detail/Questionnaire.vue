<style scoped>
div.preview {
  background-color: #FFFFFF;
  padding: 2rem;
}

span.divider {
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #CCC;
}

label.field-name {
  font-size: 1.2rem;
  font-weight: bold;
}

</style>

<template>
  <Detail title="Questionnaire" description="Customize your questionnaire."
    :canSave="canSave" :canCancel="canSave"
    @save="save" @cancel="cancel"
    v-if="!!questionnaire">

    <ElTabs value="introduction" @tab-click="updateCurTab">

      <ElTabPane v-for="tab in markdownTabs" :key="tab.questionnairePageId"
        :name="tab.questionnairePageId"
        :label="tab.label">

        <div class="form-group" :model="newQuestionnaire[tab.questionnairePageId]">
          <div class="row">
            <div class="col-sm-12">
              <ElSwitch v-model="previewMode" active-text="Preview" inactive-text="Edit"/>
              <span class="divider">|</span>
              <ElButton type="text" @click="gotoMarkdownDocs">Learn how to use markdown</ElButton>

              <div v-if="previewMode" v-html="markdownHtml" class="preview" />
              <div v-else>
                <label class="settings-input-label" />
                <ElInput :id="tab.questionnairePageId" v-model="newQuestionnaire[tab.questionnairePageId]" placeholder="Enter text using markdown"
                type="textarea" :rows="15"/>
              </div>
            </div>
          </div>
        </div>
      </ElTabPane>

      <ElTabPane v-for="tab in profileTabs" :key="tab.questionnairePageId"
        :label="tab.label"
        :name="tab.questionnairePageId">

        <div v-for="field in getFields(tab)" :key="field.id" class="row">
          <div class="col-sm-3 text-right">
            <label class="field-name">{{ field.label }}</label>
          </div>
          <div class="col-sm-9">
            <ElCheckbox label="Enabled" v-model="field.enabled" @change="field.onEnabledChange" />
            <ElCheckbox label="Required" v-model="field.required" @change="field.onRequiredChange" />
          </div>
        </div>
      </ElTabPane>

      <ElTabPane v-for="tab in productTabs" :key="tab.questionnairePageId"
        :label="tab.label"
        :name="tab.questionnairePageId">

        <div v-for="field in getFields(tab)" :key="field.id" class="row">
          <div class="col-sm-3 text-right">
            <label class="field-name">{{ field.label }}</label>
          </div>
          <div class="col-sm-9">
            <ElCheckbox label="Enabled" v-model="field.enabled" @change="field.onEnabledChange" />
            <ElCheckbox label="Required" v-model="field.required" @change="field.onRequiredChange" />
          </div>
        </div>
      </ElTabPane>
    </ElTabs>

  </Detail>
</template>

<script>
import {
  Button as ElButton,
  Checkbox as ElCheckbox,
  CheckboxGroup as ElCheckboxGroup,
  Input as ElInput,
  Switch as ElSwitch,
  Tabs as ElTabs,
  TabPane as ElTabPane } from 'element-ui';
import Detail from '@/components/masterDetail/Detail';
import { notifySuccess, notifyError } from '@/lib/followups';

export default {
  components: {
    Detail,
    ElButton,
    ElCheckbox,
    ElCheckboxGroup,
    ElInput,
    ElSwitch,
    ElTabs,
    ElTabPane
  },
  data() {
    return {
      curTab: 'introduction',
      markdown: new showdown.Converter(),
      mode: 'Preview',
      newQuestionnaire: null,
      previewMode: false
    };
  },
  props: ['buyer', 'buyerSettings', 'questionnaire'],
  computed: {
    canSave() {
      return Object.keys(this.newQuestionnaire).length > 0;
    },
    productTabs() {
      return _.filter(this.settingsTabs, { type: 'products' });
    },
    profileTabs() {
      return _.filter(this.settingsTabs, { type: 'profile' });
    },
    markdownHtml() {
      return this.markdown.makeHtml(this.newQuestionnaire[this.curTab]);
    },
    markdownTabs() {
      return _.filter(this.settingsTabs, { type: 'markdown' });
    },
    settingsTabs() {
      return _.find(this.buyerSettings.settingsTabs, { value: 'questionnaire' }).settingsTabs;
    }
  },
  methods: {
    cancel() {
      this.reset();
    },
    getFields(tab) {
      const self = this;
      const questions = this.getQuestionsByTabType(tab);
      if (questions) {
        return questions
          .filter((q) => {
            return tab.fields.includes(q.id);
          })
          .map((q) => {
            const field = {
              id: q.id,
              label: q.name,
              enabled: q.enabled,
              required: q.required,
              default: q.default,
              onEnabledChange: function (val) {
                q.enabled = val;
                field.enabled = val;
                if (!val) {
                  field.onRequiredChange(val);
                }
              },
              onRequiredChange: function (val) {
                q.required = val;
                field.required = val;
              }
            };

            return field;
          });
      }
      return false;
    },
    getQuestionnairePage(id) {
      return _.find(this.newQuestionnaire.pages, { id: id });
    },
    getQuestionsByTabType(tab) {
      if (tab.type === 'profile') {
        return this.getQuestionnairePage(tab.questionnairePageId).questions;
      } else if (tab.type === 'products') {
        const questions = [];
        Object.keys(this.getQuestionnairePage(tab.questionnairePageId).questions[0].items).forEach((key) => {
          questions.push(this.getQuestionnairePage(tab.questionnairePageId).questions[0].items[key]);
        });
        return questions;
      }
      return false;
    },
    gotoMarkdownDocs() {
      window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', '_blank');
    },
    reset() {
      if (this.questionnaire) {
        this.newQuestionnaire = _.cloneDeep(_.omit(this.questionnaire, ['_id']));
      }
    },
    updateCurTab(tab) {
      this.curTab = tab.name;
    },
    save() {
      this.$store.dispatch('updateQuestionnaire', this.newQuestionnaire)
        .then(notifySuccess('Questionnaire Settings Updated!'))
        .catch(notifyError());
    }
  },
  created() {
    this.reset();
  },
  watch: {
    questionnaire(newVal) {
      this.reset();
    }
  }
};
</script>
