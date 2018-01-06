<style scoped>
.contact-content th {
  text-align: right;
}
</style>

<template>
  <div class="contact-content">
    <table class="table">
      <tr>
        <th>Name: </th>
        <td>{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</td>
      </tr>
      <tr>
        <th>Phone: </th>
        <td>{{ vendor.phone }}</td>
      </tr>
      <tr>
        <th>Email: </th>
        <td>{{ vendor.contact.email }}</td>
        </th>
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
