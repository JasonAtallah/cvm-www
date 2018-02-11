<style scoped>
.information-content {
  font-size: 1.2rem;
}

.information-content label {
  display: block;
  text-align: right;
  font-weight: bold;
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
    <h3>Company</h3>

    <div class="row">
      <div class="col-sm-3">
        <label>Name</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.name}}
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <label>Address</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.address}} {{ vendor.company.city }}, {{ vendor.company.state }} {{ vendor.company.zip }}
      </div>
    </div>

    <div class="row" v-if="vendor.company.website">
      <div class="col-sm-3">
        <label>Website</label>
      </div>
      <div class="col-sm-9">
        <a :href="vendor.company.website" target="_blank">{{ vendor.company.website }}</a>
      </div>
    </div>

    <div class="row" v-if="vendor.company.srea">
      <div class="col-sm-3">
        <label>SREA #</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.srea }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <label>Tax ID</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.haveTaxId ? 'Yes' : 'No' }}
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <label>Part of Collective</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.partOfCollective ? 'Yes' : 'No' }}
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <label>Seller Permit</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.company.haveSellerPermit ? 'Yes' : 'No' }}
      </div>
    </div>
    <br>
    <h3>Contact</h3>

    <div class="row">
      <div class="col-sm-3">
        <label>Name</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.contact.firstName }} {{ vendor.contact.lastName }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <label>Phone</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.contact.phone }}
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <label>Email</label>
      </div>
      <div class="col-sm-9">
        {{ vendor.contact.email }}
      </div>
    </div>

  </div>
</template>

<script>
import {
  Card as ElCard } from 'element-ui';

export default {
  components: {
    ElCard
  },
  props: ['vendor']
};
</script>
