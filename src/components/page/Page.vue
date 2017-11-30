<style lang="scss" scoped>
.page {
  position: relative;
  height: 100%;
  width: 100%;
}

.page .content, .page .header {
  position: relative;
  padding: 0 3rem;
}

.page .header {
  width: 100%;
  display: inline-block;
  text-align: left;
}

.page .header-buttons {
  width: 40%;
  display: inline-block;
  text-align: right;
}

.page .content {
  text-align: left;
  position: absolute;
  top: #{$menu-height + $header-height};
  bottom: $footer-height;
  left: 0;
  right: 0;
}

.page .content-area {
  height: 100%;
  overflow: scroll;
}

.page .footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0
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
    <PageHeader :pageName="pageName">
      <div slot="right">
        <slot name="header-buttons"></slot>
      </div>
    </PageHeader>
  </div>
  <div class="content">
    <div class="content-area">
      <slot name="content"></slot>
    </div>
  </div>
  <div class="footer">
    <PageFooter />
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
