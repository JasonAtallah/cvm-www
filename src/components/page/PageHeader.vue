<style lang="scss" scoped>
.page-header {
  position: relative;
  text-align: left;
  padding: 1rem 0;
  height: $header-height;
}

.page-header .left, .page-header .right {
  margin: 1rem 0 1rem 0;
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
  margin-top: 1rem;
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
