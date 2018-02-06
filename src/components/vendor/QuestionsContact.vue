<template>
<Detail title="Contact Information" :showSave="false" :showCancel="false">
  <ElForm :model="response" :rules="contact" ref="response.contact">
    <div class="row">
      <div class="form-group col-sm-12 col-md-6" v-if="showField('FirstName')">
        <ElFormItem label="First Name" prop="firstName">
          <ElInput v-model="response.firstName" placeholder="First Name" />
        </ElFormItem>
      </div>
      <div class="form-group col-sm-12 col-md-6" v-if="showField('LastName')">
        <ElFormItem label="Last Name" prop="lastName">
          <ElInput v-model="response.lastName" placeholder="Last Name" />
        </ElFormItem>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-sm-12 col-md-6" v-if="showField('Email')">
        <ElFormItem label="Email" prop="email">
          <ElInput v-model="response.email" placeholder="Email" />
        </ElFormItem>
      </div>
      <div class="form-group col-sm-12 col-md-6" v-if="showField('Phone')">
        <ElFormItem label="Phone" prop="phone">
          <ElInput v-model="response.phone" placeholder="Phone" />
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
  Input as ElInput } from 'element-ui';
import contactFormRules from '../metadata/formRules/response.contact';

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput
  },
  data() {
    return {
      contact: contactFormRules
    };
  },
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
