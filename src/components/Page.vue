<template>
  <div class="page">
    <page-menu :pageName="pageName" />
    <page-header :pageName="pageName" />
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import PageMenu from '@/components/PageMenu';
import PageHeader from '@/components/PageHeader';

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

<style scoped>
.content {
  position: absolute;
  top: 120px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #efefef;
  border-top: 1px solid #ddd;
}
</style>
