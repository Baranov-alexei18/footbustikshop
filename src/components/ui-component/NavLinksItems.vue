<template>
  <v-list class="d-flex gap-4 nav-list pl-10">
    <!-- <router-link class="nav-link" aria-current="page" to="/"
      >Главная</router-link
    >
    <router-link class="nav-link" to="/manager">Менеджерам</router-link> -->
    <div v-for="(item, idx) of navItems" :key="idx" class="d-flex">
      <router-link class="nav-link" :to="item.path">
        {{ item.name }}
      </router-link>
      <v-menu v-if="item.menu" open-on-hover>
        <template v-slot:activator="{ props }">
          <v-icon
            class="d-none d-md-flex mdi mdi-arrow-down-drop-circle-outline ml-1"
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
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
            name: "Главная",
            path: "/"
        },
        {
            name: "Менеджерам",
            path: "/manager"
        },
        {
            name: "Стадионы",
            path: "/stadium",
            menu: true,
        },
      ],
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
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.nav-list {
  background-color: $main-black-color;
  color: white;
}
</style>