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

    <AddCalendarEvent />
    <AddLocation />
    <AddVendor />
    <ConfirmCancelMeeting />
    <SendVendorStatusEmail />
    <SetCalendar />
    <SetSchedule />
    <ViewCalendarEvent />
  </div>
</template>

<script>
import AddCalendarEvent from './components/modals/AddCalendarEvent';
import AddLocation from './components/modals/AddLocation';
import AddVendor from './components/modals/AddVendor';
import ConfirmCancelMeeting from './components/modals/ConfirmCancelMeeting';
import SendVendorStatusEmail from './components/modals/SendVendorStatusEmail';
import SetCalendar from './components/modals/SetCalendar';
import SetSchedule from './components/modals/SetSchedule';
import ViewCalendarEvent from './components/modals/ViewCalendarEvent';

export default {
  name: 'app',
  components: {
    AddCalendarEvent,
    AddLocation,
    AddVendor,
    ConfirmCancelMeeting,
    SendVendorStatusEmail,
    SetCalendar,
    SetSchedule,
    ViewCalendarEvent
  },
  beforeMount() {
    this.$store.dispatch('init');
  }
};
</script>
