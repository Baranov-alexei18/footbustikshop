<template>
  <div
    class="d-flex col-sm-7 mx-auto"
    style="flex-direction: column; justify-content: center"
  >
    <div class="mx-auto mb-6">
      <LogoApp></LogoApp>
    </div>
    <v-form ref="form">
      <v-text-field
        style="max-height: 65px"
        v-model="email"
        label="Email"
        variant="outlined"
        rounded="xl"
        required
      >
      </v-text-field>
      <div class="d-flex pr-3" style="justify-content: end">
        <a style="font-size: 10px; z-index: 2" href=""> Забыли пароль?</a>
      </div>
      <v-text-field
        v-model="password"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        variant="outlined"
        rounded="xl"
        small
        required
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <div class="mb-10">
        <v-btn
          color="primary"
          rounded="xl"
          size="large"
          height="56px"
          style="min-width: 200px"
          @click="authUserInApp"
        >
          Войти
        </v-btn>
      </div>
      <a
        style="font-size: 14px; color: blue"
        @click="this.$emit('toRegistration', true)"
      >
        Создать свой аккаунт
      </a>
    </v-form>
  </div>
</template>
  
  <script>
import LogoApp from "@/components/ui-component/LogoApp.vue";
import { mapGetters } from 'vuex';

mapGetters(["getUserData"]);

export default {
  name: "AuthorizationApp",
  components: { LogoApp },


  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },

  methods: {
    async authUserInApp() {
        await this.$store.dispatch("authUser", {
          email: this.email,
          password: this.password,
        });
    },
  },
};
</script>
  
  <style>
</style>
  