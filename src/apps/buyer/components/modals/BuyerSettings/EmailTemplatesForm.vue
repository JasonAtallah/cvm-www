<template>
  <ElForm :model="emails">
    <h4>Approval Email Template</h4>
    <ElFormItem>
      <ElInput v-model="emails.approveVendor.subject" placeholder="Subject" />
    </ElFormItem>
    <ElFormItem>
      <ElInput type="textarea" v-model="emails.approveVendor.body" placeholder="Body" />
    </ElFormItem>
    <h4>Rejection Email Template</h4>
    <ElFormItem>
      <ElInput v-model="emails.rejectVendor.subject" placeholder="Subject" />
    </ElFormItem>
    <ElFormItem>
      <ElInput type="textarea" v-model="emails.rejectVendor.body" placeholder="Body" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="updateEmail">Update</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import {
  Button as ElButton,
  Col as ElCol,
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  Notification } from 'element-ui';

export default {
  props: ['buyer'],
  components: {
    ElButton,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    Notification
  },
  data() {
    return {
      emails: {
        approveVendor: {
          subject: this.buyer.emails.approveVendor.subject || null,
          body: this.buyer.emails.approveVendor.body || null
        },
        rejectVendor: {
          subject: this.buyer.emails.rejectVendor.subject || null,
          body: this.buyer.emails.rejectVendor.body || null
        }
      }
    };
  },
  methods: {
    updateApprovalEmail() {
      return this.$store.dispatch('updateBuyerEmailTemplate', {
        email: this.emails.approveVendor,
        templateId: 'approveVendor'
      });
    },
    updateEmail() {
      const newApprove = this.emails.approveVendor;
      const curApprove = this.buyer.emails.approveVendor;
      if (newApprove.subject !== curApprove.subject || newApprove.body !== curApprove.body) {
        this.updateApprovalEmail();
        Notification({
          title: 'Success',
          message: 'Approval Email Updated!',
          type: 'success'
        });
      }

      const newReject = this.emails.rejectVendor;
      const curReject = this.buyer.emails.rejectVendor;
      if (newReject.subject !== curReject.subject || newReject.body !== curReject.body) {
        this.updateRejectionEmail();
        Notification({
          title: 'Success',
          message: 'Rejection Email Updated!',
          type: 'success'
        });
      }
    },
    updateRejectionEmail() {
      return this.$store.dispatch('updateBuyerEmailTemplate', {
        email: this.emails.rejectVendor,
        templateId: 'rejectVendor'
      });
    }
  }
};
</script>

<style>

</style>
