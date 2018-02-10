<style scoped>
.page-menu {
  position: relative;
  height: 50px;
}

.page-menu img.logo {
  position: absolute;
  left: 0;
  top: 10px;
  height: 30px;
}

.page-menu .pageMenuItem {
  position: absolute;
  display: inline-block;
  margin-right: 3rem;
  top: 15px;
  font-size: 1.5rem;
}

.page-menu .pageMenuItem a {
  color: #FFF;
  font-weight: 500;
}

.page-menu .pageMenuItem .selected {
  font-weight: bold;
}

.page-menu .user {
  position: absolute;
  right: 15px;
  top: 15px;
  text-align: right;
}
</style>

<template>
<div class="page-menu">
  <img class="logo" :src="logoUrl" />
  <div v-for="(item,index) in pageMenu" :key="index" class="pageMenuItem" :class="{ [item.name.toLowerCase() + '-page']: true }" :style="getPageMenuStyle(index)">
    <router-link :to="item.href" :class="{ selected: item.selected }">{{ item.name }}</router-link>
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
    }
  }
};
</script>
