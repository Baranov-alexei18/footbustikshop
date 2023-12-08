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
        <v-card min-width="250px" min-height="330px">
          <v-layout class="wrapper_info_account">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                title="John Leider"
                subtitle="john@google.com"
              >
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list :lines="false" density="compact" nav>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                color="primary"
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
export default {
  data: () => ({
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
    items: [
      { text: "My Files", icon: "mdi-folder" },
      { text: "Shared with me", icon: "mdi-account-multiple" },
      { text: "Starred", icon: "mdi-star" },
      { text: "Recent", icon: "mdi-history" },
      { text: "Offline", icon: "mdi-check-circle" },
    ],
  }),
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