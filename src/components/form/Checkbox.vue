<template>
  <input type="checkbox" :value="value" v-model="checkedProxy" @change="updateValue" />
</template>

<script>
export default {
  data() {
    return {
      checkedState: false
    };
  },
  props: ['value', 'checked'],
  computed: {
    checkedProxy: {
      get() {
        return this.checked;
      },
      set(val) {
        this.checkedState = val;
      }
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('checked', {
        value: this.value,
        checked: this.checkedState
      });
    }
  }
};
</script>
