
<style scoped>
ul {
  list-style: none;
  padding-left: 10px;
}

li {
  list-style: none;
  cursor: pointer;
}
</style>

<template>
<ul>
  <li v-for="option in options" :key="getOptionValue(option)" :value="getOptionValue(option)" @click="select(option)">
    <a href="#" @click.prevent>{{ getOptionLabel(option) }}</a>
  </li>
</ul>
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
    }
  },
  methods: {
    select(option) {
      this.$emit('selection', option);
    },
    getOptionValue(option) {
      return option.value || option.label || option;
    },
    getOptionLabel(option) {
      return option.label || option.value || option;
    },
    isSelected(option) {
      const optVal = this.getOptionValue(option);
      const curVal = this.getOptionValue(this.value);
      return optVal === curVal;
    }
  }
};
</script>
