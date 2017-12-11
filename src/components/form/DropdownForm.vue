<style scoped>
.dropdown-menu {
  padding: 10px;
}
</style>

<template>
  <div class="dropdown">
    <button class="btn btn-sm" :class="{ 'dropdown-toggle': showDropdownToggle }" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ label }}
    </button>
    <div class="dropdown-menu" @click="handleMenuClick($event)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    showDropdownToggle: {
      type: Boolean,
      default: true
    },
    enableSubClick: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMenuClick(event) {
      if (this.enableSubClick) {
        event.stopImmediatePropagation();
      }
    }
  }
};
</script>
