<template>
  <HeaderApp></HeaderApp>
  <router-view class="view" />
  <FooterApp></FooterApp>
</template>
  
<script>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "AppShop",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style lang="scss">
.view {
  background: conic-gradient(
    at 0% 50%,
    yellow 15%,
    rgb(111, 255, 0) 20%,
    #1e90ff 32%
  );
}
</style>
  