<style lang="scss" scoped>
.page-footer {
  position: relative;
  height: $footer-height;
  background-color: $header-footer-color;
  padding-top: 1rem;
}

.page-footer span, .page-footer a {
  color: #FFF;
  font-size: smaller;
  font-weight: bold;
}

.page-footer a {
  text-decoration: underline;
}
</style>

<template>
<div class="page-footer">
  <span>© {{ year }} Cannabis Cloud Apps | </span>
  <a href="/static/html/privacyPolicy.html" target="_blank">Privacy Policy</a>
</div>
</template>

<script>
export default {
  computed: {
    year() {
      return (new Date()).getFullYear();
    }
  }
};
</script>
