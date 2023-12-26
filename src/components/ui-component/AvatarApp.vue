<template>
  <v-container fluid>
    <v-row justify="center">
      <v-menu rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar>
              <i class="fa-solid fa-user-tie"></i>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-layout class="wrapper_info_account">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                :title="userName"
                :subtitle="userEmail"
              >
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list :lines="false" density="compact" nav>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                :color="item.color"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-layout>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    user: {
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
    items: [
      { text: "Профиль", icon: "mdi-account-edit" },
      { text: "Друзья", icon: "mdi-account-multiple" },
      { text: "Выйти", icon: "mdi-logout", color: "red"},
    ],
  }),
  computed: {
    ...mapGetters(["getUserData"]),
    userEmail() {
      return this.getUserData.email;
    },
    userName() {
      return this.getUserData.full_name;
    },
  },
};
</script>

<style>
.wrapper_info_account {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
}
</style>