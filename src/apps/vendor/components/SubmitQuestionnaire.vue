

<template>
<div>
  <button @click="submitQuestionnaire">Submit</button>
</div>
</template>

<script>
export default {
  props: ['response'],
  methods: {
    submitQuestionnaire() {
      this.$store.dispatch('submitResponse', this.response)
        .then((response) => {
          this.$router.push({ name: 'Complete', data: response });
        });
    }
  }
};
</script>
