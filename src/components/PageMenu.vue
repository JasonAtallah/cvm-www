<template>
  <div class="page-menu">
    <img class="logo" :src="logoUrl" />
    <div v-for="(item,index) in pageMenu" class="pageMenuItem">
      <a v-bind:class="{ selected: item.selected }" v-bind:href="item.href">{{ item.name }}</a>
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
          href: '/#/'
        },
        {
          name: 'Calendar',
          href: '/#/calendar'
        },
        {
          name: 'Onboarding',
          href: '/#/onboarding'
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
        return Object.assign({}, p, { selected });
      });
    }
  }
};
</script>

<style scoped>
img.logo {
  max-height: 3rem;
}

.pageMenuItem {
  display: inline-block;
  margin-right: 3rem;
}

.pageMenuItem .selected {
  font-weight: bold;
}
</style>
