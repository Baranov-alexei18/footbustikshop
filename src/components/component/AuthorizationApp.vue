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
        <span style="font-size: 10px; z-index: 2" role="button"> Забыли пароль?</span>
      </div>
      <v-text-field
        v-model="password"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :rules="rulesPassword"
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
          :loading="loading"
          @click="authUserInApp"
        >
          Войти
        </v-btn>
      </div>
      <span
        style="font-size: 14px; color: blue"
        role="button"
        @click="this.$emit('toRegistration', true)"
      >
        Создать свой аккаунт
      </span>
    </v-form>
  </div>
</template>
  
  <script>
import LogoApp from "@/components/ui-component/LogoApp.vue";
import { mapGetters } from "vuex";

mapGetters(["getUserData"]);

export default {
  name: "AuthorizationApp",
  components: { LogoApp },

  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      loading: false,
      rulesPassword: [(v) => !!v || ""],
    };
  },

  methods: {
    async authUserInApp() {
      const valid = await this.$refs.form.validate();
      if (valid.valid !== false) {
        this.loading = true;
        await this.$store.dispatch("authUser", {
          email: this.email,
          password: this.password,
        });

        this.loading = false;
      }
    },
  },
};
</script>
  
  <style>
</style>
  