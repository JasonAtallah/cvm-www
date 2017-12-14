<style scoped>
.card-header {
  background-color: transparent;
}

.primary {
  font-weight: bold;
  color: #777777
}

.secondary {
  color: #a8a8a8;
}
</style>

<template>
  <div id="companyContent">
    <table class="table">
      <tbody>
        <th>
          <h2 class="primary">{{ vendor.company.name }}</h2>
        </th>
      </tbody>
        <tr>
        <span class="primary">Website: </span>
           <span class="secondary">{{ vendor.company.website }}</span>
        </tr>
        <tr>
          <span class="primary">Address: </span>
          <span class="secondary">{{ vendor.company.address }} {{ vendor.company.city }}, {{ vendor.company.state }}</span>
        </tr>
        <tr>
          <span class="primary">SREA#: </span>
          <span class="secondary">{{ vendor.company.srea }}</span>
        </tr>
        <tr>
          <span class="primary">Tax ID: </span>
          <span class="secondary">{{ vendor.company.haveTaxId }}</span>
        </tr>
        <tr>
          <span class="primary">Part of Collective: </span>
          <span class="secondary">{{ vendor.company.partOfCollective }}</span>
        </tr>
        <tr>
          <span class="primary">Seller Permit: </span>
          <span class="secondary">{{ vendor.company.haveSellerPermit }}</span>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['vendor']
};
</script>
