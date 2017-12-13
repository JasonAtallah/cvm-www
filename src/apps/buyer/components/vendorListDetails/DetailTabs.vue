<style scoped>

.profile-usermenu ul li a {
  color: #93a3b5;
  font-size: 20px;
  cursor: pointer;
}

.profile-usermenu ul li a:hover {
  background-color: #fafcfd;
  color: #5b9bd1;
  text-decoration: none;
}

.profile-usermenu ul li.active a {
  color: #5b9bd1;
  border-bottom: 2px solid #5b9bd1;
  padding-bottom: 1rem;
}

</style>

<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="profile-usermenu">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item" :class="{'active': activeTab === 'company'}">
            <a @click.prevent="activateTab('company')">Company</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'contact'}">
            <a @click.prevent="activateTab('contact')">Contact</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'flowers'}">
            <a @click.prevent="activateTab('flowers')">Flowers</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'edibles'}">
            <a @click.prevent="activateTab('edibles')">Edibles & Topicals</a>
          </li>
          <li class="list-inline-item" :class="{'active': activeTab === 'concentrates'}">
            <a @click.prevent="activateTab('concentrates')">Concentrates</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      activeTab: 'company',
    };
  },
  methods: {
    activateTab(detailTab) {
      this.activeTab = detailTab;
      this.$emit('changeTab', detailTab);
    }
  }
};
</script>
