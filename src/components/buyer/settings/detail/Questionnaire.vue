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
</style>

<template>
  <Detail title="Questionnaire" description="Customize your questionnaire."
    :canSave="canSave" :canCancel="canSave"
    @save="save" @cancel="cancel"
    v-if="!!questionnaire">

    <ElTabs value="introduction" @tab-click="switchTab">
      <ElTabPane v-for="page in markdownPages" :key="page.value"
        :name="page.value"
        :label="page.label">
        <div class="form-group" :model="newQuestionnaire[page.value]">
          <div class="row">
            <div class="col-sm-12">
              <ElSwitch v-model="previewMode" active-text="Preview" inactive-text="Edit"/>
              <span class="divider">|</span>
              <ElButton type="text" @click="gotoMarkdownDocs">Learn how to use markdown</ElButton>

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

      <ElTabPane v-for="page in inputPages" :key="page.value"
        :label="page.label"
        :name="page.value">

        <div v-for="option in getOptions(page)" :key="option.value">
          {{ option }}
        </div>
      </ElTabPane>
    </ElTabs>

  </Detail>
</template>

<script>
import {
  Button as ElButton,
  Input as ElInput,
  Switch as ElSwitch,
  Tabs as ElTabs,
  TabPane as ElTabPane } from 'element-ui';
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail,
    ElButton,
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
      return !_.isEqual(this.questionnaire.introduction, this.newQuestionnaire.introduction) ||
        !_.isEqual(this.questionnaire.completion, this.newQuestionnaire.completion);
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
    }
  },
  methods: {
    cancel() {
      this.newQuestionnaire[this.curTab] = _.cloneDeep(this.questionnaire[this.curTab]);
    },
    getOptions(page) {
      const pageQuestions = _.find(this.questionnaire.pages, { id: page.value }).questions;
      const options = [];
      pageQuestions.forEach((option) => {
        if (page.options.includes(option.id)) {
          options.push({
            value: option.id,
            label: option.name.split(/(?=[A-Z])/).join(' '),
            enabled: option.enabled,
            required: option.required,
            default: option.default
          });
        }
      });
      return options;
    },
    gotoMarkdownDocs() {
      window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', '_blank');
    },
    reset() {
      if (this.questionnaire) {
        this.newQuestionnaire = {
          introduction: this.questionnaire.introduction,
          completion: this.questionnaire.completion
        };
      }
    },
    switchTab(tab) {
      this.curTab = tab.name;
    },
    save() {
      const page = {
        [this.curTab]: this.newQuestionnaire[this.curTab]
      };

      this.$store.dispatch('updateQuestionnaire', page)
        .then(() => {
          this.$store.dispatch('successNotification', `${_.find(this.markdownPages, { value: this.curTab }).label} Page Updated`);
        })
        .catch(() => {
          this.$store.dispatch('errorNotification');
        });
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
