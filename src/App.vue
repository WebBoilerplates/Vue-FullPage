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
        routes: ["/", "/about", "/test", "/test2"],
        transtionTime: 1000,
        BasicPath: "/Vue-FullPage"
      }
    };
  },
  components: {
    Fullpage
  }
});
</script>
<style lang="scss">
html {
  overflow: hidden;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow-y: hidden;
}
</style>
