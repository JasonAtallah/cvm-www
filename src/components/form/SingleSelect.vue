
<style scoped>
select {
  background: none;
  border: none;
}
</style>

<template>
  <select v-bind:value="value" v-on:change="updateValue">
    <option v-if="allowNull" value="">{{ nullSelectionLabel }}</option>
    <option v-for="option in options" v-bind:value="option.value || option.label || option">
      {{ option.label || option.value || option }}
    </option>
  </select>
</template>

<script>
export default {
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
    },
    nullSelectionLabel: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('selection', event.target.value);
    }
  }
};
</script>
