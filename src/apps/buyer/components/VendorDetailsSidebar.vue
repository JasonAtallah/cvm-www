<style>
  .profile-sidebar {
    padding: 20px 0 10px 0;
    background: #fff;
  }

  .profile-userpic img {
    float: none;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    border-radius: 50% !important;
  }

  img {
    display: block;
    margin: auto;
    width: 40%;
  }

  .profile-usertitle {
    text-align: center;
    margin-top: 20px;
  }

  .profile-usertitle-name {
    color: #5a7391;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 7px;
  }

  .profile-usertitle-contact-info {
    text-transform: uppercase;
    color: #5b9bd1;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .profile-userbuttons {
    text-align: center;
    margin-top: 10px;
  }

  .profile-userbuttons .btn {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 15px;
    margin-right: 5px;
  }

  .profile-userbuttons .btn:last-child {
    margin-right: 0px;
  }

  .profile-usermenu {
    margin-top: 30px;
    text-align: center;
  }

  .profile-usermenu ul li {
    border-bottom: 1px solid #f0f4f7;
  }

  .profile-usermenu ul li:last-child {
    border-bottom: none;
  }

  .profile-usermenu ul li a {
    color: #93a3b5;
    font-size: 14px;
    font-weight: 400;
  }

  .profile-usermenu ul li a i {
    margin-right: 8px;
    font-size: 14px;
  }

  .profile-usermenu ul li a:hover {
    background-color: #fafcfd;
    color: #5b9bd1;
  }

  .profile-usermenu ul li.active {
    border-bottom: none;
  }

  .profile-usermenu ul li.active a {
    color: #5b9bd1;
    background-color: #f6f9fb;
    border-left: 2px solid #5b9bd1;
    margin-left: -2px;
  }
</style>

<template>
  <div class="col-md-3">
    <div class="profile-sidebar">
     
      <div class="profile-userpic">
        <img id="profile-logo" src="https://cdn.allbud.com/image/upload/s--Gsagk9Ld--/c_limit,h_600,w_800/v1433196075/images/dispensary/main-street-marijuana/970/main-st-marijuana-allbud.jpg"
          alt="Vendor Logo">
      </div>
     
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">
          {{ vendor.contact.firstName }} {{ vendor.contact.lastName }}
        </div>
        <div class="profile-usertitle-contact-info">{{ vendor.contact.email }}</div>
        <div class="profile-usertitle-contact-info">{{ vendor.contact.phone }}</div>
      </div>
     
      <div class="profile-userbuttons">
        <a href="#" class="btn btn-info" role="button">Website</a>
      </div>
     
      <div class="profile-usermenu">
        <ul class="list-unstyled">
          <li :class="{'active': isActive === 'company'}">
            <a @click.prevent="activateVendorDetailsTab('company')">Company</a>
          </li>
          <li :class="{'active': isActive === 'flowers'}">
            <a @click.prevent="activateVendorDetailsTab('flowers')">Flowers</a>
          </li>
          <li :class="{'active': isActive === 'edibles'}">
            <a @click.prevent="activateVendorDetailsTab('edibles')">Edibles & Topicals</a>
          </li>
          <li :class="{'active': isActive === 'concentrates'}">
            <a @click.prevent="activateVendorDetailsTab('concentrates')">Concentrates</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      vendor: 'selVendor'
    })
  },
  data() {
    return {
      isActive: 'company'
    };
  },
  methods: {
    activateVendorDetailsTab(detailTab) {
      this.activateTab(detailTab);
      this.$store.commit('setVendorDetailsTab', detailTab);
    },
    activateTab(detailTab) {
      this.isActive = detailTab;
    }
  }
};
</script>
