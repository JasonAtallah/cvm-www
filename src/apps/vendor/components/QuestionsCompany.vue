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
            <div class="form-group col-sm-12 col-md-6" v-if="showField('Name')">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" v-model="response.name">
            </div>
            <div class="form-group col-sm-12 col-md-6" v-if="showField('Website')">
              <label for="website">Website:</label>
              <input type="text" class="form-control" id="website" v-model="response.website">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-sm-12" v-if="showField('Address')">
              <label for="address">Address:</label>
              <input type="text" class="form-control" id="address" v-model="response.address">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-sm-12 col-md-6" v-if="showField('City')">
              <label for="city">City:</label>
              <input type="text" class="form-control" id="city" v-model="response.city">
            </div>

            <div class="form-group col-sm-6 col-md-3" v-if="showField('State')">
              <label for="state">State:</label>
              <input type="text" class="form-control" id="state" v-model="response.state">
            </div>

            <div class="form-group col-sm-6 col-md-3" v-if="showField('Zip')">
              <label for="zip">Zip:</label>
              <input type="number" class="form-control" id="zip" v-model="response.zip">
            </div>
          </div>

          <div class="row">
            <div class="form-group col-sm-12 col-md-6" v-if="showField('SREA')">
              <label for="srea">SREA#:</label>
              <input type="text" class="form-control" id="srea" v-model="response.srea">
            </div>
            <div class="form-group col-sm-12 col-md-2" v-if="showField('HaveTaxId')">
              <label for="exampleFormControlSelect1">Have Tax ID:</label><br/>
              <select id="haveTaxId" v-model="response.haveTaxId">
                <option value="" />
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div class="form-group col-sm-12 col-md-2" v-if="showField('HaveSellerPermit')">
              <label for="haveSellerPermit">Have Seller Permit:</label><br/>
              <select id="haveSellerPermit" v-model="response.haveSellerPermit">
                <option value="" />
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div class="form-group col-sm-12 col-md-2" v-if="showField('PartOfCollective')">
              <label for="exampleFormControlSelect1">Part of Collective:</label><br/>
              <select id="partOfCollective" v-model="response.partOfCollective">
                <option value="" />
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
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
