<style scoped>
.modal-dialog {
  text-align: left;
  display: block;
  max-width: 1024px;
}
</style>

<template>
<div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h2 class="modal-title">Contact Information</h2>
      </div>

      <div class="modal-body">
        <form>

          <div class="row">
            <div class="form-group col-sm-12 col-md-6" v-if="showField('FirstName')">
              <label for="firstName">First Name:</label>
              <input type="text" class="form-control" id="firstName" v-model="response.firstName">
            </div>
            <div class="form-group col-sm-12 col-md-6" v-if="showField('LastName')">
              <label for="lastName">Last Name:</label>
              <input type="text" class="form-control" id="lastName" v-model="response.lastName">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-sm-12 col-md-6" v-if="showField('Email')">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" v-model="response.email">
            </div>
            <div class="form-group col-sm-12 col-md-6" v-if="showField('Phone')">
              <label for="phone">Phone:</label>
              <input type="number" class="form-control" id="phone" v-model="response.phone">
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['questions', 'response'],
  methods: {
    getField(fieldName) {
      return _.find(this.questions, { name: fieldName });
    },
    showField(fieldName) {
      return this.getField(fieldName).enabled;
    }
  }
};
</script>
