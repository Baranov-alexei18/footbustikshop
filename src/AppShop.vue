<template>
  <div class="app">
    <HeaderApp></HeaderApp>
    <router-view class="view" />
    <FooterApp></FooterApp>
  </div>
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
.app{
  display: flex;
  flex-direction: column;
}

.view {
  flex-grow: 1;
  height: 60vh;
  background: conic-gradient(
    at 0% 50%,
    yellow 15%,
    rgb(111, 255, 0) 20%,
    #1e90ff 32%
  );
}

</style>
  