

<template>
<div>
  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Name')">
      <label for="name">Strain Name:</label>
      <input type="text" class="form-control" id="name" v-model="strain.name">
    </div>
    <div class="form-group col-lg-6" v-if="showField('WeightAvailable')">
      <label for="weightAvailable">Weight Available (lbs):</label>
      <input type="number" class="form-control" id="weightAvailable" v-model="strain.weightAvailable">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Potency')">
      <label for="potency">Potency:</label>
      <input type="text" class="form-control" id="potency" v-model="strain.potency">
    </div>

    <div class="form-group col-lg-6" v-if="showField('BudSize')">
      <label for="budSize">Bud Size:</label>
      <input type="text" class="form-control" id="budSize" v-model="strain.budSize">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('GrowStyle')">
      <label for="growStyle">Grow Style:</label>
      <select id="growStyle" v-model="strain.growStyle">
        <option value="" v-if="!reqField('GrowStyle')" />
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
    </div>
    <div class="form-group col-lg-6" v-if="showField('ShelfReady')">
      <label for="shelfReady">Shelf Ready:</label>
      <select id="shelfReady" v-model="strain.shelfReady">
        <option value="" v-if="!reqField('ShelfReady')" />
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Photo')">
      <label for="photo">Photo:</label>
      <button id="photo">Upload File</button>
    </div>
    <div class="form-group col-lg-6" v-if="showField('TestResults')">
      <label for="testResults">Test Results:</label>
      <button id="testResults">Upload File</button>
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
    },
    reqField(fieldName) {
      return this.getField(fieldName).required;
    }
  }
};
</script>
