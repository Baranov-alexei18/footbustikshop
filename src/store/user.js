/* eslint-disable no-unused-vars */
import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";

import { collection, addDoc, runTransaction, doc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {
    userId: null,
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
  mutations: {
    userId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    async authUser(context, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          const user = userCredential.user;

          context.commit("userId", user.uid);

          this.dispatch("getUserData", user.uid);
        })
        .catch((e) => {
          alert(e);
        });
    },

    async regUser(context, { user }) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          console.log("FROM USERS  " + userCredential.user.uid);
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

    async getUserData(context,  sfDocRef ) {
      const resultCars = []
      try {
        await runTransaction(db, async (transaction) => {
          await transaction.get(doc(db, "Users","ePywXVvHSkoverTf6oOs"))
          .then((querySnapshot) => {
            console.log(querySnapshot);
          });
          if (!resultCars) {
            throw "Document does not exist!";
          }
          console.log(resultCars);
        });
        console.log("Transaction successfully committed!");
      } catch (e) {
        console.log("Transaction failed: ", e);
      }
    },
  },
  modules: {},
};
