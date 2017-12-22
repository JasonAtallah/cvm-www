<style scoped>

</style>

<template>
  <div class="dropdown">
    <button class="btn btn-sm" :class="{'dropdown-toggle': showDropDownToggle}" type="button" 
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
    }
  },
  computed: {
    buttonLabel() {
      return this.option ? this.option.label : this.label;
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
