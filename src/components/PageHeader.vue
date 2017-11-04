<style scoped>
.page-header {
    text-align: left;
    padding: 1rem 0;
}

.page-header h1 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
}
</style>

<template>
  <div class="page-header">
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
