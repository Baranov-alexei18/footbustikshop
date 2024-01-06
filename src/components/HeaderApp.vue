<template>
  <header>
    <v-container class="px-0 py-2">
      <v-row class="justify-space-between mx-0">
        <v-col class="d-none d-sm-flex logo" sm="3" lg="2">
          <LogoApp />
        </v-col>
        <v-col
          class="d-none d-md-flex justify-space-between align-center px-0"
          style="width: 50%"
        >
          <div class="d-flex align-center">
            <div style="position: absolute">
              <NavLinksItemsVue class="d-flex pl-10" />
            </div>
          </div>

          <div
            class="d-inline-block"
            style="position: relative; max-width: inherit; justify-content: end"
          >
            <SearchField :focusInc="true" />
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="2"
          class="d-flex align-center justify-content-end px-0"
          style="max-width: 230px;"
        >
          <v-col class="user-name p-0">
            {{ userName }}
          </v-col>
          <v-col class="d-flex p-0">
            <v-btn
              v-if="!getUserData.length && !userName"
              class="my-auto p-0"
              to="/signIn"
              >Войти</v-btn
            >
            <AvatarApp class="ml-1" :user-data="getUserData"></AvatarApp>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import LogoApp from "./ui-component/LogoApp.vue";
import AvatarApp from "./ui-component/AvatarApp.vue";
import SearchField from "./ui-component/SearchField.vue";
import NavLinksItemsVue from "./ui-component/NavLinksItems.vue";

import { mapGetters } from "vuex";

export default {
  components: { LogoApp, AvatarApp, SearchField, NavLinksItemsVue },
  data() {
    return {
      isSearch: false,
      dropDown: false,
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
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

header {
  background-color: $main-black-color;
  color: $main-white-text-color;
}
.user-name {
  display: flex;
  flex-flow: row-reverse;
  color: white;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>