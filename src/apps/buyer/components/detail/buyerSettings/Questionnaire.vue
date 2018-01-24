<style scoped>
.btn-code {
  width: 500px;
}
</style>

<template>
  <div>
    <ElCard class="btn-code">
      <div slot="header" class="clearfix">
        <div class="row">
          <div class="col-sm-6">
            <h3>Paste the below code on your site to generate button.</h3>
          </div>
          <div class="col-sm-6">
            <button type="button" style="border-radius:12px; background-color:#00e64d; width:200px; height:75px; font-size:30px">
              <a :href="generateUrl()" target="_blank" style="color:#f2f2f2; text-decoration:none;">Apply</a>
            </button>
          </div>
        </div>
      </div>
      {{ generateButton() }}
    </ElCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Card as ElCard } from 'element-ui';

export default {
  props: ['buyer'],
  computed: {
    ...mapGetters({
      questionnaire: 'questionnaire'
    })
  },
  components: {
    ElCard
  },
  methods: {
    generateButton() {
      return `<button type="button" style="border-radius:12px; background-color:#00e64d; width:200px; height:75px; font-size:30px"><a href="${this.generateUrl()}" target="_blank" style="color:#f2f2f2; text-decoration:none;">Apply</a></button>`;
    },
    generateUrl() {
      return `http://localhost:8082/?qid=${this.questionnaire._id}#/`;
    }
  }
};
</script>

