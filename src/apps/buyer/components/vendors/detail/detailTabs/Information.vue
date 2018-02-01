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
</style>

<template>
  <div class="information-content">
    <div class="card card-body bg-light">
      <div class="row">
        <div class="col-sm-6">
          <ElCard class="box-card">
            <div slot="header"><h3>Company</h3></div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-building" />
              </div>
              <div class="col-sm-10">
                <h4>{{ vendor.company.name}}</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-map-marker" />
              </div>
              <div class="col-sm-10">
                <h5 class="field-display">{{ vendor.company.address}} {{ vendor.company.city }}, {{ vendor.company.state }} {{ vendor.company.zip }}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-window-maximize" />
              </div>
              <div class="col-sm-10">
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
          </ElCard>
        </div>
        <div class="col-sm-6">
          <ElCard class="box-card">
            <div slot="header"><h3>Contact</h3></div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-user" />
              </div>
              <div class="col-sm-10">
                <h4 class="field-display">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-phone" />
              </div>
              <div class="col-sm-10">
                <h5 class="field-display">{{ vendor.contact.phone }}</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-1">
                <i class="fa fa-envelope" />
              </div>
              <div class="col-sm-10">
                <h5 class="field-display">{{ vendor.contact.email }}</h5>
              </div>
            </div>
          </ElCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  Card as ElCard } from 'element-ui';

export default {
  components: {
    ElCard
  },
  props: ['vendor']
};
</script>
