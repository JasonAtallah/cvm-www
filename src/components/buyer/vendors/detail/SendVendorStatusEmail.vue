<template>
  <Detail title="Email" :description="genDescription" :canSave="canSend"
    saveLabel="Send" @save="send" @cancel="cancel">
    <ElForm>
      <div class="row">
        <div class="col-sm-12">
          <ElFormItem label="Subject">
            <ElInput placeholder="Subject" v-model="email.subject" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ElFormItem label="Body">
            <ElInput type="textarea" :rows="15" placeholder="Body" v-model="email.body" />
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

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput
  },
  props: ['params'],
  computed: {
    canSend() {
      return this.email.subject.length > 0 && this.email.body.length > 0;
    },
    email() {
      return this.$store.getters.buyer.emails[this.params.type];
    },
    genDescription() {
      return `Send an email to ${this.params.vendor.name} after reviewing their application.`;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    send() {
      return this.$store.dispatch(this.params.type, {
        vendor: this.params.vendor,
        email: this.email
      });
    }
  }
};
</script>
