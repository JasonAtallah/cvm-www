

<template>
  <div>
    <h3>Profile</h3>
    <p class="lead">
      Update your personal and company information.
    </p>
    <div class="card card-body bg-light">
      <ElForm :model="profile.contact" :rules="rules" ref="profile.contact">
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
      <ElForm :model="profile.company" :rules="rules" ref="profile.company">
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
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click="updateProfile" :disabled="canNotUpdate">Save</button>
      <button type="button" class="btn btn-lg btn-default" @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import {
  Col as ElCol,
  Form as ElForm,
  FormItem as ElFormItem,
  Input as ElInput,
  Notification } from 'element-ui';

export default {
  components: {
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
        firstName: [
          { required: true, message: 'Please Enter First Name', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Please Enter Last Name', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Please Enter Phone Number', trigger: 'blur' },
          { min: 7, message: 'Number Should Be At Least 7 Digits', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please Input Email Address', trigger: 'blur' },
          { type: 'email', message: 'Please Input Valid Email Address', trigger: 'blur,change' }
        ],
        name: [
          { required: true, message: 'Please Enter a Company Name', trigger: 'blur' }
        ],
        address: [
          { required: true, message: 'Please Enter an Address', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please Enter a City', trigger: 'blur' }
        ],
        state: [
          { required: true, message: 'Please Enter a State', trigger: 'blur' },
          { min: 2, max: 2, message: 'State Must Be Two Letters', trigger: 'blur' }
        ],
        zip: [
          { required: true, message: 'Please Enter a Zip', trigger: 'blur' },
          { min: 5, message: 'Zip Must Be 5 or More Digits', trigger: 'blur' }
        ]
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
      this.$refs['profile.contact'].validate((valid) => {
        this.$refs['profile.company'].validate((valid) => {
          if (valid) {
            this.$store.dispatch('updateBuyerProfile', _.cloneDeep(this.profile));
            Notification({
              title: 'Success',
              message: 'Profile Updated!',
              type: 'success',
              duration: 2000
            });
          } else {
            Notification({
              title: 'Uh oh',
              message: 'Something Went Wrong',
              type: 'error',
              duration: 2000
            });
          }
        });
      });
    }
  }
};
</script>
