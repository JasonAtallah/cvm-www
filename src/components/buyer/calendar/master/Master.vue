<style lang="scss" scoped>
.calendar-page-master {
  width: 100%;
  height: 100%;
  display: grid;
  background-color: $vendor-list-master-background-color;
  grid-template-columns: 100%;
  grid-template-rows: 320px 50px calc(100% - 50px);
  grid-template-areas:
    "master1"
    "master2"
    "master3";
}

.calendar-page-master1 {
  grid-area: master1;
  overflow: hidden;
  padding: 10px;
  border-top: 1px solid $section-border-color;
}

.calendar-page-master2 {
  grid-area: master2;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
}

.calendar-page-master3 {
  grid-area: master3;
  overflow: hidden;
  border-top: 1px solid $section-border-color;
  background-color: $vendor-list-background-color;
  background-image: $vendor-list-background-image;
}
</style>

<template>
  <div class="calendar-page-master">
    <div class="calendar-page-master1">
      <Master1 />
    </div>
    <div class="calendar-page-master2">
      <Master2 />
    </div>
    <div class="calendar-page-master3">

    </div>
  </div>
</template>

<script>
import Master1 from './headers/MonthChooser';
import Master2 from './headers/Buttons';

export default {
  components: {
    Master1,
    Master2
  }
};
</script>
