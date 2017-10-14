<template>
  <div class="dropdown">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ label }}
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" v-for="option in options" v-on:click.prevent="takeAction(option)">
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
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    takeAction(item) {
      this.$emit('selection', item);
    }
  }
};
</script>

<style scoped>

</style>
