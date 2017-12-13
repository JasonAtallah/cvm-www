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
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <router-view/>

    <AddCalendarEventModal />
    <AddVendorModal />
    <SendVendorStatusEmailModal />
    <SetCalendarModal />
    <SetScheduleModal />
    <ViewCalendarEventModal />
  </div>
</template>

<script>
import AddCalendarEventModal from './components/AddCalendarEventModal';
import AddVendorModal from './components/AddVendorModal';
import SendVendorStatusEmailModal from './components/SendVendorStatusEmailModal';
import SetCalendarModal from './components/SetCalendarModal';
import SetScheduleModal from './components/SetScheduleModal';
import ViewCalendarEventModal from './components/ViewCalendarEventModal';

export default {
  name: 'app',
  components: {
    AddCalendarEventModal,
    AddVendorModal,
    SendVendorStatusEmailModal,
    SetCalendarModal,
    SetScheduleModal,
    ViewCalendarEventModal
  },
  beforeMount() {
    this.$store.dispatch('init');
  }
};
</script>
