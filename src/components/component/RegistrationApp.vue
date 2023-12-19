<template>
  <div
    class="d-flex col-sm-8 mx-auto"
    style="flex-direction: column; justify-content: center"
  >
    <div class="mx-auto mb-6">
      <LogoApp></LogoApp>
    </div>
    <v-form ref="form">
      <div class="">
        <v-text-field
          v-model="form.fullName"
          label="Имя"
          placeholder="Введите ФИО"
          variant="outlined"
          rounded="xl"
          required
          :rules="rulesForms.rulesRequired"
          validate-on="submit"
        >
        </v-text-field>

        <DatePickerApp
          @update:modelValue="setData"
          :rules-date="rulesForms.rulesRequired"
        ></DatePickerApp>
        <v-text-field
          v-model="form.emailReg"
          label="Email"
          placeholder="Введите email"
          variant="outlined"
          rounded="xl"
          required
          :rules="rulesForms.rulesMail"
          validate-on="submit"
        >
        </v-text-field>

        <v-text-field
          v-model="form.passwordReg"
          label="Пароль"
          placeholder="Введите пароль"
          variant="outlined"
          rounded="xl"
          small
          required
          :rules="rulesForms.rulesPassword"
          validate-on="submit"
        ></v-text-field>

        <v-text-field
          v-model="form.passwordAgain"
          label="Подтвердите пароль"
          placeholder="Подтвердите пароль"
          variant="outlined"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          @click:appendInner="show1 = !show1"
          rounded="xl"
          small
          required
          :rules="rulesForms.rulesPasswordAgain"
          validate-on="submit"
        ></v-text-field>
      </div>

      <div class="checkAgree mb-5">
        <v-checkbox
          v-model="form.checkAgree"
          :rules="rulesForms.rulesAgree"
          inset
          color="primary"
          label="Пользовательское соглашение"
          validate-on="input"
        >
        </v-checkbox>
      </div>
      <div class="d-flex justify-center gap-2 pb-2">
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
      form: {
        fullName: null,
        dataPicker: null,
        checkAgree: false,
        emailReg: "",
        passwordReg: "",
        passwordAgain: "",
      },

      show1: false,

      rulesForms: {
        rulesAgree: [(v) => v === true || "Согласитесь с обработкой данных"],
        rulesMail: [
          (v) => !!v || "",
          (v) =>
            /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v) || "e-mail не корректен",
        ],
        rulesPassword: [
          (v) => !!v || "",
          (v) => v.length >= 8 || "Пароль имеет меньше 8 символов",
        ],
        rulesPasswordAgain: [
          (v) => !!v || "",
          (v) => v === this.form.passwordReg || "Пароль не подтвержден",
        ],
        rulesRequired: [(v) => !!v || ""],
      },
    };
  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        const user = {
          fullName: this.form.fullName,
          email: this.form.emailReg,
          password: this.form.passwordReg,
          date_birthday: this.form.dataPicker,
          agree: this.form.switchAgree,
        };

        this.regNewUser(user.email, user.password);
      }
    },

    async regNewUser(email, password) {
      try {
        await this.$store.dispatch("regUser", { email, password });
        this.$refs.form.reset();
        this.$emit("returnToAuth", true);
      } catch (error) {
        alert(error);
      }
    },

    setData(value) {
      value.setHours(value.getHours() + 3);
      this.form.dataPicker = value.toISOString();
    },
  },
};
</script>
  
<style>
.checkAgree .v-input__details {
  display: inline-block;
  align-items: flex-end;
  text-align: start;
  padding-left: 10px;
  margin-top: -15px;
}

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
  
