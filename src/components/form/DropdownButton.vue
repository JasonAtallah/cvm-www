<style scoped>

</style>

<template>
  <div class="dropdown-button">
    <ElButton type="text" v-if="!showDropdown" @click="onButtonClick()">
      {{ buttonLabel }}
    </ElButton>

    <ElDropdown v-if="showDropdown" trigger="click" @command="onItemClick">
      <ElButton type="text">
        {{ buttonLabel }}<i class="el-icon-arrow-down el-icon--right"></i>
      </ElButton>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem v-for="option in options" :command="option">{{ option.label }}</ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
  </div>
</template>

<script>
import { Button as ElButton,
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem } from 'element-ui';

export default {
  components: {
    ElButton,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu
  },
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
    showDropdown() {
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
      console.dir(option);
      this.$emit('selection', option);
    }
  }
};
</script>
