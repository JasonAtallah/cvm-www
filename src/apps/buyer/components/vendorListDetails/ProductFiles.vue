<style scoped>

.product-files {
  margin-left: 1rem;
  width: 100%;
  border: none;
}

</style>

<template>
  <tr v-if="activeRow === item.name">
    <td colspan="100">
      <div class="card product-files">
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
            <ul class="list-unstyled" v-for="file in item.photo" :key="file.id">
              <li><i class="fa fa-photo"></i> {{ file.originalname.split('.')[0] }}</li>
            </ul>
          </div>                
          <div class="col-md-6">
            <ul class="list-unstyled" v-for="file in item.testResults" :key="file.id">
              <li><i class="fa" :class="getFileType(file.mimetype)"></i> {{ file.originalname.split('.')[0] }}</li>
            </ul>
          </div>                
        </div>              
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['item'],
  computed: {
    ...mapGetters({
      activeRow: 'productDetailsRow'
    })
  },
  methods: {
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