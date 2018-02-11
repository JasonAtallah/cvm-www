<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: 12px;
  overflow: hidden;
}

#app {
  font: 100% $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <router-view/>
    <AddLocation />
    <ConfirmCancelMeeting />
    <SetSchedule />
  </div>
</template>

<script>
import AddLocation from '@/components/buyer/vendors/modals/AddLocation';
import ConfirmCancelMeeting from '@/components/buyer/vendors/modals/ConfirmCancelMeeting';
import SetSchedule from '@/components/buyer/calendar/modals/SetSchedule';

export default {
  name: 'app',
  components: {
    AddLocation,
    ConfirmCancelMeeting,
    SetSchedule
  }
};
</script>
