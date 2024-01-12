import { createStore } from "vuex";

import user from "@/store/user"
import news from "@/store/news"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {},
  modules: {
    user: user, 
    news: news},
});
