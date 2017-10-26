<template>
<div class="page">
  <page :pageName="name">
    <div slot="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <div id="calendar" class="monthly"></div>
          </div>
        </div>

        <div class="row" v-for="event in events" :key="event.id">
          {{ event.title }}
        </div>
      </div>
    </div>
  </page>
</div>
</template>

<script>
import Page from '@/components/Page';
import { mapGetters } from 'vuex';

export default {
  name: 'Calendar',
  data() {
    return {
      name: 'Calendar'
    };
  },
  components: {
    Page
  },
  computed: {
    ...mapGetters('buyer', {
      events: 'events'
    })
  },
  watch: {
    events: () => {

    }
  },
  beforeMount() {
    this.$store.dispatch('buyer/loadEvents');
  },
  // eslint-disable-next-line
  mounted: function() {
    $('#mycalendar').monthly({
      mode: 'event',
      dataType: 'json'
    });
  }
};
</script>

<style scoped>

</style>
