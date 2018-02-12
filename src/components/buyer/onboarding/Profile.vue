

<template>
  <Detail title="Create your account" description="Just a reminder, emails sent to vendors will come from the email you signed in with."
    :canSave="true" :showCancel="false"
    @save="updateProfile">
    <ElForm :model="values" :rules="rules" ref="profileForm">
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Company Name" prop="name">
            <ElInput v-model="values.name" placeholder="Name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Address" prop="address">
            <ElInput v-model="values.address" placeholder="Address" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="City" prop="city">
            <ElInput v-model="values.city" placeholder="City" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="State" prop="state">
            <ElInput v-model="values.state" placeholder="State" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Zip" prop="zip">
            <ElInput v-model="values.zip" placeholder="Zip" />
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
import Detail from '@/components/masterDetail/Detail';
import rules from '@/apps/buyer/metadata/formRules/onboardingProfile';

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput
  },
  data() {
    return {
      values: {
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null
      },
      rules
    };
  },
  props: ['buyer'],
  methods: {
    updateProfile() {
      this.$refs.profileForm.validate((valid) => {
        if (valid) {
          this.buyer.profile.company.name = this.values.name;
          this.buyer.profile.company.address = this.values.address;
          this.buyer.profile.company.city = this.values.city;
          this.buyer.profile.company.state = this.values.state;
          this.buyer.profile.company.zip = this.values.zip;
          this.$store.dispatch('updateBuyerProfile', _.cloneDeep(this.buyer.profile))
            .then(() => {
              this.$emit('updated');
            });
        } else {
          this.dispatch('errorNotification');
        }
      });
    }
  }
};
</script>
