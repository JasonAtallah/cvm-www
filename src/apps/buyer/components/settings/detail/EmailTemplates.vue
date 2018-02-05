<template>
  <Detail title="Email Templates" description="Update your default email templates. These are used when sending an approval or rejection email to a new vendor."
    :canSave="canSave"
    :canCancel="canCancel"
    @save="save"
    @cancel="cancel">

    <ElTabs value="approveVendor" @tab-click="switchTab">
      <ElTabPane v-for="emailType in emailTypes" :key="emailType.value"
        :label="emailType.label"
        :name="emailType.value">

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

  </Detail>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Button as ElButton,
  Input as ElInput,
  Tabs as ElTabs,
  TabPane as ElTabPane,
  Notification } from 'element-ui';
import Detail from '@/components/masterDetail/Detail';

export default {
  components: {
    Detail,
    ElButton,
    ElInput,
    ElTabs,
    ElTabPane,
    Notification
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
  props: ['buyer'],
  computed: {
    canCancel() {
      return this.canSave;
    },
    canSave() {
      return _.isEqual(this.buyer.emails[this.curTab], this.emails[this.curTab]) === false;
    },
    emailTypes() {
      const actions = this.$store.getters.vendorActionButtons;
      return _.find(actions, { label: 'Action' }).options;
    }
  },
  methods: {
    cancel() {
      this.emails[this.curTab] = _.cloneDeep(this.buyer.emails[this.curTab]);
    },
    switchTab(tab) {
      this.curTab = tab.name;
    },
    save() {
      const email = {
        email: this.emails[this.curTab],
        templateId: this.curTab
      };

      this.$store.dispatch('updateBuyerEmailTemplate', email)
        .then(() => {
          Notification({
            title: 'Success',
            message: 'Email Template Updated!',
            type: 'success',
            duration: 2000
          });
        });
    }
  }
};
</script>
