<style scoped>
@import url(http://fonts.googleapis.com/css?family=Lato:400,900);  /* <-- Just for the demo, Yes I like pretty fonts... */

.square {
    float:left;
    position: relative;
    width: 30%;
    padding-bottom : 30%; /* = width for a 1:1 aspect ratio */
    margin:1.66%;
    background-color:#FFFFFF;
    overflow:hidden;
}

.content {
    position:absolute;
    height:90%; /* = 100% - 2*5% padding */
    width:90%; /* = 100% - 2*5% padding */
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
/*  For list */
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
        <!-- <div class="card-header"><h4>Flowers</h4></div> -->
        <div class="card-block p-0">
          <table class="table borderless table-sm m-0">
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
      
    <!-- <div v-for="item in vendor.flowers.products">
      <div class="square">
        <div class="content">
          <div class="table">
            <div class="table-cell">
              <img class="rs" src="http://ireadculture.com/wp-content/uploads/2015/10/Paris-OG.jpg" /> {{ item.name }}
            </div>
          </div>
        </div>        
      </div>
      <div class="square">
        <div class="content">
          <div class="table">
            <div class="table-cell">
              <img class="rs" src="http://cdn.shopify.com/s/files/1/1061/0012/products/gdw_og_kush-Solo_Flower_grande.jpg?v=1479965303" /> {{ item.name }}
            </div>
          </div>
        </div>        
      </div>
      <div class="square">
        <div class="content">
          <div class="table">
            <div class="table-cell">
              <img class="rs" src="http://ireadculture.com/wp-content/uploads/2015/10/Paris-OG.jpg" /> {{ item.name }}
            </div>
          </div>
        </div>     
      </div>
    </div>         -->
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