<style lang="scss" scoped>
.vendor-list-master {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: $vendor-list-master-background-color;
  grid-template-columns: 100%;
  grid-template-rows: 80px 73px 40px calc(100% - 104px);
  grid-template-areas:
    "master1"
    "master2"
    "master3"
    "master4";
}

.vendor-list-master1 {
  grid-area: master1;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  grid-template-areas:
    "master1Dot1";
}

.vendor-list-master1-1 {
  grid-area: master1Dot1;
  padding: 10px;
}

.vendor-list-master1-2 {
  grid-area: master1Dot2;
  padding: 10px;
  border-left: 1px solid $section-border-color;
}

.vendor-list-master2 {
  grid-area: master2;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  grid-template-areas:
    "master2Dot1 master2Dot2";
}

.vendor-list-master2-1 {
  grid-area: master2Dot1;
  padding: 10px;
}

.vendor-list-master2-2 {
  grid-area: master2Dot2;
  padding: 10px;
  border-left: 1px solid $section-border-color;
}

.vendor-list-master3 {
  grid-area: master3;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
}

.vendor-list-master4 {
  grid-area: master4;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
}
</style>

<template>
  <div class="vendor-list-master">
    <div class="vendor-list-master1">
      <div class="vendor-list-master1-1">
        <Master1Dot1 />
      </div>
    </div>
    <div class="vendor-list-master2">
      <div class="vendor-list-master2-1">
        <Master2Dot1 />
      </div>
      <div class="vendor-list-master2-2">
        <Master2Dot2 />
      </div>
    </div>
    <div class="vendor-list-master3">
      <Master3 />
    </div>
    <div class="vendor-list-master4">
      <Master4 />
    </div>
  </div>
</template>

<script>
import Master1Dot1 from './headers/Search';
import Master2Dot1 from './headers/Sort';
import Master2Dot2 from './headers/Status';
import Master3 from './headers/Buttons';
import Master4 from './VendorList';

export default {
  components: {
    Master1Dot1,
    Master2Dot1,
    Master2Dot2,
    Master3,
    Master4
  }
};
</script>
