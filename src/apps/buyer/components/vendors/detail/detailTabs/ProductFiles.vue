<style scoped>

.product-files {
  padding-left: 1rem;
  width: 100%;
  border: none;
}

</style>

<template>
  <div class="product-files">
    <div class="row">
      <div class="col-sm-1">
        <b>Files</b>
      </div>
      <div class="col-sm-3">
        <h6>Photos</h6>
        <ul class="list-unstyled">
          <li v-if="product.photos.length === 0">No photos were included!</li>
          <li v-for="file in product.photos" :key="file.id">
            <a :href="getFileUrl(file)" target="_blank"><i class="fa" :class="getFileType(file.mimetype)"></i> {{ file.originalname }}</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-3">
        <h6>Test Results</h6>
        <ul class="list-unstyled">
          <li v-if="product.testResults.length === 0">No test results were included!</li>
          <li v-for="file in product.testResults" :key="file.id">
            <a :href="getFileUrl(file)" target="_blank"><i class="fa" :class="getFileType(file.mimetype)"></i> {{ file.originalname }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vendor', 'product'],
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
    },
    getFileUrl(file) {
      return `/buyer/v1/vendors/${this.vendor._id}/files/${file.id}`;
    }
  }
};
</script>
