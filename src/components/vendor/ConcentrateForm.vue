

<template>
<div id="concentrateForm">
  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('name')">
      <label for="name">Product Name:</label>
      <input type="text" class="form-control" id="name" v-model="product.name">
    </div>

    <div class="form-group col-lg-6" v-if="showField('unitsAvailable')">
      <label for="unitsAvailable">Units Available (lbs):</label>
      <input type="number" class="form-control" id="unitsAvailable" v-model="product.unitsAvailable">
    </div>
  </div>

  <div class="row">

    <div class="form-group col-lg-6" v-if="showField('thc')">
      <label for="thc">THC (mg):</label>
      <input type="number" class="form-control" id="thc" v-model="product.thc">
    </div>

    <div class="form-group col-lg-6" v-if="showField('cbd')">
      <label for="cbd">CBD (mg):</label>
      <input type="number" class="form-control" id="cbd" v-model="product.cbd">
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('shelfReady')">
      <label for="shelfReady">Shelf Ready:</label>
      <select id="shelfReady" v-model="product.shelfReady">
        <option value="" v-if="!reqField('shelfReady')" />
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
    </div>

    <div class="form-group col-lg-6" v-if="showField('type')">
      <label for="type">Type:</label>
      <select id="type" v-model="product.type">
        <option value="" v-if="!reqField('type')" />
        <option value="coldWaterHash">Cold Water Hash</option>
        <option value="solventConcentrates">Solvent Concentrates</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="form-group col-lg-6" v-if="showField('photos')">
      <label for="photos">Photo:</label>
      <input type="file" id="photos" name="photos"
        ref="photos"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange($event);" />
      <br/>
      <ul>
        <li v-for="result in product.photos" :key="result.id">
          {{ result.name }}
        </li>
      </ul>
    </div>
    <div class="form-group col-lg-6" v-if="showField('testResults')">
      <label for="testResults">Test Results:</label>
      <input type="file" id="testResults" name="testResults"
        ref="testResults"
        accept=".png, .jpg, .jpeg, .pdf"
        @change="onFileChange($event);" />
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
    onFileChange(event) {
      const inputName = event.target.name;
      const filesArr = event.target.files;

      if (!filesArr.length) {
        return;
      }

      const formData = new FormData();
      formData.append('file', filesArr[0], filesArr[0].name);

      this.$store.commit('productFile', {
        product: this.product,
        field: inputName,
        name: filesArr[0].name,
        formData
      });

      this.$refs[inputName].value = null;
    }
  }
};
</script>
