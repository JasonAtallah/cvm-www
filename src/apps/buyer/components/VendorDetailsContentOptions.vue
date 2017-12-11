<style scoped>

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 20px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
  text-decoration: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
}

</style>

<template>
  <div class="row">
    <div class="col-sm-12" v-if="vendor">
      <div class="profile-usermenu">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item" :class="{'active': activeTab === 'company'}">
            <a href="#" @click.prevent="activateTab('company')">Company</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'contact'}">
            <a href="#" @click.prevent="activateTab('contact')">Contact</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'flowers'}">
            <a href="#" @click.prevent="activateTab('flowers')">Flowers</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'edibles'}">
            <a href="#" @click.prevent="activateTab('edibles')">Edibles & Topicals</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'concentrates'}">
            <a href="#" @click.prevent="activateTab('concentrates')">Concentrates</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      activeTab: 'vendorDetailsTab'
    })
  },
  methods: {
    activateTab(detailTab) {
      this.$store.commit('vendorDetailsTab', detailTab);
    }
  }
};
</script>
