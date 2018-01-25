<template>
  <div>
    <h3>Email Templates</h3>
    <p class="lead">
      Update your default email templates. These are used when sending an approval or rejection email to a new vendor.
    </p>
    <div class="card card-body bg-light">
      <ElTabs value="approveVendor" @tab-click="switchTab">
        <ElTabPane v-for="emailType in emailTypes" :label="emailType.label"
        :key="emailType.value" :name="emailType.value">
          <div class="form-group" :model="emails[emailType.value]">
            <div class="row">
              <div class="col-sm-12">
                <label class="settings-input-label" for="subject">Subject</label>
                <ElInput id="subject" v-model="emails[emailType.value].subject" placeholder="Subject" />
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <label class="settings-input-label" for="body">Body</label>
                <ElInput id="body" type="textarea" v-model="emails[emailType.value].body" placeholder="Body" :rows="10" />
              </div>
            </div>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click.prevent="updateEmails" :disabled="canNotUpdate">Update Emails</button>
      <button type="button" class="btn btn-lg btn-default" @click.prevent="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Input as ElInput,
  Tabs as ElTabs,
  TabPane as ElTabPane,
  Notification } from 'element-ui';

export default {
  props: ['buyer'],
  components: {
    ElButton,
    ElInput,
    ElTabs,
    ElTabPane,
    Notification
  },
  computed: {
    canNotUpdate() {
      return _.isEqual(this.buyer.emails.approveVendor, this.emails.approveVendor) && _.isEqual(this.buyer.emails.rejectVendor, this.emails.rejectVendor);
    },
    emailTypes() {
      const actions = this.$store.getters.vendorActionButtons;
      return _.find(actions, { label: 'Action' }).options;
    }
  },
  data() {
    return {
      curTab: 'approveVendor',
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
    cancel() {
      if (this.curTab === 'approveVendor') {
        this.emails.approveVendor = _.cloneDeep(this.buyer.emails.approveVendor);
      } else if (this.curTab === 'rejectVendor') {
        this.emails.rejectVendor = _.cloneDeep(this.buyer.emails.rejectVendor);
      }
    },
    switchTab(tab) {
      this.curTab = tab.name;
    },
    updateEmails() {
      let email;
      let messageName;
      if (this.curTab === 'approveVendor') {
        email = {
          email: this.emails.approveVendor,
          templateId: this.curTab
        };
        messageName = 'Approval Email';
      } else if (this.curTab === 'rejectVendor') {
        email = {
          email: this.emails.rejectVendor,
          templateId: this.curTab
        };
        messageName = 'Rejection Email';
      }
      this.$store.dispatch('updateBuyerEmailTemplate', email);
      Notification({
        title: 'Success',
        message: `${messageName} Updated!`,
        type: 'success',
        duration: 2000
      });
    }
  }
};
</script>
