<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "app",
  data() {
    return {};
  }
});
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
