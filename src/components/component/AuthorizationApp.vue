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
        :rules="nameRules"
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
        :rules="nameRules"
        :append-icon="password ? '$vuetify': ''"
        :type="show1 ? 'text' : 'password'"
        label="Password"
        variant="outlined"
        rounded="xl"
        small
        required
        @click:append="show1 = !show1"
      ></v-text-field>

      <div class="mb-10">
        <v-btn
          color="primary"
          @click="validate"
          rounded="xl"
          size="large"
          height="56px"
          style="min-width: 200px"
        >
          Войти
        </v-btn>
      </div>
      <div
        style="font-size: 14px; color: blue"
        @click="this.$emit('toRegistration', true)"
      >
        Создать свой аккаунт
      </div>
    </v-form>
  </div>
</template>
  
  <script>
import LogoApp from "@/components/ui-component/LogoApp.vue";

export default {
  name: "AuthorizationApp",
  components: { LogoApp },
  data() {
    return {
      show1: false,
      email: "",
      password: "",
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
  },
};
</script>
  
  <style>
</style>
  