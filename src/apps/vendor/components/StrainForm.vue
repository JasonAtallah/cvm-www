

<template>
<div id="StrainForm">
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
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('Photo')">
      <label for="photo">Photo:</label>
      <input type="file" id="photo" name="photo"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange('Photo', $event);" />
    </div>
    <div class="form-group col-lg-6" v-if="showField('TestResults')">
      <label for="testResults">Test Results:</label>
      <input type="file" id="testResults" name="testResults"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange('TestResults', $event);" />
      <br/>
      <ul>
        <li v-for="result in strain.testResults" :key="result.id">
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
  props: ['questions', 'strain'],
  data() {
    return {
      uploads: {}
    };
  },
  methods: {
    getField(fieldName) {
      return _.find(this.questions, { name: fieldName });
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
