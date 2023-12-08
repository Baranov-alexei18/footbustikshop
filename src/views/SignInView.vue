<template>
  <div class="page_registration">
    <v-card
      class="card_registration"
      color="white"
      width="600"
      min-height="470"
      variant="elevated"
      elevation="8"
      rounded="xl"
    >
      <v-tabs v-model="tab" bg-color="white" color="blue-lighten-1">
        <v-tab class="col" value="auth">Авторизация</v-tab>
        <v-tab class="col" value="reg">Регистрация</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="auth">
            <AuthorizationView ></AuthorizationView>
          </v-window-item>

          <v-window-item value="reg">
            <RegistrationApp @returnToAuth="returnToAuth"></RegistrationApp>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
  
  <script>
import AuthorizationView from "@/components/component/AuthorizationApp.vue";
import RegistrationApp from "@/components/component/RegistrationApp.vue";

export default {
  name: "signInView",
  components: { AuthorizationView, RegistrationApp },
  data() {
    return {
      tab: null,
      email: "",
      password: "",
      switchAgree: true,
      nameRules: [
        (v) => !!v || "",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    returnToAuth(value){
      console.log(1);
      if(value === true){
        this.tab = "auth"
      }
    },
  },
};
</script>
  
  <style>
.page_registration {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.card_registration {
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
}
</style>
  