<style scoped>
.page-menu {
  position: relative;
  height: 50px;
  background-color: #83DB93;
}

.page-menu img.logo {
  position: absolute;
  left: 0;
  top: 10px;
  margin-left: 2rem;
  height: 2rem;
}

.page-menu .pageMenuItem {
  position: absolute;
  display: inline-block;
  margin-right: 3rem;
  top: 15px;
}

.page-menu .pageMenuItem a {
  color: #FFF;
  font-weight: 500;
}

.page-menu .pageMenuItem .selected {
  font-weight: bold;
}
</style>

<template>
<div class="page-menu">
  <img class="logo" :src="logoUrl" />
  <div v-for="(item,index) in pageMenu" class="pageMenuItem" :style="getPageMenuStyle(index)">
    <router-link :to="item.href" :class="{ selected: item.selected }">{{ item.name }}</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-menu',
  data() {
    return {
      logoUrl: '/static/logo.png',
      pageItems: [
        {
          name: 'Vendors',
          href: '/'
        },
        {
          name: 'Calendar',
          href: '/calendar'
        },
        {
          name: 'Onboarding',
          href: '/onboarding'
        }
      ]
    };
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  computed: {
    pageMenu() {
      return this.pageItems.map((p) => {
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
