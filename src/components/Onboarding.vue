<template>
  <div class="page">
    <page :pageName="name" />
  </div>
</template>

<script>
import Page from '@/components/Page';

export default {
  name: 'Onboarding',
  data() {
    return {
      name: 'Onboarding'
    };
  },
  components: {
    Page
  }
};
</script>

<style scoped>

</style>
