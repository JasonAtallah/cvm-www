<style scoped>
.vendor-list-detail {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFF;
  text-align: left;
  padding: 1rem;
  border-top: 1px solid #CCC;
}

.vendor-list-detail .detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>


<template>
<div class="vendor-list-detail" :style="{height: panelHeight}">
  <div class="vendor-name">{{ vendor.name }}</div>
  <div class="detail-close">
    <button type="button" class="btn btn-default" @click="closeDetail">X</button>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'vendor-list-detail',
  data() {
    return {
      panelHeight: '30%'
    };
  },
  computed: {
    ...mapGetters({
      vendor: 'buyer/selVendor'
    })
  },
  methods: {
    closeDetail() {
      this.$store.commit('buyer/setSelVendor', null);
    }
  },
  components: {

  },
  watch: {
    vendor(newVal, oldVal) {
      if (!newVal) {
        this.panelHeight = 0;
      } else {
        this.panelHeight = '30%';
      }
    }
  }
};
</script>
