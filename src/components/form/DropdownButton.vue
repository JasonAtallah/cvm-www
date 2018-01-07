<style scoped>

</style>

<template>
  <div class="dropdown">
    <button class="btn btn-sm" :class="buttonClass" type="button"
      :data-toggle="showDropdown" aria-haspopup="true" aria-expanded="false"
      @click="onButtonClick()">
      {{ buttonLabel }}
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" v-for="option in options" @click.prevent="onItemClick(option)">
        {{ option.label }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-button',
  props: {
    label: {
      type: String,
      required: false
    },
    option: {
      type: Object,
      required: false
    },
    options: {
      type: Array,
      required: false
    },
    buttonClassName: {
      type: String,
      required: false
    }
  },
  computed: {
    buttonLabel() {
      return this.option ? this.option.label : this.label;
    },
    buttonClass() {
      const classObj = {
        'dropdown-toggle': this.showDropDownToggle
      };
      if (this.buttonClassName) {
        classObj[this.buttonClassName] = true;
      }
      return classObj;
    },
    showDropdown() {
      if (this.showDropDownToggle) {
        return 'dropdown';
      }
      return null;
    },
    showDropDownToggle() {
      return this.options && this.options.length;
    }
  },
  methods: {
    onButtonClick() {
      if (!this.showDropDownToggle) {
        this.$emit('selection', this.option || this.label);
      }
    },
    onItemClick(option) {
      this.$emit('selection', option);
    }
  }
};
</script>
