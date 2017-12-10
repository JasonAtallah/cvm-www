<template>
  <div id="ediblesContent">
    <div class="card-block p-0">      
      <table class="table borderless table-md m-0">
        <thead>
          <th>Name</th>
          <th>Units Available</th>
          <th>THC (mg)</th>
          <th>CBD (mg)</th>

          <th>Shelf Ready</th>
        </thead>
        <tbody v-for="item in vendor.edibles.products">
          <tr>
            <td>{{ item.name }}</td>
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