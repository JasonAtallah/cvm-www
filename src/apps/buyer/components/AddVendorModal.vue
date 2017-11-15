<style scoped>
.add-vendor-modal {
  text-align: left;
  display: block;
}
</style>

<template>
<div class="modal add-vendor-modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add Vendor</h5>
      </div>

      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name"
              v-model="vendor.name">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">City:</label>
            <input type="text" class="form-control" id="city"
              v-model="vendor.city">
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">State:</label>
            <input type="text" class="form-control" id="state"
              v-model="vendor.state">
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
        name: null,
        city: null,
        state: null
      }
    };
  },
  computed: {
    ...mapGetters({
      isVisible: 'addVendorModalIsVisible'
    })
  },
  methods: {
    cancel() {
      this.$store.commit('cancelAddVendor');
    },
    save() {
      this.validate(this.vendor)
        .then(() => {
          this.$store.dispatch('createVendor', this.vendor);
        });
    },
    validate(vendor) {
      return new Promise((resolve, reject) => {
        if (!vendor.name.trim() || !vendor.city.trim() || !vendor.state.trim()) {
          reject();
        }
        resolve();
      });
    }
  },
  beforeMount() {
  }
};
</script>
