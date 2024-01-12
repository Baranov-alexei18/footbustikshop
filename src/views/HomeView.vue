<template>
  <main>
    <v-container class="pa-2">
      <NewsBlock v-if="getNews" @get-news="getNews" />
      <v-divider></v-divider>
    </v-container>
  </main>
</template>

<script>
import NewsBlock from "@/components/component/Home/News.vue";

export default {
  name: "HomeView",
  components: { NewsBlock },
  data() {
    return {
      data: {
        isNews: false,
      },
    };
  },

  computed: {},

  methods: {
    getNews(value) {
      console.log("THIS NEWS");
      console.log(value);
      if (value) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>