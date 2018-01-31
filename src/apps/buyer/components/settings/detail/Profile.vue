

<template>
  <div>
    <h3>Profile</h3>
    <p class="lead">
      Update your personal and company information.
    </p>
    <div class="card card-body bg-light">
      <ElForm :model="profile.contact" :rules="rules.contact" ref="profile.contact">
        <ElCol :span="11">
          <ElFormItem label="First Name" prop="firstName">
            <ElInput v-model="profile.contact.firstName" placeholder="First Name" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="1">&nbsp;</ElCol>
        <ElCol :span="12">
          <ElFormItem label="Last Name" prop="lastName">
            <ElInput v-model="profile.contact.lastName" placeholder="Last Name" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="11">
          <ElFormItem label="Phone" prop="phone">
            <ElInput v-model="profile.contact.phone" placeholder="Phone" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="1">&nbsp;</ElCol>
        <ElCol :span="12">
          <ElFormItem label="Email" prop="email">
            <ElInput v-model="profile.contact.email" placeholder="Email" />
          </ElFormItem>
        </ElCol>
      </ElForm>
      <ElForm :model="profile.company" :rules="rules.company" ref="profile.company">
        <ElCol :span="11">
          <ElFormItem label="Name" prop="name">
            <ElInput v-model="profile.company.name" placeholder="Name" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="1">&nbsp;</ElCol>
        <ElCol :span="12">
          <ElFormItem label="Address" prop="address">
            <ElInput v-model="profile.company.address" placeholder="Address" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="8">
          <ElFormItem label="City" prop="city">
            <ElInput v-model="profile.company.city" placeholder="City" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="1">&nbsp;</ElCol>
        <ElCol :span="6">
          <ElFormItem label="State" prop="state">
            <ElInput v-model="profile.company.state" placeholder="State" />
          </ElFormItem>
        </ElCol>
        <ElCol :span="1">&nbsp;</ElCol>
        <ElCol :span="8">
          <ElFormItem label="Zip" prop="zip">
            <ElInput v-model="profile.company.zip" placeholder="Zip Code" />
          </ElFormItem>
        </ElCol>
      </ElForm>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click="updateProfile" :disabled="canNotUpdate">Update Profile</button>
      <button type="button" class="btn btn-lg btn-default" @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import {
  Button as ElButton,
  Col as ElCol,
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  Notification } from 'element-ui';
import companyFormRules from '../../../metadata/formRules/profile.company';
import contactFormRules from '../../../metadata/formRules/profile.contact';

export default {
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
      profile: {
        company: {
          name: this.buyer.profile.company.name || null,
          address: this.buyer.profile.company.address || null,
          zip: this.buyer.profile.company.zip || null,
          city: this.buyer.profile.company.city || null,
          state: this.buyer.profile.company.state || null
        },
        contact: {
          firstName: this.buyer.profile.contact.firstName || null,
          lastName: this.buyer.profile.contact.lastName || null,
          phone: this.buyer.profile.contact.phone || null,
          email: this.buyer.profile.contact.email || null
        }
      },
      rules: {
        company: companyFormRules,
        contact: contactFormRules
      }
    };
  },
  props: ['buyer'],
  computed: {
    canNotUpdate() {
      return _.isEqual(this.buyer.profile, this.profile);
    }
  },
  methods: {
    cancel() {
      this.profile = _.cloneDeep(this.buyer.profile);
    },
    updateProfile() {
      this.validateForm('profile.contact')
        .then(() => {
          return this.validateForm('profile.company');
        })
        .then(() => {
          return this.$store.dispatch('updateBuyerProfile', _.cloneDeep(this.profile));
        })
        .then(() => {
          Notification({
            title: 'Success',
            message: 'Profile Updated!',
            type: 'success',
            duration: 2000
          });
        })
        .catch(() => {
          Notification({
            title: 'Error',
            message: 'Please check the form for errors.',
            type: 'error',
            duration: 2000
          });
        });
    },
    validateForm(formRef) {
      return new Promise((res, rej) => {
        this.$refs[formRef].validate((valid) => {
          if (valid) {
            res();
          } else {
            rej();
          }
        });
      });
    }
  }
};
</script>
