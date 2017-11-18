
<style scoped>
</style>

<template>
<BasePage pageName="Questionnaire">
  <div slot="content">
    <Wizard v-if="questionnaire" :enabledPages="enabledPages" @complete="complete">
      <div slot="page1">
        <QuestionsCompany :questions="questionsFor('Company')" :response="response.company" />
      </div>
      <div slot="page2">
        <QuestionsContact :questions="questionsFor('Company')" :response="response.contact" />
      </div>
      <div slot="page3">
        <QuestionsFlowers :questions="questionsFor('Flowers')" :response="response.flowers" />
      </div>
      <div slot="page4">
        <QuestionsEdibles :questions="questionsFor('Edibles')" :response="response.edibles" />
      </div>
      <div slot="page5">
        <QuestionsConcentrates :questions="questionsFor('Concentrates')" :response="response.concentrates" />
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
      questionnaire: 'questionnaire',
      response: 'response'
    }),
    enabledPages() {
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
