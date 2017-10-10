<template>
  <select v-bind:value="value">
    <option v-for="option in options" v-bind:value="option.value || option">
      {{ option.label || option }} {{ value }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'single-select',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('selection', value);
    }
  }
};
</script>

<style scoped>

</style>
