<style scoped>
.information-content th {
  text-align: right;
  width: 150px;
}

i.el-icon-check {
  color: #13ce66;
}

i.el-icon-close {
  color: #ff4949;
}

span.field-display {
  font-size: 1.2rem;
}
</style>

<template>
  <div class="information-content">
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-6">
          <h3>Company</h3>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.company.name}}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.company.address}} {{ vendor.company.city }}, {{ vendor.company.state }} {{ vendor.company.zip }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display"><a :href="vendor.company.website" target="_blank">{{ vendor.company.website }}</a></span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display" v-if="vendor.company.srea">SREA#: {{ vendor.company.srea }}</span>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.haveTaxId" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Tax ID</span>
              </div>
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.partOfCollective" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Part of Collective</span>
                </div>
              <div class="col-sm-4">
                <span class="property-icon">
                  <i v-if="vendor.company.haveSellerPermit" class="el-icon-check"></i>
                  <i v-else class="el-icon-close"></i>
                </span>
                <span class="field-display">Seller Permit</span>
              </div>
            </div>
        </div>
        <div class="col-sm-6">
          <h3>Contact</h3>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.phone }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <span class="field-display">{{ vendor.contact.email }}</span>
              </div>
            </div>
        </div>
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
