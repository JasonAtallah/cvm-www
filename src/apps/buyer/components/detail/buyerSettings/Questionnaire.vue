<template>
  <div>
    <h3>Questionnaire</h3>
    <p class="lead">
      Customize your questionnaire and get button code.
    </p>
    <div class="card card-body bg-light">
      <ElTabs value="customize">
        <ElTabPane label="Customize" name="customize">
          <Customize :buyer="buyer" :questionnaire="questionnaire" />
        </ElTabPane>
        <ElTabPane label="Button Generator" name="buttonGenerator">
          <QuestionnaireButton :buyer="buyer" :questionnaire="questionnaire" />
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Tabs as ElTabs,
  TabPane as ElTabPane } from 'element-ui';
import Customize from './questionnaire/Customize';
import QuestionnaireButton from './questionnaire/QuestionnaireButton';

export default {
  props: ['buyer'],
  components: {
    Customize,
    ElTabs,
    ElTabPane,
    QuestionnaireButton
  },
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire'
    })
  }
};
</script>

<style>

</style>
