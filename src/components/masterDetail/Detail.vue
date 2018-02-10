<style scoped>
.row {
  max-width: 80rem;
}
</style>

<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h3>{{ title }}</h3>
        <p class="lead">{{ description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card card-body bg-light">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="modal-footer">
          <button id="save" type="button" class="btn btn-lg btn-primary" @click="save" v-if="showSave !== false" :disabled="canSave === false">{{ actionButtonLabel || 'Save' }}</button>
          <button id="cancel" type="button" class="btn btn-lg btn-default" @click="cancel" v-if="showCancel !== false" :disabled="canCancel === false">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'widthCols', 'showSave', 'canSave', 'showCancel', 'canCancel', 'actionButtonLabel'],
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
