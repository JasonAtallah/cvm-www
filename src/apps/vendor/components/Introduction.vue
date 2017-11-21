<style>
.intro {
  text-align: left;
  margin-top: 3rem;
}

.intro h3 {
  margin-top: 2rem !important
}

.buttons {
  text-align: center;
  margin-top: 2rem;
}
</style>

<template>
<BasePage pageName="">
  <div slot="content" id="Questionnaire">
    <div class="container">
      <div class="row">
        <div class="buttons col-sm-8 offset-sm-2" v-if="questionnaire">
          <button class="btn btn-primary" @click="getStarted">Get Started</button>
        </div>
      </div>

      <div class="row">
        <div class="intro col-sm-8 offset-sm-2" v-if="questionnaire" v-html="introHtml">
        </div>
      </div>

      <div class="row">
        <div class="buttons col-sm-8 offset-sm-2" v-if="questionnaire">
          <button class="btn btn-primary" @click="getStarted">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';

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
    introHtml() {
      return this.markdown.makeHtml(this.questionnaire.introduction);
    }
  },
  methods: {
    getStarted() {
      this.$router.push({ name: 'Questionnaire' });
    }
  }
};
</script>
