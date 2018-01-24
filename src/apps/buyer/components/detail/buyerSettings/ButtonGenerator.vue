<template>
  <div class="card card-body bg-light">
    <div slot="header" class="clearfix">
      <div class="row">
        <div class="col-sm-6">
          <h3>Paste the code below on your site to generate this button.</h3>
        </div>
        <div class="col-sm-6">
          <button type="button" style="border-radius:12px; background-color:#00e64d; width:200px; height:75px; font-size:30px">
            <a :href="generateUrl()" target="_blank" style="color:#f2f2f2; text-decoration:none;">Apply</a>
          </button>
        </div>
      </div>
    </div>
    <br>
    <ElCard>
      {{ generateButton() }}
    </ElCard>
  </div>
</template>

<script>
import { Card as ElCard } from 'element-ui';

export default {
  props: ['buyer', 'questionnaire'],
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

