
<style scoped>
select {
  background: none;
  border: none;
}
</style>

<template>
  <select :value="value" @change="updateValue">
    <option v-if="allowNull" value="">{{ nullSelectionLabel }}</option>
    <option v-for="option in options" :value="getOptionValue(option)" :key="getOptionValue(option)">
      {{ getOptionLabel(option) }}
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
    },
    getOptionValue(option) {
      return option.value || option;
    },
    getOptionLabel(option) {
      return option.label || option;
    }
  }
};
</script>
