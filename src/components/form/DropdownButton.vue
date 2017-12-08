<template>
  <div class="dropdown">
    <button class="btn btn-sm dropdown-toggle" 
    :class="{'btn-warning': vendor.status === null, 
    'btn-success': vendor.status === 'approved', 
    'btn-danger': vendor.status === 'rejected'}" 
    type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ label }}
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" v-for="option in options" @click.prevent="onItemClick(option)">
        {{ option.label }}
      </a>
    </div>
  </div>
</template>

<script>
import mapGetters from 'vuex';

export default {
  name: 'dropdown-button',
  props: {
    label: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: false
    },
    vendor: {
      vendor: 'vendor'
    }
  },
  methods: {
    onItemClick(option) {
      this.$emit('selection', option);
    }
  }
};
</script>

<style scoped>

</style>