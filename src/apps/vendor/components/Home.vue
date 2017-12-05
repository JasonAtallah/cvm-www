<style>

</style>

<template>
<BasePage pageName="">
  <div slot="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          Welcome {{ vendor.contact.firstName }}
        </div>
      </div>
    </div>
  </div>
</BasePage>
</template>

<script>
import { mapGetters } from 'vuex';
import BasePage from './BasePage';

export default {
  components: {
    BasePage
  },
  computed: {
    ...mapGetters({
      vendor: 'vendor'
    })
  }
};
</script>
