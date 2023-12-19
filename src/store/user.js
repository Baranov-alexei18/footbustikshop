/* eslint-disable no-unused-vars */
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    authUser({ dispatch, content }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);
          }
        )
        .catch(e => {
            alert(e)
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
