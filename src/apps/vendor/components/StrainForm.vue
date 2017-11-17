

<template>
<div>
  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Strain')">
      <label for="exampleFormControlSelect1">Strain Name:</label>
      <input type="text" class="form-control" id="strain" v-model="strain.name">
    </div>
    <div class="form-group col-lg-6" v-if="showField('WeightAvailable')">
      <label for="exampleFormControlSelect1">Weight Available (lbs):</label>
      <input type="number" class="form-control" id="weightavailable" v-model="strain.weightavailable">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Potency')">
      <label for="exampleFormControlSelect1">Potency:</label>
      <input type="text" class="form-control" id="potency" v-model="strain.potency">
    </div>

    <div class="form-group col-lg-6" v-if="showField('BudSize')">
      <label for="exampleFormControlSelect1">Bud Size:</label>
      <input type="text" class="form-control" id="budsize" v-model="strain.budsize">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('GrowStyle')">
      <label for="exampleFormControlSelect1">Grow Style:</label>
      <select v-model="strain.growstyle">
        <option value="" />
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
    </div>
    <div class="form-group col-lg-6" v-if="showField('ShelfReady')">
      <label for="exampleFormControlSelect1">Shelf Ready:</label>
      <select v-model="strain.shelfready">
        <option value="" />
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Photo')">
      <label for="exampleFormControlSelect1">Photo:</label>
      <button>Upload File</button>
    </div>
    <div class="form-group col-lg-6" v-if="showField('TestResults')">
      <label for="exampleFormControlSelect1">Test Results:</label>
      <button>Upload File</button>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['questions', 'strain'],
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
