<template>
  <div class="page">
    <page :pageName="name" />
  </div>
</template>

<script>
import Page from '@/components/Page';

export default {
  name: 'Calendar',
  data() {
    return {
      name: 'Calendar'
    };
  },
  components: {
    Page
  }
};
</script>

<style scoped>

</style>
