<template>
<div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add Vendor</h5>
      </div>

      <div class="modal-body">
        <form>
          <h3>Company</h3>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name"
              v-model="vendor.company.name">
          </div>
          <div class="row">
            <div class="form-group col-md-9">
              <label for="exampleFormControlSelect1">Address:</label>
              <input type="text" class="form-control" id="address"
                v-model="vendor.company.address">
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlSelect1">Zip:</label>
              <input type="text" class="form-control" id="zip"
                v-model="vendor.company.zip">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">City:</label>
              <input type="text" class="form-control" id="city"
                v-model="vendor.company.city">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">State:</label>
              <input type="text" class="form-control" id="state"
                v-model="vendor.company.state">
            </div>
          </div>
          <h3>Contact</h3>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">First:</label>
                <input type="text" class="form-control" id="firstName"
                  v-model="vendor.contact.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Last:</label>
                <input type="text" class="form-control" id="lastName"
                  v-model="vendor.contact.lastName">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Phone:</label>
                <input type="text" class="form-control" id="phone"
                  v-model="vendor.contact.phone">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Email:</label>
                <input type="text" class="form-control" id="email"
                  v-model="vendor.contact.email">
            </div>
          </div>

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
        <button type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
  computed: {
    isVisible() {
      return this.$store.getters.pendingAction.type === 'addVendor';
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    save() {
      this.validate(this.vendor)
        .then(() => {
          this.$store.dispatch('createVendor', this.vendor);
        });
    },
    validate(vendor) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
  }
};
</script>
