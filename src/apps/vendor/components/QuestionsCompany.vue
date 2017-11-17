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
        <h2 class="modal-title">Company Information</h2>
      </div>

      <div class="modal-body">
        <form>
          <div class="row">
            <div class="form-group col-md-6" v-if="showField('Name')">
              <label for="exampleFormControlSelect1">Name:</label>
              <input type="text" class="form-control" id="name" v-model="response.company.name">
            </div>
            <div class="form-group col-md-6" v-if="showField('Website')">
              <label for="exampleFormControlSelect1">Website:</label>
              <input type="text" class="form-control" id="website" v-model="response.company.website">
            </div>
          </div>
          <div class="form-group" v-if="showField('Address')">
            <label for="exampleFormControlSelect1">Address:</label>
            <input type="text" class="form-control" id="address" v-model="response.company.address">
          </div>
          <div class="row">
            <div class="form-group col-md-6" v-if="showField('City')">
            <label for="exampleFormControlSelect1">City:</label>
            <input type="text" class="form-control" id="city" v-model="response.company.city">
          </div>
          <div class="form-group col-md-3" v-if="showField('State')">
            <label for="exampleFormControlSelect1">State:</label>
            <input type="text" class="form-control" id="state" v-model="response.company.state">
          </div>
            <div class="form-group col-md-3" v-if="showField('Zip')">
              <label for="exampleFormControlSelect1">Zip:</label>
              <input type="number" class="form-control" id="zip" v-model="response.company.zip">
            </div>
          </div>          
          <div class="row">
            <div class="form-group col-md-6" v-if="showField('SREA')">
              <label for="exampleFormControlSelect1">SREA#:</label>
              <input type="text" class="form-control" id="srea" v-model="response.company.srea">
            </div>
            <div class="form-group col-md-2" v-if="showField('HaveTaxId')">
              <label for="exampleFormControlSelect1">Have Tax ID:</label>
              <select v-model="response.company.havetaxid"><option value="" /><option value="no">No</option><option value="yes">Yes</option></select>
            </div>
            <div class="form-group col-md-2" v-if="showField('HaveSellerPermit')">
              <label for="exampleFormControlSelect1">Have Seller Permit:</label>
              <select v-model="response.company.havesellerpermit"><option value="" /><option value="no">No</option><option value="yes">Yes</option></select>
            </div>
            <div class="form-group col-md-2" v-if="showField('PartOfCollective')">
              <label for="exampleFormControlSelect1">Part of Collective:</label>
              <select v-model="response.company.partofcollective"><option value="" /><option value="no">No</option><option value="yes">Yes</option></select>
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
        company: {
          name: null,
          website: null,
          address: null,
          zip: null,
          city: null,
          state: null,
          srea: null,
          havetaxid: null,
          havesellerpermit: null,
          partofcollective: null
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
