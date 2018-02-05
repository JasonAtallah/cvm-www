<style scoped>
div.preview {
  background-color: #FFFFFF;
  padding: 2rem;
  text-align: center;
}

span.divider {
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #CCC;
}
</style>

<template>
  <Detail title="Questionnaire" description="Customize your questionnaire."
    :canSave="canSave" :showCancel="false"
    @save="save">

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
    </ElTabs>

  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
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
      newQuestionnaire: {
        introduction: this.questionnaire.introduction || null,
        completion: this.questionnaire.completion || null,
      },
      previewMode: true
    };
  },
  props: ['buyer', 'buyerSettings', 'questionnaire'],
  computed: {
    canSave() {
      return !!(this.newQuestionnaire.introduction && this.newQuestionnaire.completion);
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
    gotoMarkdownDocs() {
      window.open('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', '_blank');
    },
    switchTab(tab) {
      this.curTab = tab.name;
    },
    save() {
      Promise.all([
        this.saveIntroduction(),
        this.saveCompletion()
      ]).then(() => {
        this.$emit('updated');
      });
    },
    saveCompletion() {
      if (this.newQuestionnaire.completion !== this.questionnaire.completion) {
        return this.$store.dispatch('updateQuestionnaire', { completion: this.newQuestionnaire.completion });
      }
      return Promise.resolve();
    },
    saveIntroduction() {
      if (this.newQuestionnaire.introduction !== this.questionnaire.introduction) {
        return this.$store.dispatch('updateQuestionnaire', { introduction: this.newQuestionnaire.introduction });
      }
      return Promise.resolve();
    }
  }
};
</script>
