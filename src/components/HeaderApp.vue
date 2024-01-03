<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container">
      <div class="d-none d-md-flex mr-5">
        <LogoApp />
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ml-15" id="navbarSupportedContent">
        <div class="d-flex align-items-center navList" id="nav-ul-content">
          <ul class="navbar-nav align-items-center my-2 mb-lg-0 mx-auto">
            <li>
              <router-link class="nav-link" aria-current="page" to="/"
                >Главная</router-link
              >
            </li>
            <li>
              <router-link class="nav-link" to="/manager"
                >Менеджерам</router-link
              >
            </li>
            <li class="d-flex nav-link px-0" style="align-items: center">
              <router-link class="nav-link pr-1" to="/stadium">
                Стадионы
              </router-link>
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-icon
                    class="d-none d-md-flex mdi mdi-arrow-down-drop-circle-outline nav-link"
                    v-bind="props"
                  >
                  </v-icon>
                </template>

                <v-card>
                  <v-layout>
                    <v-list>
                      <v-list-item v-for="region of regions" :key="region">
                        <router-link class="dropdown-item" to="/stadium">
                          {{ region }}
                        </router-link>
                      </v-list-item>
                    </v-list>
                  </v-layout>
                </v-card>
              </v-menu>
            </li>
          </ul>
        </div>
      </div>
      <SearchField />

      <div class="user-name mr-3">
        {{ userName }}
      </div>
      <div class="d-flex">
        <v-btn
          v-if="!getUserData.length && !userName"
          class="my-auto"
          to="/signIn"
          >Войти</v-btn
        >
        <AvatarApp :user-data="getUserData"></AvatarApp>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoApp from "./ui-component/LogoApp.vue";
import AvatarApp from "./ui-component/AvatarApp.vue";
import SearchField from "./ui-component/SearchField.vue"

import { mapGetters } from "vuex";

export default {
  components: { LogoApp, AvatarApp, SearchField },
  data() {
    return {
      isSearch: false,
      dropDown: false,
      regions: [
        "Минск",
        "Минская область",
        "Витебская область",
        "Могилевская область",
        "Гомельская область",
        "Брестская область",
        "Гродненская область",
      ],
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),
    userName() {
      if (!this.getUserData) {
        return null;
      }
      return this.getUserData?.full_name;
    },
  },
  methods: {
    searchFocused(timeFraction) {
      let inputSearch = document.getElementById("input-search");
      //let navBar = document.getElementById("nav-ul-content");
      let flag = false;
      document.addEventListener("click", function (e) {
        if (e.target.className == "v-field__input") {
          flag = true;
        } else {
          flag = false;
        }
      });

      this.animation({
        duration: 500,
        timing: function (timeFraction) {
          return timeFraction;
        },
        draw: function (progress) {
          if (flag) {
            let dwidth = 200;
            inputSearch.style.width = dwidth + progress * 760 + "px";
          } else {
            inputSearch.style.width = "200px";
          }
        },
      });
      return timeFraction;
    },

    animation({ timing, draw, duration }) {
      let start = performance.now();

      requestAnimationFrame(function animation(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animation);
        }
      });
    },
  },
};
</script>

<style lang="scss">
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

.user-name {
  color: white;
}

@media (min-width: 991px) {
  .navList {
    position: absolute;
  }
}
</style>