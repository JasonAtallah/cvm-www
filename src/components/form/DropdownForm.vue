<style scoped>

</style>

<template>
  <div class="dropdown">
    <button class="btn btn-sm" :class="{ 'dropdown-toggle': showDropdownToggle }" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ label }}
    </button>
    <div class="dropdown-menu">
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
    }
  }
};
</script>
