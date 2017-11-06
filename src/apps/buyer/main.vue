<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font: 100% $font-stack;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <router-view/>

    <SetCalendar />
  </div>
</template>

<script>
import SetCalendar from './components/SetCalendar';

export default {
  name: 'app',
  components: {
    SetCalendar
  },
  beforeMount() {
    this.$store.dispatch('init');
  }
};
</script>
