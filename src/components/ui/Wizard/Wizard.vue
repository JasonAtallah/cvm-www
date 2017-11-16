

<template>
<div class="wizard">
  <div class="pages">
    <slot name="page1" v-if="showPage(1)"></slot>
    <slot name="page2" v-if="showPage(2)"></slot>
    <slot name="page3" v-if="showPage(3)"></slot>
    <slot name="page4" v-if="showPage(4)"></slot>
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
      maxPage: 4,
      curPage: 1
    };
  },
  props: ['pageNums'],
  computed: {
    isBackDisabled() {
      return this.curPage === 1;
    },
    isNextDisabled() {
      return this.curPage === this.maxPage || !_.some(this.pageNums, (pageNum) => {
        return pageNum > this.curPage;
      });
    }
  },
  methods: {
    showPage(pageNum) {
      return this.curPage === pageNum;
    },
    goBack() {
      while (this.curPage > 1) {
        this.curPage -= 1;
        if (this.pageNums.indexOf(this.curPage) >= 0) {
          break;
        }
      }
    },
    goNext() {
      while (this.curPage < this.maxPage) {
        this.curPage += 1;
        if (this.pageNums.indexOf(this.curPage) >= 0) {
          break;
        }
      }
    }
  }
};
</script>
