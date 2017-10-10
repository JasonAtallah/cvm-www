<template>
  <div class="page-menu">
    <h1>{{ pageName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  data() {
    return {

    };
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
