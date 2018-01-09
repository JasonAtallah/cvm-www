<style lang="scss" scoped>
.master-detail {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 450px 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "master  detail";
}

.master {
  grid-area: master;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.detail {
  grid-area: detail;
  overflow: scroll;
  padding: 1rem 2rem;
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
