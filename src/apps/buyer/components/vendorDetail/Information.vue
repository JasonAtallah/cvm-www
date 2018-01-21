<style scoped>
.information-content th {
  text-align: right;
  width: 150px;
}

i.el-icon-check {
  color: #13CE66;
}

i.el-icon-close {
  color: #FF4949;
}

span.field-name {
  font-size: 1.5rem;
}
</style>

<template>
  <div class="information-content">
    <div class="row">
      <div class="col-sm-6">
        <h3>Company</h3>
        <h4>{{ vendor.company.name}}</h4>
        <h4>{{ vendor.company.address}} {{ vendor.company.city }}, {{ vendor.company.state }} {{ vendor.company.zip }}</h4>
        <h4><a :href="vendor.company.website" target="_blank">{{ vendor.company.website }}</a></h4>
        <h4 v-if="vendor.company.srea">SREA#: {{ vendor.company.srea }}</h4>
        <br>
        <div class="row">
          <div class="col-sm-4">
            <h3 class="property-icon">
              <i v-if="vendor.company.haveTaxId" class="el-icon-check"></i>
              <i v-else class="el-icon-close"></i>
            </h3>
            <span class="field-name">Tax ID</span>
          </div>
          <div class="col-sm-4">
            <h3 class="property-icon">
              <i v-if="vendor.company.partOfCollective" class="el-icon-check"></i>
              <i v-else class="el-icon-close"></i>
            </h3>
            <span class="field-name">Part of Collective</span>
            </div>
          <div class="col-sm-4">
            <h3 class="property-icon">
              <i v-if="vendor.company.haveSellerPermit" class="el-icon-check"></i>
              <i v-else class="el-icon-close"></i>
            </h3>
            <span class="field-name">Seller Permit</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <h3>Contact</h3>
        <h4>{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</h4>
        <h4>{{ vendor.contact.phone }}</h4>
        <h4>{{ vendor.contact.email }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['vendor']
};
</script>
