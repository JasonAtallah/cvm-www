<style scoped>

.content-option {
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.vendor-list-detail {
  padding-left: 1.5rem;
}

.company-name {
  font-size: 2rem;
  color: #777777
}

</style>


<template>
  <div class="vendor-list-detail ">
    <div class="row company-name">
      {{ vendor.company.name }}
    </div>
    <div class="row content-options">
      <DetailTabs />
    </div>
    <div class="row profile-content">
      <Company v-if="vendorDetailsTab === 'company'" />
      <Contact v-if="vendorDetailsTab === 'contact'" />
      <Flowers v-if="vendorDetailsTab === 'flowers'" />
      <Edibles v-if="vendorDetailsTab === 'edibles'" />
      <Concentrates v-if="vendorDetailsTab === 'concentrates'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DetailTabs from './vendorListDetails/DetailTabs';
import Company from './vendorListDetails/Company';
import Contact from './vendorListDetails/Contact';
import Flowers from './vendorListDetails/Flowers';
import Edibles from './vendorListDetails/Edibles';
import Concentrates from './vendorListDetails/Concentrates';

export default {
  components: {
    DetailTabs,
    Company,
    Contact,
    Flowers,
    Edibles,
    Concentrates
  },
  name: 'vendor-list-detail',
  computed: {
    ...mapGetters({
      vendor: 'selVendor',
      vendorDetailsTab: 'vendorDetailsTab'
    }),
    isVisible() {
      return this.vendor !== null;
    }
  },
  methods: {
    closeDetail() {
      this.$store.commit('selVendor', null);
    }
  }
};
</script>
