<style>

</style>

<template>
  <div id="concentratesContent">
    <div class="card-header">Concentrates</div>
    <div class="card-block p-0">      
      <table class="table borderless table-sm m-0">
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Units Available</th>
          <th>THC (mg)</th>
          <th>CBD (mg)</th>

          <th>Shelf Ready</th>
        </thead>
        <tbody v-for="item in vendor.concentrates.products">
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.unitsAvailable }}</td>              
            <td>{{ item.thc }}</td>      
            <td>{{ item.cbd }}</td>          
            <td>{{ item.shelfReady }}</td>
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