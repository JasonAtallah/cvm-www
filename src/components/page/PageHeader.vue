<style lang="scss" scoped>
.page-header {
  position: relative;
  text-align: left;
  height: $header-height;
}

.page-header .left {
  position: absolute;
  width: 45%;
  text-align: left;
}

.page-header .right {
  position: absolute;
  right: 0;
  width: 45%;
  text-align: right;
}

.page-header h1 {
  font-size: 1.5rem;
  margin: 1rem 0;
}
</style>

<template>
  <div class="page-header">
    <div class="left">
      <h1>{{ pageName }}</h1>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true
    }
  }
};
</script>
