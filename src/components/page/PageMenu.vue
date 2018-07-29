<style lang="scss" scoped>
.page-menu {
  position: relative;
  height: 50px;
  padding: 10px;
}

.page-menu img.logo {
  display: inline-block;
  height: 30px;
  cursor: pointer;
}

.page-menu .page-menu-items {
  display: inline-block;
  margin: 2px 0 0 20px;
}

.page-menu .pageMenuItem {
  display: inline-block;
  margin: 0 20px;
  padding: 0 15px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: $header-footer-color;
  border-radius: 10px;
}

.page-menu .pageMenuItem:hover {
  background-color: #FFFFEE;
}

.page-menu .pageMenuItem.selected {
  background-color: #FFF;
}

.page-menu .pageMenuItem a {
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
}

.page-menu .pageMenuItem:hover a {
  color: #50A679;
}

.page-menu .pageMenuItem.selected a {
  color: #50A679;
}

.page-menu .user {
  position: absolute;
  right: 15px;
  top: 15px;
  text-align: right;
  color: #FFF;
}
</style>

<template>
<div class="page-menu">
  <img @click="goHome()" class="logo" :src="logoUrl" />
  <div class="page-menu-items">
    <div v-for="(item,index) in pageMenu" :key="index"
      class="pageMenuItem"
      :class="{ [item.name.toLowerCase() + '-page']: true, selected: item.selected }"
      :style="getPageMenuStyle(index)">

      <router-link :to="item.href">{{ item.name }}</router-link>
    </div>
  </div>
  <div class="user">
    <slot name="menu-right"></slot>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      logoUrl: '/static/logo_white.png'
    };
  },
  props: {
    menuItems: {
      type: Array,
      required: false
    },
    pageName: {
      type: String,
      required: true
    }
  },
  computed: {
    pageMenu() {
      if (!this.menuItems || this.menuItems.length === 0) {
        return [];
      }

      return this.menuItems.map((p) => {
        const selected = this.pageName === p.name;
        return Object.assign({}, p, {
          selected
        });
      });
    }
  },
  methods: {
    getPageMenuStyle(index) {
      return {
        left: `${100 + (index * 110)}px`
      };
    },
    goHome() {
      this.$router.push('/vendors');
    }
  }
};
</script>
