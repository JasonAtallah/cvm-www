<template>
  <div id="flowersContent">
    <table class="table table-hover">
      <thead>
        <th>Strain Name</th>
        <th>Weight Available</th>
        <th>THC (mg)</th>
        <th>CBD (mg)</th>
        <th>Grow Style</th>
        <th>Bud Size</th>
        <th>Shelf Ready</th>
      </thead>
      <tbody v-for="item in vendor.flowers.products" :key="item.name">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.weightAvailable }}</td>
          <td>{{ item.thc }}</td>
          <td>{{ item.cbd }}</td>
          <td>{{ item.growStyle }}</td>
          <td>{{ item.budSize }}</td>
          <td>{{ item.shelfReady }}</td>
        </tr>
      </tbody>
    </table>
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