<template>
  <div id="contactContent">
    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{{ vendor.contact.firstName }} {{ vendor.contact.lastName }}</td>
        </tr>
        <tr>
          <th scope="row">Phone</th>
          <td>{{ vendor.contact.phone }}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{{ vendor.contact.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    })
  }
};
</script>