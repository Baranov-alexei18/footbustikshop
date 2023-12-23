/* eslint-disable no-unused-vars */
import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";

import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

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
    userData(state, user){
      state.user = user;
    }
  },
  actions: {
    async authUser(context, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          const user = userCredential.user;

          this.dispatch("getUserData", user.uid);
        })
        .catch((e) => {
          alert(e);
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
        })
        .catch((error) => {
          console.log(error.code);
        });
    },

    async getUserData(context, sfDocRef) {
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        if (doc.data().userId == sfDocRef) {
          context.commit("userData", doc.data());
        }
      });
    },
  },
  modules: {},
};
