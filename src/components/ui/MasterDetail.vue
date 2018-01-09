<style lang="scss" scoped>
.master-detail {
  width: 100%;
  height: 100%;
}

.master {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 30%;
  min-width: 275px;
  max-width: 450px;
  overflow: hidden;
}

.detail {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70%;
  overflow: scroll;
  padding: 1.5rem 3rem;
}
</style>

<template>
<div class="master-detail">
  <div class="master">
    <slot name="master"></slot>
  </div>
  <div class="detail">
    <slot name="detail"></slot>
  </div>
</div>
</template>

<script>
export default {

};
</script>
