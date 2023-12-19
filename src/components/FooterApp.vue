<template>
  <footer
    class="text-center text-lg-start bg-body-tertiary text-muted"
    data-bs-theme="dark"
  >
    <section
      class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <div class="d-none d-lg-block my-auto">
        <span>Свяжитесь с нами с помощью социальных сетей:</span>
      </div>
      <div>
        <SocialIconsGroup></SocialIconsGroup>
      </div>
    </section>

    <section class="container">
      <div class="text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 px-0">
            <LogoApp class="mb-3 mx-auto mx-lg-0" />
            <p>Обзор и обсуждение всех стадионов Беларуси в одном месте</p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Меню</h6>
            <p>
              <router-link to="/" class="text-reset">Главная</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">Менеджерам</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">Стадионы</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">FAQ</router-link>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Стек технологий</h6>
            <p>
              <router-link to="/" class="text-reset">Vue.js</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">Vue-Router</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">Axios</router-link>
            </p>
            <p>
              <router-link to="/" class="text-reset">Bootstrap</router-link>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Наши контакты</h6>
            <p>Республика Беларусь, г. Минск</p>
            <p>alexei-baranov18@mail.ru</p>
            <p>+375-33-314-66-97</p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.05); font-size: 12px;">
      © {{new Date().getFullYear()}} Created using the framework:
      <a class="text-reset" href="https://vuejs.org/"
        >Vue js</a
      >
    </div>
  </footer>
</template>
  
<script>
import SocialIconsGroup from "@/components/ui-component/SocialIconsGroup.vue";
import LogoApp from "./ui-component/LogoApp.vue";

export default {
  components: {
    SocialIconsGroup,
    LogoApp,
  },
};
</script>
  
  <style>
.header {
  background: black;
}

.logo p {
  text-shadow: 1px 1px 1px rgb(55, 54, 59), -1px 1px 1px rgb(135, 134, 137);
  color: rgb(166, 165, 171);
  transition: all 0.5s;
  margin: 0;
}

.logo p:hover {
  text-shadow: -1px -1px 1px silver, 1px -1px 1px silver;
  color: white;
}
</style>