
<style scoped>
</style>

<template>
<BasePage pageName="Questionnaire">
  <div slot="content">
    <Wizard :enabledPages="enabledPages" @complete="complete">
      <div slot="page1">
        <QuestionsCompany :questions="questionsFor('Company')" />
      </div>
      <div slot="page2">
        <QuestionsContact :questions="questionsFor('Contact')"/>
      </div>
      <div slot="page3">
        <QuestionsFlowers :questions="questionsFor('Flowers')"/>
      </div>
      <div slot="page4">
        <QuestionsEdibles />
      </div>
      <div slot="page5">
        <QuestionsConcentrates />
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
import QuestionsEdibles from './QuestionsEdibles';
import QuestionsConcentrates from './QuestionsConcentrates';

export default {
  components: {
    BasePage,
    Wizard,
    QuestionsCompany,
    QuestionsContact,
    QuestionsFlowers,
    QuestionsEdibles,
    QuestionsConcentrates
  },
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire'
    }),
    enabledPages() {
      if (!this.questionnaire) {
        return [false, false, false, false, false];
      }
      return this.questionnaire.pages.map((page) => {
        return page.enabled;
      });
    }
  },
  methods: {
    getPage(pageName) {
      return _.find(this.questionnaire.pages, { name: pageName });
    },
    questionsFor(pageName) {
      return this.getPage(pageName).questions;
    },
    complete() {

    }
  },
  beforeMount() {
    this.$store.dispatch('loadQuestionnaire');
  }
};
</script>
