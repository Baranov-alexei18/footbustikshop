/* eslint-disable no-unused-vars */
import { auth, db } from "@/firebase/firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import router from "@/router";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {
    user: {},
  },
  getters: {
    getUserData(state) {
      return state.user;
    },
  },
  mutations: {
    userData(state, user) {
      state.user = user;
    },
  },
  actions: {
    async authUser(context, { email, password, path }) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          this.dispatch("getUserData", user.uid);

          router.push({ path: "/" });
        })
        .catch((error) => {
          if (
            error.code == "auth/invalid-email" ||
            error.code == "auth/invalid-credential"
          ) {
            const $toast = useToast();
            $toast.open({
              message: "Неправильно введен емайл или пароль",
              position: "top-right",
              type: "error",
              duration: 2000,
            });
          }
        });
    },

    async regUser(context, { user }) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const docRef = addDoc(collection(db, "Users"), {
            userId: userCredential.user.uid,
            full_name: user.fullName,
            date_birthday: user.date_birthday,
            agree: user.agree,
          });

          const $toast = useToast();
          $toast.open({
            message: "Новый пользователь создан",
            position: "top-right",
            type: "success",
            duration: 2000,
          });
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            const $toast = useToast();
            $toast.open({
              message: "Пользователь с данным емайл уже создан",
              position: "top-right",
              type: "error",
              duration: 2000,
            });
          }
        });
    },

    async getUserData(context, sfDocRef) {
      try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
          if (doc.data().userId == sfDocRef) {
            context.commit("userData", doc.data());
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
};
