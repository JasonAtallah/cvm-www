
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
        <Company :questions="questionsFor('company')" :response="response.company" />
      </div>
      <div slot="page2">
        <Contact :questions="questionsFor('contact')" :response="response.contact" />
      </div>
      <div slot="page3">
        <Flowers :def="questionsFor('flowers')[0]" :products="productsFor('flowers', 0)" />
      </div>
      <div slot="page4">
        <Edibles :def="questionsFor('edibles')[0]" :products="productsFor('edibles', 0)" />
      </div>
      <div slot="page5">
        <Concentrates :def="questionsFor('concentrates')[0]" :products="productsFor('concentrates', 0)" />
      </div>
      <div slot="page6">
        <Submit :response="response" />
      </div>
    </Wizard>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import Wizard from '../../wizard/Wizard';
import BasePage from '../BasePage';
import Company from './Company';
import Contact from './Contact';
import Submit from './Submit';
import Products from './Products';
import FlowerForm from './products/FlowerForm';
import EdibleForm from './products/EdibleForm';
import ConcentrateForm from './products/ConcentrateForm';

export default {
  components: {
    BasePage,
    Wizard,
    Company,
    Contact,
    Flowers: {
      extends: Products,
      components: {
        ProductForm: FlowerForm
      }
    },
    Edibles: {
      extends: Products,
      components: {
        ProductForm: EdibleForm
      }
    },
    Concentrates: {
      extends: Products,
      components: {
        ProductForm: ConcentrateForm
      }
    },
    Submit
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
