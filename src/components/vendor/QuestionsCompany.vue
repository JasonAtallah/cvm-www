<template>
<Detail title="Company Information" :showSave="false" :showCancel="false">
  <ElForm :model="response" :rules="company" ref="response.company">
    <div class="row">
      <div class="col-sm-12 col-md-6" v-if="showField('Name')">
        <ElFormItem label="Name" prop="name">
          <ElInput v-model="response.name" placeholder="Name" />
        </ElFormItem>
      </div>
      <div class="col-sm-12 col-md-6" v-if="showField('Website')">
        <ElFormItem label="Website" prop="website">
          <ElInput v-model="response.website" placeholder="Website" />
        </ElFormItem>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" v-if="showField('Address')">
        <ElFormItem label="Address" prop="address">
          <ElInput v-model="response.address" placeholder="Address" />
        </ElFormItem>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6" v-if="showField('City')">
        <ElFormItem label="City" prop="city">
          <ElInput v-model="response.city" placeholder="City" />
        </ElFormItem>
      </div>
      <div class="col-sm-6 col-md-3" v-if="showField('State')">
        <ElFormItem label="State" prop="state">
          <ElInput v-model="response.state" placeholder="State" />
        </ElFormItem>
      </div>
      <div class="col-sm-6 col-md-3" v-if="showField('Zip')">
        <ElFormItem label="Zip" prop="zip">
          <ElInput v-model="response.zip" placeholder="Zip" />
        </ElFormItem>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6" v-if="showField('SREA')">
        <ElFormItem label="SREA#" prop="srea">
          <ElInput v-model="response.srea" placeholder="SREA" />
        </ElFormItem>
      </div>
      <div class="col-sm-12 col-md-2" v-if="showField('HaveTaxId')">
        <ElFormItem label="Have Tax ID" prop="selection">
          <ElSelect v-model="response.haveTaxId" placeholder="Select">
            <ElOption :value="false" label="No" />
            <ElOption :value="true" label="Yes" />
          </ElSelect>
        </ElFormItem>
      </div>
      <div class="form-group col-sm-12 col-md-2" v-if="showField('HaveSellerPermit')">
        <ElFormItem label="Have Seller Permit" prop="selection">
          <ElSelect v-model="response.haveSellerPermit" placeholder="Select">
            <ElOption :value="false" label="No" />
            <ElOption :value="true" label="Yes" />
          </ElSelect>
        </ElFormItem>
      </div>
      <div class="form-group col-sm-12 col-md-2" v-if="showField('PartOfCollective')">
        <ElFormItem label="Part of Collective" prop="selection">
          <ElSelect v-model="response.partOfCollective" placeholder="Select">
            <ElOption :value="false" label="No" />
            <ElOption :value="true" label="Yes" />
          </ElSelect>
        </ElFormItem>
      </div>

    </div>
  </ElForm>
</Detail>
</template>

<script>
import Detail from '@/components/masterDetail/Detail';
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  InputNumber as ElInputNumber,
  Option as ElOption,
  Select as ElSelect } from 'element-ui';
import companyFormRules from '../../apps/vendor/metadata/formRules/response.company';

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput,
    ElInputNumber,
    ElOption,
    ElSelect
  },
  data() {
    return {
      company: companyFormRules
    };
  },
  props: ['questions', 'response'],
  methods: {
    getField(fieldName) {
      return _.find(this.questions, { name: fieldName });
    },
    showField(fieldName) {
      return this.getField(fieldName).enabled;
    },
    false() {
      return false;
    },
    true() {
      return true;
    }
  }
};
</script>
