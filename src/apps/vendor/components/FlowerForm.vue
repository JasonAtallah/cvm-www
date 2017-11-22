

<template>
<div id="flower-form">
  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('name')">
      <label for="name">Product Name:</label>
      <input type="text" class="form-control" id="name" v-model="product.name">
    </div>
    
    <div class="form-group col-lg-6" v-if="showField('budSize')">
      <label for="budSize">Bud Size:</label>
      <input type="text" class="form-control" id="budSize" v-model="product.budSize">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-4" v-if="showField('weightAvailable')">
      <label for="weightAvailable">Weight Available (lbs):</label>
      <input type="number" class="form-control" id="weightAvailable" v-model="product.weightAvailable">
    </div>

    <div class="form-group col-lg-4" v-if="showField('thc')">
      <label for="thc">THC (mg):</label>
      <input type="number" class="form-control" id="thc" v-model="product.thc">
    </div>

    <div class="form-group col-lg-4" v-if="showField('cbd')">
      <label for="cbd">CBD (mg):</label>
      <input type="number" class="form-control" id="cbd" v-model="product.cbd">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('growStyle')">
      <label for="growStyle">Grow Style:</label>
      <select id="growStyle" v-model="product.growStyle">
        <option value="" v-if="!reqField('growStyle')" />
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
    </div>
    <div class="form-group col-lg-6" v-if="showField('shelfReady')">
      <label for="shelfReady">Shelf Ready:</label>
      <select id="shelfReady" v-model="product.shelfReady">
        <option value="" v-if="!reqField('shelfReady')" />
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('photo')">
      <label for="photo">Photo:</label>
      <input type="file" id="photo" name="photo"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange('Photo', $event);" />
    </div>
    <div class="form-group col-lg-6" v-if="showField('testResults')">
      <label for="testResults">Test Results:</label>
      <input type="file" id="testResults" name="testResults"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange('TestResults', $event);" />
      <br/>
      <ul>
        <li v-for="result in product.testResults" :key="result.id">
          {{ result.name }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['def', 'product'],
  methods: {
    getField(fieldName) {
      return _.find(this.def, { id: fieldName });
    },
    showField(fieldName) {
      return this.getField(fieldName).enabled;
    },
    reqField(fieldName) {
      return this.getField(fieldName).required;
    },
    onFileChange(fieldName, event) {
      const inputName = event.target.name;
      const files = event.target.files;

      if (!files.length) {
        return;
      }

      const formData = new FormData();
      formData.append('file', files[0], files[0].name);

      this.strain[inputName].push({
        formData,
        name: files[0].name
      });

      $('#StrainForm #testResults').val('');
    }
  }
};
</script>
