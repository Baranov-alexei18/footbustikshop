<template>
  <HeaderApp></HeaderApp>
  <router-view />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
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
</style>
  