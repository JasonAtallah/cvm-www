<style>

.table-header {
  color: #a8a8a8;
  background-color: #f9fafc;
}

.product-name {
  font-weight: bold;
  color: #777777
}

.product-info {
  color: #a8a8a8;
}

.product-additional-info {
  margin-left: 1rem;
  width: 100%;
  border: none;
}

</style>

<template>
  <div id="flowersContent">
    <table class="table table-hover">
      <thead class="table-header">
        <th>Strain Name</th>
        <th>Weight Available</th>
        <th>THC (mg)</th>
        <th>CBD (mg)</th>
        <th>Grow Style</th>
        <th>Bud Size</th>
        <th>Shelf Ready</th>        
      </thead>
      <tbody v-for="item in vendor.flowers.products" :key="item.name">
        <tr @click.prevent="showProductDetail(item.name)" class="aa">
          <td class="product-name">{{ item.name }}</td>
          <td class="product-info">{{ item.weightAvailable }}</td>
          <td class="product-info">{{ item.thc }}</td>
          <td class="product-info">{{ item.cbd }}</td>
          <td class="product-info">{{ item.growStyle }}</td>
          <td class="product-info">{{ item.budSize }}</td>
          <td class="product-info">{{ item.shelfReady }}</td>
        </tr>
        <tr v-if="activeRow === item.name">
          <td colspan="7">
            <div class="card product-additional-info">
              <div class="row">
                <div class="col-md-6">
                  <h6>Photos</h6>
                  <span v-if="item.photo.length === 0">No photos were included!</span>                          
                </div>
                <div class="col-md-6">
                  <h6>Test Results</h6>
                  <span v-if="item.testResults.length === 0">No test results were included!</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled" v-for="file in item.photo">
                    <li><i class="fa fa-photo"></i> {{ file.originalname.split('.')[0] }}</li>
                  </ul>
                </div>                
                <div class="col-md-6">
                  <ul class="list-unstyled" v-for="file in item.testResults">
                    <li><i class="fa" :class="getFileType(file.mimetype)"></i> {{ file.originalname.split('.')[0] }}</li>
                  </ul>
                </div>                
              </div>              
            </div>
          </td>
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
      vendor: 'selVendor',
      activeRow: 'productDetailsRow'
    })
  },
  methods: {
    showProductDetail(productName) {
      this.$store.commit('productDetailsRow', productName);
    },
    getFileType(file) {
      const fileTypes = {
        'image/png': 'fa-photo',
        'image/jpeg': 'fa-photo',
        'application/pdf': 'fa-file-pdf-o',
        'application/msword': 'fa fa-file-word-o'
      };
      if (fileTypes[file]) {
        return fileTypes[file];
      }
      return 'fa-file-o';
    }
  }
};
</script>