<template>
  <div id="companyContent">
    <div class="card-header"><h4>{{ vendor.company.name }}</h4></div>
    <div class="card-block p-0">      
      <table class="table borderless table-sm m-0">
        <tbody>
          <tr>
            <td>Website</td>
            <td>{{ vendor.company.website }}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{{ vendor.company.address }}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{ vendor.company.city }}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{{ vendor.company.state }}</td>
          </tr>
          <tr>
            <td>Zip</td>
            <td>{{ vendor.company.zip }}</td>
          </tr>
          <tr>
            <td>SREA#</td>
            <td>{{ vendor.company.srea }}</td>
          </tr>
          <tr>
            <td>Tax ID</td>
            <td>{{ vendor.company.haveTaxId }}</td>
          </tr>
          <tr>
            <td>Seller Permit</td>
            <td>{{ vendor.company.haveSellerPermit }}</td>
          </tr>
          <tr>
            <td>Part of Collective</td>
            <td>{{ vendor.company.partOfCollective }}</td>
          </tr>          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    })
  }
};
</script>