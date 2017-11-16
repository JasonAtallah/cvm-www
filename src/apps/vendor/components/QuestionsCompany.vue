<style scoped>
.modal-dialog {
  text-align: left;
  display: block;
}
</style>

<template>
<div>
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Company Information</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group" v-if="showField('Name')">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name" v-model="response.company.name">
          </div>
          <div class="form-group" v-if="showField('Website')">
            <label for="exampleFormControlSelect1">Website:</label>
            <input type="text" class="form-control" id="website" v-model="response.company.website">
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
        company: {
          name: null,
          website: null
        }
      }
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
