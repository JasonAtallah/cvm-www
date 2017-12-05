<style lang="scss" scoped>
.page {
  position: relative;
  height: 100%;
}

.page .menu {
  height: $menu-height;
  width: 100%;
  background-color: $header-footer-color;
}

.page .header {
  height: $header-height;
  width: 100%;
  text-align: left;
}

.page .header-buttons {
  width: 40%;
  display: inline-block;
  text-align: right;
}

.page .content {
  width: 100%;
  padding: 0 3rem;
  text-align: left;
}

.page .content .content-area {
  position: relative;
  width: 100%;
}

.page .footer {
  height: $footer-height;
  width: 100%;
  background-color: $header-footer-color;
}
</style>


<template>
<div class="page">

  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <PageMenu class="page-menu" :pageName="pageName" :menuItems="menuItems">
            <div slot="menu-right">
              <slot name="menu-right"></slot>
            </div>
          </PageMenu>
        </div>
      </div>
    </div>
  </div>

  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <PageHeader :pageName="pageName">
            <div slot="right">
              <slot name="header-buttons"></slot>
            </div>
          </PageHeader>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="content-area">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import PageMenu from './PageMenu';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

export default {
  components: {
    PageMenu,
    PageFooter,
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
