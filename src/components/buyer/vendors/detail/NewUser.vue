<style scoped>
div.new-section {
  padding: 20px 0px 20px 0px;
}

.button-gen-card {
  width: 500px;
}

img.button-generator {
  width: 100%;
}
</style>

<template>
  <div class="new-user">

    <div class="row new-section">
      <div class="col-12">
        <h1 class="text-center">Welcome to Cannabis Vendor Mgmt</h1><br>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span class="lead">Our goal is to help you streamline your onboarding process and manage your vendors more efficiently, below are some first steps to get you started.</span>
        </div>
    </div>
    <hr>
    <div class="row new-section">
      <div class="col-12 col-xl-7">
        <ElCard class="button-gen-card" :body-style="{ padding: '0px' }">
          <img class="button-generator" src="../../../../../static/screenshots/button-generator.png" />
        </ElCard>
      </div>
      <div class="col-12 col-xl-5 pull-left">
        <div class="row">
          <div class="col-12">
            <span class="lead">Head to your settings to customize your button. Once you're done, copy the HTML we provide below and add it anywhere to your site.</span>
          </div>
          <div class="col-12">
            <ElButton type="text" @click="goToButtonGen">Take me there!</ElButton>
          </div>
        </div>
      </div>
    </div>
    <hr>

  </div>
</template>

<script>
import {
  Button as ElButton,
  Card as ElCard } from 'element-ui';

export default {
  components: {
    ElButton,
    ElCard
  },
  methods: {
    goToButtonGen() {
      this.$store.commit('selSettingTab', 'buttonGenerator');
      this.$router.push('/settings');
    }
  }
};
</script>
