<template>
  <div>
    <h3>{{ title }}</h3>
    <p class="lead">{{ description }}</p>
    <div class="card card-body bg-light">
      <slot></slot>
    </div>
    <div class="modal-footer">
      <button id="save" type="button" class="btn btn-lg btn-primary" @click="save" v-if="showSave" :disabled="canSave === false">{{ actionButtonLabel || 'Save' }}</button>
      <button id="cancel" type="button" class="btn btn-lg btn-default" @click="cancel" v-if="showCancel !== false" :disabled="canCancel === false">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'showSave', 'canSave', 'showCancel', 'canCancel', 'actionButtonLabel'],
  methods: {
    save() {
      this.$emit('save');
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>
