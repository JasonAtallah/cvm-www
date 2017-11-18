

<template>
<div class="wizard">
  <div class="pages">
    <slot name="page1" v-if="showPage(1)"></slot>
    <slot name="page2" v-if="showPage(2)"></slot>
    <slot name="page3" v-if="showPage(3)"></slot>
    <slot name="page4" v-if="showPage(4)"></slot>
    <slot name="page5" v-if="showPage(5)"></slot>
  </div>
  <div class="wizard">
    <button class="back" @click="goBack" v-bind:disabled="isBackDisabled">Back</button>
    <button class="next" @click="goNext" v-bind:disabled="isNextDisabled">Next</button>
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
    maxPage() {
      let curPage = 1;
      while (this.$slots[`page${curPage}`] !== undefined) {
        curPage++;
      }
      return curPage;
    },
    isBackDisabled() {
      if (this.curPage === 1) return true;
      return !_.some(this.enabledPages.slice(0, this.curPage - 1), pageEnabled => pageEnabled);
    },
    isNextDisabled() {
      if (this.curPage === this.maxPage) return true;
      return !_.some(this.enabledPages.slice(this.curPage), pageEnabled => pageEnabled);
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
      let curPage = this.curPage;
      while (curPage > 1) {
        curPage -= 1;
        if (this.isPageEnabled(curPage)) {
          this.curPage = curPage;
          break;
        }
      }
    },
    goNext() {
      let curPage = this.curPage;
      while (curPage < this.maxPage) {
        curPage += 1;
        if (this.isPageEnabled(curPage)) {
          this.curPage = curPage;
          break;
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
