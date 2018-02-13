<template>
<Detail title="Contact Information" :showSave="false" :showCancel="false">
  <ElForm :model="response" :rules="contact" ref="response.contact">
    <div class="row">
      <div class="col-sm-12 col-md-6" v-for="field in questions" :key="field.id" v-if="showField(field.id)">
        <ElFormItem :label="field.name" :prop="field.id">
          <ElInput v-model="response[field.name]" :placeholder="field.name" />
        </ElFormItem>
      </div>
    </div>
  </ElForm>
</Detail>
</template>

<script>
import {
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput } from 'element-ui';

import Detail from '../../masterDetail/Detail';
import contactFormRules from '../../../apps/vendor/metadata/formRules/response.contact';

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
      return _.find(this.questions, { id: fieldName });
    },
    showField(fieldName) {
      return this.getField(fieldName).enabled;
    }
  }
};
</script>
