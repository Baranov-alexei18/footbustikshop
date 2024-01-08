<template>
  <footer>
    <v-container class="py-0">
      <v-row
        class="d-flex justify-center justify-sm-space-between m-0 py-4 border-bottom"
      >
        <div class="d-none d-sm-flex my-auto">
          <span>Свяжитесь с нами с помощью социальных сетей:</span>
        </div>
        <div>
          <SocialIconsGroup />
        </div>
      </v-row>

      <v-row class="d-flex px-3">
        <v-col cols="12" md="3" lg="3" class="d-block px-0 px-auto">
          <LogoApp class="mb-3 justify-md-start justify-center " />
          <div class="d-block text-lg-start">
            Обзор и обсуждение всех стадионов Беларуси в одном месте
          </div>
        </v-col>

        <v-col class="d-block d-sm-flex mx-auto">
          <v-col cols="12" sm="6" class="align-start justify-start mr-auto pt-0">
            <p class="text-center text-md-start text-uppercase fw-bold m-0">Меню</p>
            <NavLinksItems style="line-height: 40px" />
          </v-col>

          <v-col cols="12" sm="6" class="align-end pt-0">
            <p class="text-center text-md-start text-uppercase fw-bold mx-0 mb-2">Стек технологий</p>
            <div
              class="text-center text-md-start  item-technlogies"
              v-for="(item, id) in itemTechnologies"
              :key="id"
            >
              <a :href="item.href" class="text-reset" style="line-height: 40px"> {{ item.name }}</a>
            </div>
          </v-col>
        </v-col>

        <v-col cols="12" md="3" class="d-flex justify-md-start justify-center pt-3" style="flex-direction: column;">
          <p class="text-center text-md-start text-uppercase fw-bold mx-0 mb-4">Наши контакты</p>
          <p class="text-center text-md-start m-0 mb-2">Республика Беларусь, г. Минск</p>
          <div class="d-flex justify-content-center justify-md-start mb-2">
            <a id="mail" href="mailto:alexei-baranov18@mail.ru">
              alexei-baranov18@mail.ru
            </a>
          </div>
          <p class="text-center text-md-start">+375-33-314-66-97</p>
        </v-col>
      </v-row>
      <v-row
        class="d-flex justify-center p-1 m-0 border-top"
        style="font-size: 12px"
      >
        <div>
          © {{ new Date().getFullYear() }} Created using the framework:
          <a class="text-reset" href="https://vuejs.org/">Vue js</a>
        </div>
      </v-row>
    </v-container>
  </footer>
</template>
  
<script>
import SocialIconsGroup from "@/components/ui-component/SocialIconsGroup.vue";
import LogoApp from "./ui-component/LogoApp.vue";
import NavLinksItems from "./ui-component/NavLinksItems.vue";

export default {
  components: {
    NavLinksItems,
    SocialIconsGroup,
    LogoApp,
  },
  data() {
    return {
      itemTechnologies: [
        {
          name: "Vue.js",
          href: "https://vuejs.org/",
        },
        {
          name: "Vue-Router",
          href: "https://router.vuejs.org/",
        },
        {
          name: "VueX",
          href: "https://vuex.vuejs.org/",
        },
        {
          name: "Vuetify",
          href: "https://vuetifyjs.com/en/",
        },
      ],
    };
  },
};
</script>
  
<style lang="scss">
@import "../assets/scss/variables.scss";

footer {
  background-color: $main-black-color;
  color: $main-white-text-color;

  .text-reset {
    text-decoration: none;
    line-height: 40px;
  }

  .text-start {
    line-height: 40px;

  }
  
  #mail {
    text-decoration: none;
    color: $main-white-text-color;
  }
  a:hover {
    transition: 0.5s;
    color: $main-nav-item-color !important;
  }
  .item-technlogies{

    & :nth-child(1){
      padding-top: 20px;
    }
  }
}
</style>