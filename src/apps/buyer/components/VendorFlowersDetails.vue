<style scoped>

.square {
    float:left;
    position: relative;
    width: 30%;
    padding-bottom : 30%;
    margin:1.66%;
    background-color:#FFFFFF;
    overflow:hidden;
}

.content {
    position:absolute;
    height:90%;
    width:90%;
    padding: 2%;
    
}
.table{
    display:table;
    width:100%;
    height:100%;
}
.table-cell{
    display:table-cell;
}

ul{
    text-align:left;
    margin:5% 0 0;
    padding:0;
    list-style-position:inside;
}
li{
    margin: 0 0 0 5%;
    padding:0;
}

.content .rs{
    width:auto;
    height:auto;
    max-height:90%;
    max-width:100%;
}

</style>

<template>
  <div id="flowersContent">
    <div class="card-block p-0">
      <table class="table borderless table-md m-0">
        <thead>
          <th>Strain Name</th>
          <th>Weight Available</th>
          <th>THC (mg)</th>
          <th>CBD (mg)</th>
          <th>Grow Style</th>
          <th>Bud Size</th>
          <th>Shelf Ready</th>
        </thead>
        <tbody v-for="item in vendor.flowers.products">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    })
  },
  data() {
    return {
      show: true
    };
  }
};
</script>