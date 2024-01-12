<template>
  <div>
    <v-row class="pa-10 m-0" style="flex-direction: column">
      <v-row class="justify-space-between p-0 mt-0 mb-4">
        <v-btn
          color="grey"
          rounded="xl"
          size="large"
          height="56px"
          style="min-width: 150px"
          @click="toHomePage"
        >
          Отмена
        </v-btn>
        <span class="d-flex align-center" style="font-size: 22px;"> {{ getpublishedDate }}</span>
      </v-row>
      <h1 class="mx-10">{{ news.title }}</h1>

      <v-img
        class="mx-auto mb-5"
        :src="news?.urlToImage"
        width="500"
        height="500"
        cover
      ></v-img>

      <h4 class="mb-10">
        {{ news.content }}
      </h4>

      <div class="d-flex flex-column justify-start">
        <h5 class="mr-auto">Автор статьи: {{ news?.source?.name }}</h5>
        <h5 class="mr-auto">
          Ссылка на статью:
          <a :href="news?.url" style="color: black">{{ news?.url }}</a>
        </h5>
      </div>
      <v-btn
        class="mx-auto mt-3"
        color="grey"
        rounded="xl"
        size="large"
        height="56px"
        style="min-width: 150px; max-width: 150px"
        @click="toHomePage"
      >
        На главную
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    let newsBlock = this.$store.getters.getNewsBlock;
    this.news = newsBlock.find(
      (item) => item.title === this.$route.params.title
    );
  },
  computed: {
    getpublishedDate() {
      let date = new Date(this.news?.publishedAt);
      return date.toLocaleString();
    },
  },
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>