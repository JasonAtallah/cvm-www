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
        <h5 class="modal-title">Contact Information</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="row">
            <div class="form-group col-md-6" v-if="showField('FirstName')">
              <label for="exampleFormControlSelect1">First Name:</label>
              <input type="text" class="form-control" id="firstname" v-model="response.contact.firstname">
            </div>
            <div class="form-group col-md-6" v-if="showField('LastName')">
              <label for="exampleFormControlSelect1">Last Name:</label>
              <input type="text" class="form-control" id="lastname" v-model="response.contact.lastname">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6" v-if="showField('Email')">
              <label for="exampleFormControlSelect1">Email:</label>
              <input type="email" class="form-control" id="email" v-model="response.contact.email">
            </div>
            <div class="form-group col-md-6" v-if="showField('Phone')">
              <label for="exampleFormControlSelect1">Phone:</label>
              <input type="number" class="form-control" id="phone" v-model="response.contact.phone">
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
  props: ['questions'],
  data() {
    return {
      response: {
        contact: {
          firstname: null,
          lastname: null,
          emai: null,
          phone: null,
        }
      },
    };
  },
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
