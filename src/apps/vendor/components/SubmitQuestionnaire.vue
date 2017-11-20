

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
        .then(() => {
          this.$router.push({ name: 'Complete' });
        });
    }
  }
};
</script>
