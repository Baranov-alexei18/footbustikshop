<template>
  <div
    class="d-flex mx-auto"
    style="flex-direction: column; justify-content: center"
  >
    <div class="mx-auto px-auto mb-6">
      <LogoApp></LogoApp>
    </div>
    <v-form ref="form">
      <div class="d-sm-flex gap-3">
        <div class="col">
          <v-text-field
            v-model="emailReg"
            label="Введите email"
            variant="outlined"
            rounded="xl"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="dataPicker"
            label="Введите вашу дату рождения"
            variant="outlined"
            rounded="xl"
          >
          </v-text-field>
        </div>
        <div class="col">
          <v-text-field
            v-model="password"
            label="Введите пароль"
            variant="outlined"
            icon="$vuetify"
            rounded="xl"
            small
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Подтвердите пароль"
            variant="outlined"
            icon="$vuetify"
            rounded="xl"
            small
            required
          ></v-text-field>
        </div>
      </div>
      <div class="d-flex justify-content-around mb-1">
        <v-switch
          class="ml-10"
          v-model="switchMen"
          hide-details
          inset
          color="primary"
          label="Мужской пол"
        ></v-switch>
        <v-switch
          class="ml-10"
          v-model="switchWoman"
          hide-details
          inset
          color="primary"
          label="Женский пол"
        ></v-switch>
      </div>
      <div style="height: 70px">
        <v-switch
          class="ml-10"
          v-model="switchAgree"
          :rules="nameRules"
          hide-details
          inset
          color="primary"
          label="Согласие на обработку персональных данных"
        >
          {{ messageError }}
        </v-switch>
        <div
          class="d-flex error mb-3 ml-10"
          style="z-index: 3"
          v-if="messageError && !switchAgree"
        >
          <span class="mb-0" style="color: red; margin-top: -10px">
            {{ messageError }}
          </span>
        </div>
      </div>
      <div class="d-flex justify-center gap-2 pt-3">
        <v-btn
          color="primary"
          @click="validate"
          rounded="xl"
          size="large"
          height="56px"
          style="min-width: 200px"
        >
          Сохранить
        </v-btn>
        <v-btn
          color="grey"
          rounded="xl"
          size="large"
          height="56px"
          style="min-width: 150px"
          @click="this.$emit('returnToAuth', true)"
        >
          Отмена
        </v-btn>
      </div>
    </v-form>
  </div>
</template>
  
  <script>
import LogoApp from "@/components/ui-component/LogoApp.vue";

export default {
  name: "RegistrationView",
  components: { LogoApp },

  data() {
    return {
      dataPicker: null,
      switchMen: true,
      switchWoman: false,
      switchAgree: false,
      messageError: null,
      emailReg: "",
      password: "",
      nameRules: [(v) => v === true || "Согласитесь с обработкой данных"],
    };
  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      console.log(this.switchAgree);
      if (valid) {
        alert("Form is valid");
        this.$emit("returnToAuth", true);
      } else
        this.messageError = await this.$refs.form.errors[0].errorMessages[0];
    },
  },

  watch: {
    switchMen(value) {
      if (value == true) {
        this.switchWoman = false;
      } else {
        this.switchWoman = true;
      }
    },
    switchWoman(value) {
      if (value == true) {
        this.switchMen = false;
      } else {
        this.switchMen = true;
      }
    },
  },
};
</script>
  
  <style>
.error{
  animation-name: error;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes error {
  20% {
    transform: translate(-8px, 0);
  }
  40% {
    transform: translate(8px, 0);
  }
  80% {
    transform: translate(-4px, 0);
  }
  100% {
    transform: translate(4px, 0);
  }
}
</style>
  