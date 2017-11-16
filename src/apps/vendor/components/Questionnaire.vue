
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
        <QuestionsContact />
      </div>
      <div slot="page3">
        <QuestionsFlowers />
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
  data() {
    return {
      questionnaire: {
        pages: [
          {
            name: 'Company',
            enabled: true,
            questions: [
              {
                name: 'Name',
                enabled: true
              },
              {
                name: 'Website',
                enabled: true
              }
            ]
          },
          {
            name: 'Contact',
            enabled: true
          },
          {
            name: 'Flowers',
            enabled: true
          },
          {
            name: 'Edibles',
            enabled: false
          },
          {
            name: 'Concentrates',
            enabled: true
          }
        ]
      }
    };
  },
  computed: {
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
  }
};
</script>
