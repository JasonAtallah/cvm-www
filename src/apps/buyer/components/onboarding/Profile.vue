

<template>
  <Detail title="Profile" description="Update your personal and company information."
    :canSave="true" :showCancel="false"
    @save="updateProfile">
    <ElForm :model="values" :rules="rules" ref="profileForm">
      <div class="row">
        <div class="col-12">
          <ElFormItem label="First Name" prop="firstName">
            <ElInput v-model="values.firstName" placeholder="First Name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Email" prop="email">
            <ElInput v-model="values.email" placeholder="Email" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Company Name" prop="name">
            <ElInput v-model="values.name" placeholder="Name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ElFormItem label="Company City" prop="city">
            <ElInput v-model="values.city" placeholder="City" />
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
import rules from '../../metadata/formRules/onboardingProfile';

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
        firstName: null,
        email: null,
        name: null,
        city: null
      },
      rules
    };
  },
  props: ['buyer'],
  methods: {
    updateProfile() {
      this.$refs.profileForm.validate((valid) => {
        if (valid) {
          this.buyer.profile.contact.firstName = this.values.firstName;
          this.buyer.profile.contact.email = this.values.email;
          this.buyer.profile.company.name = this.values.name;
          this.buyer.profile.company.city = this.values.city;
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
