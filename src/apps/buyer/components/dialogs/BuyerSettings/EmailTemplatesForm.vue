<template>
  <ElTabs v-model="activeTab" >
    <ElTabPane v-for="emailType in emailTypes" :label="emailType.label" :key="emailType.value">
      <ElForm :model="emails[emailType.value]">
        <ElFormItem>
          <ElInput v-model="emails[emailType.value].subject" placeholder="Subject" />
        </ElFormItem>
        <ElFormItem>
          <ElInput type="textarea" v-model="emails[emailType.value].body" placeholder="Body" />
        </ElFormItem>    
        <ElFormItem>
          <ElButton type="primary" @click="updateEmail(emailType.value)">Update</ElButton>
        </ElFormItem> 
      </ElForm>
    </ElTabPane>
  </ElTabs>

</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Col as ElCol,
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  Tabs as ElTabs,
  TabPane as ElTabPane,
  Notification } from 'element-ui';

export default {
  props: ['buyer'],
  components: {
    ElButton,
    ElCol,
    ElForm,
    ElFormItem,
    ElInput,
    ElTabs,
    ElTabPane,
    Notification
  },
  computed: {
    emailTypes() {
      const actions = this.$store.getters.vendorActionButtons;
      return _.find(actions, { label: 'Action' }).options;
    }
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
    updateApprovalEmail(action) {
      return this.$store.dispatch('updateBuyerEmailTemplate', {
        email: this.emails.approveVendor,
        templateId: action
      });
    },
    updateEmail(action) {
      if (action === 'approveVendor') {
        const newApprove = this.emails.approveVendor;
        const curApprove = this.buyer.emails.approveVendor;
        if (newApprove.subject !== curApprove.subject || newApprove.body !== curApprove.body) {
          this.updateApprovalEmail(action);
          Notification({
            title: 'Success',
            message: 'Approval Email Updated!',
            type: 'success'
          });
        }
      } else if (action === 'rejectVendor') {
        const newReject = this.emails.rejectVendor;
        const curReject = this.buyer.emails.rejectVendor;
        if (newReject.subject !== curReject.subject || newReject.body !== curReject.body) {
          this.updateRejectionEmail(action);
          Notification({
            title: 'Success',
            message: 'Rejection Email Updated!',
            type: 'success'
          });
        }
      }
    },
    updateRejectionEmail(action) {
      return this.$store.dispatch('updateBuyerEmailTemplate', {
        email: this.emails.rejectVendor,
        templateId: action
      });
    }
  }
};
</script>

<style>

</style>
