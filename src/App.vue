<template>
  <div id="app">
    <Fullpage :Options="Options" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Fullpage from "./views/Fullpage.vue";
export default Vue.extend({
  name: "app",
  data() {
    return {
      Options: {
        routes: [
          "/Vue-FullPage/",
          "/Vue-FullPage/about",
          "/Vue-FullPage/test",
          "/Vue-FullPage/test2"
        ],
        transtionTime: 1000
      }
    };
  },
  components: {
    Fullpage
  }
});
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow-y: hidden;
}
</style>
