<template>
  <div
    class="d-flex col-sm-8 mx-auto"
    style="flex-direction: column; justify-content: center"
  >
    <div class="mx-auto mb-6">
      <LogoApp></LogoApp>
    </div>
    <v-form ref="form" v-on:keyup.enter="validate">
      <div>
        <v-text-field
          v-model="form.fullName"
          label="Имя"
          placeholder="Введите ФИО"
          variant="outlined"
          rounded="xl"
          :rules="rulesForms.rulesRequired"
          validate-on="submit"
          required
        >
        </v-text-field>

        <DatePickerApp
          @update:modelValue="setData"
          :rules-date="rulesForms.rulesDate"
        ></DatePickerApp>
        <v-text-field
          id="userEmail"
          v-model="form.emailReg"
          label="Email"
          placeholder="Введите email"
          variant="outlined"
          rounded="xl"
          required
          :error-messages="errorEmail"
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
          validate-on="input"
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
          validate-on="submit"
        >
        </v-checkbox>
      </div>
      <div class="d-flex justify-center gap-2 pb-2">
        <v-btn
          :loading="loading"
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

import { auth, db } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import toastMixin from "@/mixins/toastMixins";

export default {
  name: "RegistrationView",
  components: { LogoApp, DatePickerApp },
  mixins: [toastMixin],
  data() {
    return {
      form: {
        fullName: null,
        dataPicker: null,
        checkAgree: false,
        emailReg: null,
        passwordReg: null,
        passwordAgain: null,
      },

      show1: false,
      loading: false,
      errorEmail: null,

      rulesForms: {
        rulesAgree: [(v) => v === true || "Согласитесь с обработкой данных"],
        rulesMail: [
          (v) => !!v || "",
          (v) =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
              v
            ) || "e-mail не корректен",
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

        //Функция, проверяющая возвраст, вместо false
        rulesDate: [
          (v) => !!v || "",
          (v) => this.invalidDate(v) || "Дата не корректна",
        ],
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
          agree: this.form.checkAgree,
        };

        this.loading = true;
        await this.regNewUser(user);
        this.loading = false;
      }
    },

    async regNewUser(user) {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          addDoc(collection(db, "Users"), {
            user_id: userCredential.user.uid,
            email: userCredential.user.email,
            full_name: user.fullName,
            date_birthday: user.date_birthday,
            agree: user.agree,
          });
          this.succesToast("Новый пользователь создан");

          this.errorEmail = null;
          this.$emit("returnToAuth", true);
          this.$refs.form.reset();
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            this.errorToast("Пользователь с данным емайл уже зарегестрирован");
            this.errorEmail = "Данный емайл уже существует";
          }
        });
    },

    setData(date) {
      if (!date) return null;

      const [day, month, year] = date.split(".");
      const dat = new Date(year, month - 1, day);
      dat.setHours(dat.getHours() + 3);
      this.form.dataPicker = dat.toISOString();
    },

    invalidDate(date) {
      const [day, month, year] = date.split(".");
      let isDate = new Date(year, month - 1, day);

      let minDateBirthday = new Date();
      minDateBirthday.setFullYear(minDateBirthday.getFullYear() - 100);

      const validDate =
        new Date().getFullYear() >= isDate.getFullYear() &&
        isDate.getFullYear() >= minDateBirthday.getFullYear()
          ? true
          : false;

      return validDate;
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
</style>
  
