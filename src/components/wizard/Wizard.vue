
<style scoped>
.buttons {
  text-align: right;
}
</style>

<template>
<div class="wizard">
  <div class="pages">
    <slot name="page1" v-if="showPage(1)"></slot>
    <slot name="page2" v-if="showPage(2)"></slot>
    <slot name="page3" v-if="showPage(3)"></slot>
    <slot name="page4" v-if="showPage(4)"></slot>
    <slot name="page5" v-if="showPage(5)"></slot>
    <slot name="page6" v-if="showPage(6)"></slot>
  </div>
  <div class="buttons text-center">
    <button class="back btn btn-light" @click="goBack" v-bind:disabled="isBackDisabled">Back</button>
    <button class="next btn btn-primary" @click="goNext" v-bind:disabled="isNextDisabled">{{ nextBtnLabel }}</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 1
    };
  },
  props: ['enabledPages'],
  computed: {
    isBackDisabled() {
      if (this.curPage === 1) return true;
      return !_.some(this.enabledPages.slice(0, this.curPage - 1), pageEnabled => pageEnabled);
    },
    isNextDisabled() {
      if (this.curPage === this.maxPage) return false;
      return !_.some(this.enabledPages.slice(this.curPage), pageEnabled => pageEnabled);
    },
    maxPage() {
      return parseInt(Object.keys(this.$slots).pop().replace('page', ''), 10);
    },
    nextBtnLabel() {
      if (this.curPage < this.maxPage) {
        return 'Next';
      }

      return 'Submit';
    }
  },
  methods: {
    isPageEnabled(pageNum) {
      return this.enabledPages[pageNum - 1] === true;
    },
    showPage(pageNum) {
      return this.curPage === pageNum && this.isPageEnabled(pageNum);
    },
    goBack() {
      let page = this.curPage;
      while (page > 1) {
        page -= 1;
        if (this.isPageEnabled(page)) {
          this.curPage = page;
          break;
        }
      }
    },
    goNext() {
      if (this.curPage === this.maxPage) {
        this.$emit('complete');
      } else {
        let page = this.curPage;
        while (page < this.maxPage) {
          page += 1;
          if (this.isPageEnabled(page)) {
            this.curPage = page;
            break;
          }
        }
      }
    },
    resetPage() {
      this.curPage = 0;
      this.goNext();
    }
  },
  watch: {
    enabledPages(val) {
      this.resetPage();
    }
  },
  mounted() {
    if (this.enabledPages) {
      this.resetPage();
    }
  }
};
</script>
