<style scoped>
.company-content th {
  text-align: right;
  width: 150px;
}
</style>

<template>
  <div class="company-content">
    <table class="table">
      <tr>
        <th>Website: </th>
        <td><a :href="vendor.company.website" target="_blank">{{ vendor.company.website }}</a></td>
      </tr>
      <tr>
        <th>Address: </th>
        <td>{{ vendor.company.address }} {{ vendor.company.city }}, {{ vendor.company.state }}</td>
      </tr>
      <tr>
        <th>SREA#: </th>
        <td>{{ vendor.company.srea }}</td>
      </tr>
      <tr>
        <th>Tax ID: </th>
        <td>{{ vendor.company.haveTaxId }}</td>
      </tr>
      <tr>
        <th>Part of Collective: </th>
        <td>{{ vendor.company.partOfCollective }}</td>
      </tr>
      <tr>
        <th>Seller Permit: </th>
        <td>{{ vendor.company.haveSellerPermit }}</td>
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
