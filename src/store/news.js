/* eslint-disable no-unused-vars */
import router from "@/router";

export default {
  state: {
    newsBlock: [],
  },
  getters: {
    getNewsBlock(state) {
      return state.newsBlock;
    },
  },
  mutations: {
    newsDataBlock(state, newsBlock) {
      state.newsBlock = newsBlock;
    },
  },
  actions: {
    async getNewsBlock(context) {
      let url =
        "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "pageSize=10&" +
        "sortBy=publishedAt&" +
        "apiKey=4b0c0da3a08d43d58a6a24f653228ba4";

      let res = await fetch(url);
      let data = await res.json();
      let newsBlock = data.articles;
      context.commit("newsDataBlock", newsBlock);
    },
  },
  modules: {},
};
