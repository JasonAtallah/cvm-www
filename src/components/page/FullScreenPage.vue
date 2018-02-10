<style lang="scss" scoped>
.page {
  position: relative;
  height: 100%;
}

.page .menu {
  height: $menu-height;
  width: 100%;
  background-color: $header-footer-color;
  padding: 0 2rem;
}

.page .header {
  display: none;
  height: $header-height;
  width: 100%;
  padding: 0 2rem;
  border-bottom: 1px solid $section-border-color;
}

.page .content {
  position: absolute;
  top: #{$menu-height};// + $header-height
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  text-align: left;
}

.page .content > div {
  position: relative;
  width: 100%;
  height: 100%;
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
    <PageHeader :pageName="pageName"></PageHeader>
  </div>

  <div class="content">
    <slot name="content" class="container-fluid"></slot>
  </div>

</div>
</template>

<script>
import PageMenu from './PageMenu';
import PageHeader from './PageHeader';

export default {
  components: {
    PageMenu,
    PageHeader
  },
  props: {
    menuItems: {
      type: Array,
      required: false
    },
    pageName: {
      type: String,
      required: true
    }
  }
};
</script>
