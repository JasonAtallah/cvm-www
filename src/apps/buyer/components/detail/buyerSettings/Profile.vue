<template>
  <div>
    <h3>Profile</h3>
    <p class="lead">
      Update your personal and company information.
    </p>
    <div class="card card-body bg-light">
      <div class="form-group">
        <div class="row">
          <div class="col-sm-6">
            <label class="settings-input-label" for="firstName">First Name</label>
            <ElInput id="firstName" v-model="profile.contact.firstName" placeholder="First" />
          </div>
          <div class="col-sm-6">
            <label class="settings-input-label" for="lastName">Last Name</label>
            <ElInput id="lastName" v-model="profile.contact.lastName" placeholder="Last" />
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-6">
            <label class="settings-input-label" for="phone">Phone</label>
            <ElInput id="phone" v-model="profile.contact.phone" placeholder="Phone" />
          </div>
          <div class="col-sm-6">
            <label class="settings-input-label" for="email">Email</label>
            <ElInput id="email" v-model="profile.contact.email" placeholder="Email" />
          </div>
        </div><br>
        <div class="row">
          <div class="col-sm-12">
            <h4>Company</h4>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-6">
            <label class="settings-input-label" for="name">Name</label>
            <ElInput id="name" v-model="profile.company.name" placeholder="Name" />
          </div>
          <div class="col-sm-6">
            <label class="settings-input-label" for="address">Address</label>
            <ElInput id="address" v-model="profile.company.address" placeholder="Address" />
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-4">
            <label class="settings-input-label" for="city">City</label>
            <ElInput id="city" v-model="profile.company.city" placeholder="City" />
          </div>
          <div class="col-sm-4">
            <label class="settings-input-label" for="state">State</label>
            <ElInput id="state" v-model="profile.company.state" placeholder="State" />
          </div>
          <div class="col-sm-4">
            <label class="settings-input-label" for="zip">Zip</label>
            <ElInput id="zip" v-model="profile.company.zip" placeholder="Zip" />
          </div>
        </div>
     </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-lg btn-primary" @click.prevent="updateProfile" :disabled="canNotUpdate">Update Profile</button>
      <button type="button" class="btn btn-lg btn-default" @click.prevent="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import {
  Button as ElButton,
  Input as ElInput,
  Notification } from 'element-ui';

export default {
  props: ['buyer'],
  components: {
    ElButton,
    ElInput,
    Notification
  },
  computed: {
    canNotUpdate() {
      return _.isEqual(this.buyer.profile, this.profile);
    }
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
    cancel() {
      this.profile = this.buyer.profile;
    },
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
