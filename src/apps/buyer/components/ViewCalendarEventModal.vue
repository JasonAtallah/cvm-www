<style scoped>

.modal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}

.modal-dialog {
  display: table-cell;
  vertical-align: middle;
}

.modal-content {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

</style>

<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <span>
              <h5>{{ event.summary }}</h5>
              <h6>{{ vendor.contact.firstName }} {{vendor.contact.lastName }} from {{ vendor.company.name }} at {{ event.start.dateTime }}</h6>
            </span>
          </div>

          <div class="modal-body">                 
            <div class="row">
              <div class="col-md-4">
                <ul class="list-unstyled">
                  <h5>Flowers</h5>
                  <li v-for="product in vendor.flowers.products">
                    {{ product.name }}
                  </li>
                </ul>
              </div>             
              <div class="col-md-4">
                <ul class="list-unstyled">
                  <h5>Edibles</h5>
                  <li v-for="product in vendor.edibles.products">
                    {{ product.name }}
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-unstyled">
                  <h5>Concentrates</h5>
                  <li v-for="product in vendor.concentrates.products">
                    {{ product.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="modal-footer">                        
            <button @click.prevent="cancel">OK</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VendorListDetail from './VendorListDetail';

export default {
  props: ['event'],
  components: {
    VendorListDetail
  },
  computed: {
    ...mapGetters({
      vendor: 'vendor'
    }),
    isVisible() {
      return this.$store.getters.pendingAction.type === 'showCalendarEvent';
    }
  },
  methods: {
    cancel() {
      this.$store.commit('cancelPendingAction');
    }
  }
};
</script>
