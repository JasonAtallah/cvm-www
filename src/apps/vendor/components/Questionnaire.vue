
<style scoped>
</style>

<template>
<BasePage pageName="Questionnaire">
  <div slot="content">
    <Wizard pageNums="[1,3]" @complete="complete">
      <div slot="page1">
        <QuestionsCompany v-if="showQuestions('Company')" />
      </div>
      <div slot="page2">
        <QuestionsContact v-if="showQuestions('Contact')" />
      </div>
      <div slot="page3">
        <QuestionsFlowers v-if="showQuestions('Flowers')" />
      </div>
    </Wizard>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Wizard from '@/components/ui/Wizard/Wizard';
import BasePage from './BasePage';
import QuestionsCompany from './QuestionsCompany';
import QuestionsContact from './QuestionsContact';
import QuestionsFlowers from './QuestionsFlowers';

export default {
  data() {
    return {
      questionnaire: {
        pages: [
          {
            name: 'Company',
            enabled: true
          },
          {
            name: 'Contact',
            enabled: true
          },
          {
            name: 'Flowers',
            enabled: true
          }
        ]
      }
    };
  },
  components: {
    BasePage,
    Wizard,
    QuestionsCompany,
    QuestionsContact,
    QuestionsFlowers
  },
  computed: {

  },
  methods: {
    showQuestions(pageName) {
      const page = _.find(this.questionnaire.pages, { name: pageName });
      return page && page.enabled;
    },
    complete() {

    }
  }
};
</script>
