<template>
  <div class="card card-body bg-light">
    <ElForm id="profile" :model="profile">
      <ElFormItem>
        <ElCol :span=12>
          <ElInput id="firstName" v-model="profile.contact.firstName" placeholder="First" />
        </ElCol>
        <ElCol :span=12>
          <ElInput id="lastName" v-model="profile.contact.lastName" placeholder="Last" />
        </ElCol>
      </ElFormItem>
      <ElFormItem>
        <ElCol :span=12>
          <ElInput id="phone" v-model="profile.contact.phone" placeholder="Phone" />
        </ElCol>
        <ElCol :span=12>
          <ElInput id="email" v-model="profile.contact.email" placeholder="Email" />
        </ElCol>
      </ElFormItem>

      <h4>Company</h4>
      <ElFormItem>
        <ElCol :span=10>
          <ElInput id="name" v-model="profile.company.name" placeholder="Name" />
        </ElCol>
        <ElCol :span=14>
          <ElInput id="address" v-model="profile.company.address" placeholder="Address" />
        </ElCol>
      </ElFormItem>
      <ElFormItem>
        <ElCol :span=8>
          <ElInput id="city" v-model="profile.company.city" placeholder="City" />
        </ElCol>
        <ElCol :span=8>
          <ElInput id="state" v-model="profile.company.state" placeholder="State" />
        </ElCol>
        <ElCol :span=8>
          <ElInput id="zip" v-model="profile.company.zip" placeholder="Zip" />
        </ElCol>
      </ElFormItem>
      <ElFormItem>
        <ElButton id="updateProfile" type="primary" @click="updateProfile">Update Profile</ElButton>
      </ElFormItem>
    </ElForm>
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
          firstName: this.buyer.profile.contact.firstName || null,
          lastName: this.buyer.profile.contact.lastName || null,
          phone: this.buyer.profile.contact.phone || null,
          email: this.buyer.profile.contact.email || null
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
        type: 'success',
        duration: 2000
      });
    }
  }
};
</script>

<style>

</style>
