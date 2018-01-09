<template>
  <ElForm :model="profile">
    <ElFormItem>
      <ElCol :span=12>
        <ElInput v-model="profile.contact.firstName" placeholder="First" />
      </ElCol>            
      <ElCol :span=12>
        <ElInput v-model="profile.contact.lastName" placeholder="last" />
      </ElCol>
    </ElFormItem>
    <ElFormItem>
      <ElCol :span=12>
        <ElInput v-model="profile.contact.phone" placeholder="Phone" />
      </ElCol>
      <ElCol :span=12>
        <ElInput v-model="profile.contact.email" placeholder="Email" />
      </ElCol>
    </ElFormItem>

    <h4>Company</h4>
    <ElFormItem>
      <ElCol :span=10>
        <ElInput v-model="profile.company.name" placeholder="Name" />
      </ElCol>
      <ElCol :span=14>
        <ElInput v-model="profile.company.address" placeholder="Address" />
      </ElCol>
    </ElFormItem>
    <ElFormItem>
      <ElCol :span=8>
        <ElInput v-model="profile.company.city" placeholder="City" />
      </ElCol>
      <ElCol :span=8>
        <ElInput v-model="profile.company.state" placeholder="State" />
      </ElCol>
      <ElCol :span=8>
        <ElInput v-model="profile.company.zip" placeholder="Zip" />
      </ElCol>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="updateProfile">Update</ElButton>
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
      profile: {
        company: {
          name: this.buyer.profile.company.name || null,
          address: this.buyer.profile.company.address || null,
          zip: this.buyer.profile.company.zip || null,
          city: this.buyer.profile.company.city || null,
          state: this.buyer.profile.company.state || null
        },
        contact: {
          firstName: this.buyer.gProfile.firstName || null,
          lastName: this.buyer.gProfile.lastName || null,
          phone: this.buyer.profile.contact.phone || null,
          email: this.buyer.gProfile.email || null
        }
      }
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateBuyerProfile', this.profile);
      Notification({
        title: 'Success',
        message: 'Profile Updated!',
        type: 'success'
      });
    }
  }
};
</script>

<style>

</style>
