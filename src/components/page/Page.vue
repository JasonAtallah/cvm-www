<style scoped>
.page {
  position: relative;
}

.page .content, .page .header {
  position: relative;
  padding: 0 3rem;
}

.header {
  text-align: left;
}

.page-header {
  width: 50%;
  display: inline-block;
  text-align: left;
}

.header-buttons {
  width: 40%;
  display: inline-block;
  text-align: right;
}

</style>


<template>
<div class="page">
  <div class="menu">
    <PageMenu class="page-menu" :pageName="pageName" :menuItems="menuItems">
      <div slot="menu-right">
        <slot name="menu-right"></slot>
      </div>
    </PageMenu>
  </div>
  <div class="header">
    <page-header :pageName="pageName" />
    <div class="header-buttons">
      <slot name="header-buttons"></slot>
    </div>
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
  props: {
    menuItems: {
      type: Array,
      required: false
    },
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
