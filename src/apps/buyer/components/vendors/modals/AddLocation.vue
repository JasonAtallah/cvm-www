<style scoped>
label {
  text-align: right;
}
</style>

<template>
<div class="modal" tabindex="-1" role="dialog" v-if="isVisible">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add Location</h5>
      </div>

      <div class="modal-body">

        <div class="form-group row">
          <label for="name" class="col-sm-3 col-form-label">Name:</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="name" v-model="location.name">
          </div>
        </div>

        <div class="form-group row">
          <label for="address" class="col-sm-3 col-form-label">Address:</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="address" v-model="location.address">
          </div>
        </div>

        <div class="form-group row">
          <label for="city" class="col-sm-3 col-form-label">City:</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="city" v-model="location.city">
          </div>
        </div>

        <div class="form-group row">
          <label for="state" class="col-sm-3 col-form-label">State:</label>
          <div class="col-sm-2">
            <input type="text" class="form-control" id="state" v-model="location.state">
          </div>
        </div>

        <div class="form-group row">
          <label for="zip" class="col-sm-3 col-form-label">Zip:</label>
          <div class="col-sm-2">
            <input type="text" class="form-control" id="zip" v-model="location.zip">
          </div>
        </div>
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
      location: {
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null
      }
    };
  },
  computed: {
    isVisible() {
      return this.$store.getters.pendingAction.type === 'addLocation';
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    },
    save() {
      this.validate(this.location)
        .then(() => {
          this.$store.dispatch('createLocation', this.location);
        });
    },
    validate(location) {
      return new Promise((resolve, reject) => {
        const errors = _.compact(Object.keys(location).map((field) => {
          if (location[field].trim().length === 0) {
            return `${field} must be provided.`;
          }
          return undefined;
        }));

        if (errors.length) {
          return reject(new Error(errors[0]));
        }
        return resolve();
      });
    }
  }
};
</script>
