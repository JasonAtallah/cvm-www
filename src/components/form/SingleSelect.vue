<template>
  <select v-bind:value="value" v-on:change="updateValue">
    <option v-if="allowNull" value="">
      -- No selection --
    </option>
    <option v-for="option in options" v-bind:value="option.value || option.label || option">
      {{ option.label || option.value || option }}
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
      type: [String, Object],
      required: false
    },
    allowNull: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('selection', event.target.value);
    }
  }
};
</script>

<style scoped>

</style>
