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
        <h5 class="modal-title">Complete profile</h5>
        {{ buyer }}
      </div>

      <div class="modal-body">
        <form>         
          
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">First:</label>
                <input type="text" class="form-control" id="firstName"
                  v-model="buyerInfo.contact.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Last:</label>
                <input type="text" class="form-control" id="lastName"
                  v-model="buyerInfo.contact.lastName">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Phone:</label>
                <input type="text" class="form-control" id="phone"
                  v-model=" buyerInfo.contact.phone">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">Email:</label>
                <input type="text" class="form-control" id="email"
                  v-model="buyerInfo.contact.email">
            </div>
          </div>

          <h3>Company</h3>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name:</label>
            <input type="text" class="form-control" id="name"
              v-model="buyerInfo.company.name">
          </div>
          <div class="row">
            <div class="form-group col-md-9">
              <label for="exampleFormControlSelect1">Address:</label>
              <input type="text" class="form-control" id="address"
                v-model="buyerInfo.company.address">
            </div>
            <div class="form-group col-md-3">
              <label for="exampleFormControlSelect1">Zip:</label>
              <input type="text" class="form-control" id="zip"
                v-model="buyerInfo.company.zip">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">City:</label>
              <input type="text" class="form-control" id="city"
                v-model="buyerInfo.company.city">
            </div>
            <div class="form-group col-md-6">
              <label for="exampleFormControlSelect1">State:</label>
              <input type="text" class="form-control" id="state"
                v-model="buyerInfo.company.state">
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
  computed: {
    ...mapGetters({
      buyer: 'buyer'
    }),
    isVisible() {
      return this.$store.getters.pendingAction.type === 'needNewUserInfo';
    }
  },
  data() {
    return {
      buyerInfo: {
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
      this.$store.commit('cancelPendingAction');
    },
    save() {
      this.validate(this.buyerInfo)
        .then(() => {
          this.$store.commit('updateBuyerInfo', this.buyerInfo);
        })
        .then(() => {
          this.$store.dispatch('updateBuyerInfo', this.buyer);
        });
    },
    validate(buyerInfo) {
      return new Promise((resolve, reject) => {
        if (!buyerInfo.company.name.trim() || !buyerInfo.company.address.trim()) {
          return reject();
        }
        return resolve();
      });
    }
  }
};
</script>
