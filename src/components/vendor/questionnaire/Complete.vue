<style>
.intro h3 {
  margin-top: 2rem !important
}
</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="intro col-sm-8 offset-sm-2" v-if="questionnaire" v-html="completionHtml">
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from '../BasePage';

export default {
  components: {
    BasePage
  },
  data() {
    return {
      markdown: new showdown.Converter()
    };
  },
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire'
    }),
    completionHtml() {
      return this.markdown.makeHtml(this.questionnaire.completion);
    }
  }
};
</script>
