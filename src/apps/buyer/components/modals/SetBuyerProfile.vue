<template>
<div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Complete profile</h5>
      </div>

      <div class="modal-body">
        <form>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">First:</label>
                <input type="text" class="form-control" id="firstName"
                  v-model="profile.contact.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Last:</label>
                <input type="text" class="form-control" id="lastName"
                  v-model="profile.contact.lastName">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Phone:</label>
                <input type="text" class="form-control" id="phone"
                  v-model=" profile.contact.phone">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Email:</label>
                <input type="text" class="form-control" id="email"
                  v-model="profile.contact.email">
            </div>
          </div>

          <h3>Company</h3>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name"
              v-model="profile.company.name">
          </div>
          <div class="row">
            <div class="form-group col-md-9">
              <label for="exampleFormControlSelect1">Address:</label>
              <input type="text" class="form-control" id="address"
                v-model="profile.company.address">
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlSelect1">Zip:</label>
              <input type="text" class="form-control" id="zip"
                v-model="profile.company.zip">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">City:</label>
              <input type="text" class="form-control" id="city"
                v-model="profile.company.city">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">State:</label>
              <input type="text" class="form-control" id="state"
                v-model="profile.company.state">
            </div>
          </div>

        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click.prevent="save">Save</button>
        <button v-if="canCancel" type="button" class="btn btn-default" @click.prevent="cancel">Cancel</button>
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
      newProfile: {
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
    ...mapGetters({
      buyer: 'buyer'
    }),
    isVisible() {
      return (this.buyer && !this.buyer.profile) ||
        (this.$store.getters.pendingAction.type === 'updateBuyerProfile');
    },
    canCancel() {
      return this.buyer.profile !== undefined;
    },
    profile() {
      return this.buyer.profile || this.newProfile;
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    save() {
      const isValid = this.validate();

      if (isValid) {
        this.$store.dispatch('updateBuyerProfile', this.profile);
      }
    },
    validate() {
      if (!this.profile.company.name.trim() || !this.profile.company.address.trim()) {
        return false;
      }
      return true;
    }
  }
};
</script>
