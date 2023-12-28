/* eslint-disable no-unused-vars */
import { auth, db } from "@/firebase/firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import router from "@/router";

import {
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {
    user: localStorage.user_data,
  },
  getters: {
    getUserData(state) {
      let localUser = state.user
        ? JSON.parse(state.user)
        : {};
      return localUser;
    },
  },
  mutations: {
    userData(state, user) {
      const userData = JSON.stringify(user);
      localStorage.setItem("user_data", userData);
      state.user = userData;
    },
    userOut(state) {
      localStorage.removeItem("user_data");
      state.user = null;
    },
  },
  actions: {
    async authUser(context, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          this.dispatch("getUserData", user.uid);          
        })
        .catch((error) => {
          if (
            error.code == "auth/invalid-email" ||
            error.code == "auth/invalid-credential"
          ) {
            console.log(error.message);
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
            
            const userData = JSON.stringify(doc.data());
            localStorage.setItem("user_data", userData);

          router.push({ path: "/" });
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
