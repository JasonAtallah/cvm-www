

<template>
<ElForm :model="product" label-position="top">
  <div class="row">
    <div class="col-12" v-if="showField('name')">
      <ElFormItem label="Product Name">
        <ElInput v-model="product.name" placeholder="Product Name" />
      </ElFormItem>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-6" v-if="showField('unitsAvailable')">
      <ElFormItem label="Units Available">
        <ElInputNumber v-model="product.unitsAvailable" :min="0" controls-position="right" />
      </ElFormItem>
    </div>
    <div class="col-12 col-md-6" v-if="showField('shelfReady')">
      <ElFormItem label="Shelf Ready">
        <ElSelect v-model="product.shelfReady" placeholder="Select">
          <ElOption :value="false" label="No" />
          <ElOption :value="true" label="Yes" />
        </ElSelect>
      </ElFormItem>
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-6" v-if="showField('thc')">
      <ElFormItem label="THC (%)">
        <ElInputNumber v-model="product.thc" :min="0" controls-position="right" />
      </ElFormItem>
    </div>
    <div class="col-12 col-md-6" v-if="showField('cbd')">
      <ElFormItem label="CBD (%)">
        <ElInputNumber v-model="product.cbd" :min="0" controls-position="right" />
      </ElFormItem>
    </div>
  </div>

  <div class="row">

  </div>

  <div class="row">
    <div class="col-12 col-lg-6" v-if="showField('photos')">
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
    <div class="col-12 col-lg-6" v-if="showField('testResults')">
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
</ElForm>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  InputNumber as ElInputNumber,
  Option as ElOption,
  Select as ElSelect } from 'element-ui';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElOption,
    ElSelect
  },
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
