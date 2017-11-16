

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
      maxPage: 5,
      curPage: 1
    };
  },
  props: ['enabledPages'],
  computed: {
    isBackDisabled() {
      return this.curPage === 1;
    },
    isNextDisabled() {
      if (this.curPage === this.maxPage) return true;
      return !_.some(this.enabledPages.slice(this.curPage), pageEnabled => pageEnabled);
    }
  },
  methods: {
    showPage(pageNum) {
      return this.curPage === pageNum;
    },
    goBack() {
      while (this.curPage > 1) {
        this.curPage -= 1;
        if (this.enabledPages[this.curPage - 1] === true) {
          break;
        }
      }
    },
    goNext() {
      while (this.curPage < this.maxPage) {
        this.curPage += 1;
        if (this.enabledPages[this.curPage - 1] === true) {
          break;
        }
      }
    }
  }
};
</script>
