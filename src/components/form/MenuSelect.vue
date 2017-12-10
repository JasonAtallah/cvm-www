
<style scoped>
select {
  background: none;
  border: none;
}
</style>

<template>
<ul>
  <li v-for="option in options" :value="option.value || option.label || option" @click="select(option)">
    <span v-if="isSelected(option)"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span>
    <span v-if="!isSelected(option)"><i class="fa fa-circle-o" aria-hidden="true"></i></span>
    <span>{{ option.label || option.value || option }}</span>
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
    select(option) {
      this.$emit('selection', option);
    },
    isSelected(option) {
      if (option.value) {
        return option.value === this.value;
      } else if (option.label) {
        return option.label === this.value;
      }
      return option === this.value;
    }
  }
};
</script>
