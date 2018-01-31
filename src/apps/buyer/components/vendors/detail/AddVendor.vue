<template>
  <div>
    <h3>Add A New Vendor</h3>
    <p class="lead">
      Add your already existing vendors.
    </p>
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-12">
          <h3>Company</h3>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-12">
          <label for="exampleFormControlSelect1">Name:</label>
          <ElInput placeholder="Name" v-model="vendor.company.name" />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-12">
          <label for="exampleFormControlSelect1">Address:</label>
          <ElInput placeholder="Address" v-model="vendor.company.address" />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <label for="exampleFormControlSelect1">City:</label>
          <ElInput placeholder="City" v-model="vendor.company.city" />
        </div>
        <div class="form-group col-sm-3">
          <label for="exampleFormControlSelect1">State:</label>
          <ElInput placeholder="State" v-model="vendor.company.state" />
        </div>
        <div class="form-group col-sm-3">
          <label for="exampleFormControlSelect1">Zip:</label>
          <ElInput placeholder="Zip" v-model="vendor.company.zip" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <h3>Contact</h3>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <label for="exampleFormControlSelect1">First:</label>
            <ElInput placeholder="First Name" v-model="vendor.contact.firstName" />
        </div>
        <div class="form-group col-sm-6">
          <label for="exampleFormControlSelect1">Last:</label>
            <ElInput placeholder="Last Name" v-model="vendor.contact.lastName" />
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <label for="exampleFormControlSelect1">Phone:</label>
            <ElInput placeholder="Phone" v-model="vendor.contact.phone" />
        </div>
        <div class="form-group col-sm-6">
          <label for="exampleFormControlSelect1">Email:</label>
            <ElInput placeholder="Email" v-model="vendor.contact.email" />
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button id="save" type="button" class="btn btn-primary" @click="save">Save</button>
      <button id="cancel" type="button" class="btn btn-default" @click="cancel">Cancel</button>
    </div>

  </div>
</template>

<script>
import {
  Input as ElInput,
  Notification } from 'element-ui';

export default {
  components: {
    ElInput,
    Notification
  },
  data() {
    return {
      vendor: {
        company: {
          name: null,
          address: null,
          zip: null,
          city: null,
          state: null
        },
        contact: {
          firstName: null,
          lastName: null,
          phone: null,
          email: null
        }
      }
    };
  },
  methods: {
    cancel() {
      this.$store.commit('cancelDetailOverride');
    },
    save() {
      this.$store.dispatch('createVendor', this.vendor);
      Notification({
        title: 'Success',
        message: 'Vendor Added',
        type: 'success',
        duration: 2000
      });
    }
  }
};
</script>
