

<template>
  <Detail title="Profile" description="Update your personal and company information."
    :canSave="canSave" :canCancel="canCancel"
    @save="save" @cancel="cancel">
    <ElForm :model="profile.contact" :rules="rules.contact" ref="profile.contact">
      <div class="row">
        <div class="col-sm-6">
          <ElFormItem label="First Name" prop="firstName">
            <ElInput v-model="profile.contact.firstName" placeholder="First Name" />
          </ElFormItem>
        </div>
        <div class="col-sm-6">
          <ElFormItem label="Last Name" prop="lastName">
            <ElInput v-model="profile.contact.lastName" placeholder="Last Name" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <ElFormItem label="Phone" prop="phone">
            <ElInput v-model="profile.contact.phone" placeholder="Phone" />
          </ElFormItem>
        </div>
        <div class="col-sm-6">
          <ElFormItem label="Email" prop="email">
            <ElInput v-model="profile.contact.email" placeholder="Email" />
          </ElFormItem>
        </div>
      </div>
    </ElForm>
    <ElForm :model="profile.company" :rules="rules.company" ref="profile.company">
      <div class="row">
        <div class="col-sm-6">
          <ElFormItem label="Name" prop="name">
            <ElInput v-model="profile.company.name" placeholder="Name" />
          </ElFormItem>
        </div>
        <div class="col-sm-6">
          <ElFormItem label="Address" prop="address">
            <ElInput v-model="profile.company.address" placeholder="Address" />
          </ElFormItem>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <ElFormItem label="City" prop="city">
            <ElInput v-model="profile.company.city" placeholder="City" />
          </ElFormItem>
        </div>
        <div class="col-sm-4">
          <ElFormItem label="State" prop="state">
            <ElInput v-model="profile.company.state" placeholder="State" />
          </ElFormItem>
        </div>
        <div class="col-sm-4">
          <ElFormItem label="Zip" prop="zip">
            <ElInput v-model="profile.company.zip" placeholder="Zip Code" />
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
import companyFormRules from '@/apps/buyer/metadata/formRules/profile.company';
import contactFormRules from '@/apps/buyer/metadata/formRules/profile.contact';

export default {
  components: {
    Detail,
    ElForm,
    ElFormItem,
    ElInput
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
    canCancel() {
      return this.canSave;
    },
    canSave() {
      return _.isEqual(this.buyer.profile, this.profile) === false;
    }
  },
  methods: {
    cancel() {
      this.profile = _.cloneDeep(this.buyer.profile);
    },
    save() {
      this.validateForm('profile.contact')
        .then(() => {
          return this.validateForm('profile.company');
        })
        .then(() => {
          return this.$store.dispatch('updateBuyerProfile', _.cloneDeep(this.profile));
        })
        .then(() => {
          this.$store.dispatch('successNotification', 'Profile Updated');
        })
        .catch(() => {
          this.$store.dispacth('errorNotification');
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
