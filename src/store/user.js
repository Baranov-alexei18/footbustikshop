/* eslint-disable no-unused-vars */
import { auth, db } from "@/firebase/firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";


import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import router from "@/router";

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
    userOut(state){
      state.user = {};
    }
  },
  actions: {
    async authUser(context, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
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

    async getUserData(context, sfDocRef) {
      try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
          if (doc.data().user_id == sfDocRef) {
            context.commit("userData", doc.data());
          }
        });
      } catch (e) {
        console.log(e);
      }
    },

    async signOutUser() {
      await signOut(auth)
        .then(() => {
          this.commit("userOut");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  modules: {},
};
