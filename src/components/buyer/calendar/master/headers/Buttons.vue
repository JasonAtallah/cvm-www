

<template>
  <ElButtonGroup>
    <ElButton type="primary" icon="el-icon-plus" @click="addEvent">Add Event</ElButton>
  </ElButtonGroup>
</template>

<script>
import {
  Button as ElButton,
  ButtonGroup as ElButtonGroup } from 'element-ui';

export default {
  components: {
    ElButton,
    ElButtonGroup
  },
  methods: {
    addEvent() {
      this.$store.commit('overrideDetail', {
        type: 'addCalendarEvent'
      });
    }
  }
};
</script>
