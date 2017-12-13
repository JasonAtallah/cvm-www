<template>
  <div id="companyContent">
    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">Website</th>
          <td>{{ vendor.company.website }}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{{ vendor.company.address }}</td>
        </tr>
        <tr>
          <th scope="row">City</th>
          <td>{{ vendor.company.city }}</td>
        </tr>
        <tr>
          <th scope="row">State</th>
          <td>{{ vendor.company.state }}</td>
        </tr>
        <tr>
          <th scope="row">Zip</th>
          <td>{{ vendor.company.zip }}</td>
        </tr>
        <tr>
          <th scope="row">SREA#</th>
          <td>{{ vendor.company.srea }}</td>
        </tr>
        <tr>
          <th scope="row">Tax ID</th>
          <td>{{ vendor.company.haveTaxId }}</td>
        </tr>
        <tr>
          <th scope="row">Seller Permit</th>
          <td>{{ vendor.company.haveSellerPermit }}</td>
        </tr>
        <tr>
          <th scope="row">Part of Collective</th>
          <td>{{ vendor.company.partOfCollective }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['vendor']
};
</script>