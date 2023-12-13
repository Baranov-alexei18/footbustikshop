<template>
  <div
    class="d-flex mx-auto"
    style="flex-direction: column; justify-content: center"
  >
    <div class="mx-auto px-auto mb-5">
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
            v-model="passwordReg"
            label="Введите пароль"
            variant="outlined"
            icon="$vuetify"
            rounded="xl"
            small
            required
          ></v-text-field>

          <v-text-field
            v-model="passwordAgain"
            label="Подтвердите пароль"
            variant="outlined"
            :append-inner-icon="passwordAgain ? '$vuetify' : ''"
            :type="show1 ? 'text' : 'password'"
            @click:appendInner="show1 = !show1"
            icon="$vuetify"
            rounded="xl"
            small
            required
          ></v-text-field>
        </div>
      </div>
      <DatePickerApp></DatePickerApp>
      <div style="height: 60px">
        <v-switch
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
          class="d-flex error mb-1"
          style="z-index: 1"
          v-if="messageError && !switchAgree"
        >
          <span class="mb-0" style="color: red; margin-top: -10px">
            {{ messageError }}
          </span>
        </div>
      </div>
      <div class="d-flex justify-center gap-2 pt-4 pb-2">
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
import DatePickerApp from "@/components/ui-component/DatePicker/DatePickerApp.vue";

export default {
  name: "RegistrationView",
  components: { LogoApp, DatePickerApp },

  data() {
    return {
      show1: false,
      dataPicker: null,
      messageError: null,
      switchAgree: false,
      user: {},
      emailReg: "",
      passwordReg: "",
      passwordAgain: "",
      nameRules: [(v) => v === true || "Согласитесь с обработкой данных"],
    };
  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        let gender = this.isGender();
        this.user = {
          email: this.emailReg,
          password: this.passwordReg,
          date_birthday: this.dataPicker,
          gender: gender,
          agree: this.switchAgree,
        };

        let jsonUser = JSON.stringify(this.user, null, 2);
        await this.$refs.form.reset();
        alert(jsonUser);

        this.$emit("returnToAuth", true);
      } else
        this.messageError = await this.$refs.form.errors[0].errorMessages[0];
    },

    isGender() {
      let gender = this.switchMen == true ? "man" : "Women";
      return gender;
    },
  },
};
</script>
  
  <style>
.error {
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
  