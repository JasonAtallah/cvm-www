<style scoped>
.page {
  position: relative;
}

.page .content, .page .header {
  position: relative;
  padding-left: 3rem;
}

</style>


<template>
<div class="page">
  <div class="menu">
    <page-menu class="page-menu" :pageName="pageName" />
  </div>
  <div class="header">
    <page-header :pageName="pageName" />
  </div>
  <div class="content">
    <slot name="content"></slot>
  </div>
</div>
</template>

<script>
import PageMenu from './PageMenu';
import PageHeader from './PageHeader';

export default {
  name: 'page',
  data() {
    return {

    };
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    PageMenu,
    PageHeader
  }
};
</script>
