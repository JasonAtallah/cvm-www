<style scoped>

.profile-options {
  padding: 10px 0 10px 0;
  background: #fff;
}

.profile-usermenu {
  margin-top: 10px;
  text-align: left;
}

.profile-usermenu ul li {
  border-bottom: 1px solid #f0f4f7;
}

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 20px;
  font-weight: 400;
}

.profile-usermenu ul li a i {
  margin-right: 8px;
  font-size: 14px;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
}

.profile-usermenu ul li.active {
  border-bottom: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  background-color: #f6f9fb;
  border-left: 2px solid #5b9bd1;
  margin-left: -2px;
}

</style>

<template>
  <div class="col-md-12" v-if="vendor">
    <div class="profile-options">
      <div class="profile-usermenu">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item" :class="{'active': activeTab === 'company'}">
            <a @click.prevent="activateTab('company')">Company</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'flowers'}">
            <a @click.prevent="activateTab('flowers')">Flowers</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'edibles'}">
            <a @click.prevent="activateTab('edibles')">Edibles & Topicals</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'concentrates'}">
            <a @click.prevent="activateTab('concentrates')">Concentrates</a>
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
