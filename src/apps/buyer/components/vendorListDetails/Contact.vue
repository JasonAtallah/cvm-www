<style scoped>

.card-header {
  background-color: transparent;
}

.primary {
  font-weight: bold;
  color: #777777
}

.secondary {
  color: #a8a8a8;
}

</style>

<template>
  <div id="contactContent">
    <table class="table">
      <tbody>
        <th>
          <h2 class="primary">{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</h2>
        </th>
      </tbody>
        <tr>
        <span class="primary">Phone: </span>
           <span class="secondary">{{ vendor.contact.phone }}</span>
        </tr>
        <tr>
          <span class="primary">Email: </span>
          <span class="secondary">{{ vendor.contact.email }}</span>
        </tr>
        
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['vendor']
};
</script>