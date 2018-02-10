

<template>
<div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6">
      <div :response="response.company" :questions="companyQuestions">
        <h3>Company</h3>
        {{ response.company.name }}<br/>
        {{ response.company.website }}<br/>
        {{ response.company.address }}<br/>
        {{ response.company.city }}<br/>
        {{ response.company.state }}<br/>
        {{ response.company.zip }}<br/>
        {{ response.company.srea }}<br/>
        {{ response.company.haveTaxId }}<br/>
        {{ response.company.haveSellerPermit }}<br/>
        {{ response.company.partOfCollective }}
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-6">
      <div :response="response.contact" :questions="contactQuestions">
        <h3>Contact</h3>
        {{ response.contact.firstName }}<br/>
        {{ response.contact.lastName }}<br/>
        {{ response.contact.email }}<br/>
        {{ response.contact.phone }}<br/>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-4" >
      <h3>Flowers</h3>
      <div v-for="product in response.flowers.products" :key="product.name" :product="product" :def="flowerDef">
        {{ product.name }}
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
      <h3>Edibles & Topicals</h3>
      <div v-for="product in response.edibles.products" :key="product.name" :product="product" :def="edibleDef">
        {{ product.name }}
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4">
      <h3>Concentrates</h3>
      <div v-for="product in response.concentrates.products" :key="product.name" :product="product" :def="concentrateDef">
        {{ product.name }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuestionsCompany from './QuestionsCompany';
import QuestionsContact from './QuestionsContact';

export default {
  components: {
    QuestionsCompany,
    QuestionsContact
  },
  props: ['response'],
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire'
    }),
    companyQuestions() {
      return this.questionnaire.pages[0].questions;
    },
    contactQuestions() {
      return this.questionnaire.pages[1].questions;
    },
    flowerDef() {
      return this.questionnaire.pages[2].questions[0].items;
    },
    edibleDef() {
      return this.questionnaire.pages[3].questions[0].items;
    },
    concentrateDef() {
      return this.questionnaire.pages[4].questions[0].items;
    }
  }
};
</script>
