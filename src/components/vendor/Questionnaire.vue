
<style>
#Questionnaire label {
  white-space: nowrap;
}
</style>

<template>
<BasePage pageName="Questionnaire">
  <div slot="content" id="Questionnaire">
    <Wizard v-if="questionnaire" :enabledPages="enabledPages" class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2" @complete="submit">
      <div slot="page1">
        <QuestionsCompany :questions="questionsFor('company')" :response="response.company" />
      </div>
      <div slot="page2">
        <QuestionsContact :questions="questionsFor('contact')" :response="response.contact" />
      </div>
      <div slot="page3">
        <QuestionsFlowers :def="questionsFor('flowers')[0]" :products="productsFor('flowers', 0)" />
      </div>
      <div slot="page4">
        <QuestionsEdibles :def="questionsFor('edibles')[0]" :products="productsFor('edibles', 0)" />
      </div>
      <div slot="page5">
        <QuestionsConcentrates :def="questionsFor('concentrates')[0]" :products="productsFor('concentrates', 0)" />
      </div>
      <div slot="page6">
        <SubmitQuestionnaire :response="response" />
      </div>
    </Wizard>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Wizard from '@/components/wizard/Wizard';
import BasePage from './BasePage';
import QuestionsCompany from './QuestionsCompany';
import QuestionsContact from './QuestionsContact';
import SubmitQuestionnaire from './SubmitQuestionnaire';
import FlowerForm from './FlowerForm';
import EdibleForm from './EdibleForm';
import ConcentrateForm from './ConcentrateForm';
import ProductsInput from './ProductsInput';

export default {
  components: {
    BasePage,
    Wizard,
    QuestionsCompany,
    QuestionsContact,
    QuestionsFlowers: {
      extends: ProductsInput,
      components: {
        ProductForm: FlowerForm
      }
    },
    QuestionsEdibles: {
      extends: ProductsInput,
      components: {
        ProductForm: EdibleForm
      }
    },
    QuestionsConcentrates: {
      extends: ProductsInput,
      components: {
        ProductForm: ConcentrateForm
      }
    },
    SubmitQuestionnaire
  },
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire',
      response: 'response'
    }),
    enabledPages() {
      const pages = this.questionnaire.pages.map((page) => {
        return page.enabled;
      });
      pages.push(true);
      return pages;
    }
  },
  methods: {
    getPage(pageId) {
      return _.find(this.questionnaire.pages, { id: pageId });
    },
    productsFor(pageId, questionIndex) {
      const page = this.getPage(pageId);
      const questionId = page.questions[questionIndex].id;
      return this.response[pageId][questionId];
    },
    questionsFor(pageId) {
      return this.getPage(pageId).questions;
    },
    submit() {
      this.$store.dispatch('submitResponse', this.response)
        .then(() => {
          this.$router.push({ name: 'Complete' });
        });
    }
  }
};
</script>
