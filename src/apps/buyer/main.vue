<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
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

    <SetCalendarModal />
    <SendVendorStatusEmailModal />
    <AddVendorModal />
  </div>
</template>

<script>
import AddVendorModal from './components/AddVendorModal';
import SendVendorStatusEmailModal from './components/SendVendorStatusEmailModal';
import SetCalendarModal from './components/SetCalendarModal';

export default {
  name: 'app',
  components: {
    AddVendorModal,
    SendVendorStatusEmailModal,
    SetCalendarModal
  },
  beforeMount() {
    this.$store.dispatch('init');
  }
};
</script>
