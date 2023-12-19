/* eslint-disable no-unused-vars */
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {
    userId: null,
  },
  getters: {
    getUserId(state){
        return state.userId
    }
  },
  mutations: {
    userId(state, userId){
        state.userId = userId
    }
  },
  actions: {
    async authUser(ctx, { email, password }) {
      //eslint-disable-next-line no-useless-catch
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            ctx.commit('userId', user.uid)
          }
        )
        .catch(e => {
            alert(e)
        });
      
    },

    regUser({ dispatch, content }, { email, password }){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {})
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
          // ..
        });
    }
  },
  modules: {},
};
