<template>
  <v-divider></v-divider>
  <h1>Новости</h1>
  <v-slide-group v-model="model" show-arrows center-active>
    <v-slide-group-item
      v-for="(item, idx) of newsBlock"
      :key="idx"
      v-slot="{ selectedClass }"
    >
      <v-card
        class=""
        :class="['ma-5', selectedClass]"
        max-width="230"
        min-width="230"
        color="#333c3f"
        rounded="xl"
        @click="getOwnNews(idx)"
      >
        <v-img :src="item.urlToImage" height="180" cover></v-img>

        <v-card-title> {{ item.title }} </v-card-title>

        <v-card-subtitle class="d-flex">
          {{ item?.source?.name }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="green-lighten-2" variant="text"> Перейти </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "NewsBlock",
  data() {
    return {
      model: null,
      show: false,
      newsBlock: [],
      newsBlock1: [
        {
          author: "cnn.com",
          content:
            "Heres something sure to make Elon Musk smile short sellers, those investors who placed bets that the value of Tesla shares were going to go down, lost a combined $12.2 billion last year, more than sh… [+285 chars]",
          description:
            "Here’s something sure to make Elon Musk smile – short sellers, those investors who placed bets that the value of Tesla shares were going to go down, lost a combined $12.2 billion last year, more than short sellers lost on any other company in 2023. That estim…",
          publishedAt: "2024-01-08T07:22:23Z",
          source: { id: null, name: "Biztoc.com" },
          title:
            "Short sellers lost more money betting against Tesla than any other company last year",
          url: "https://biztoc.com/x/def1c139f6996c6f",
          urlToImage: "https://c.biztoc.com/p/def1c139f6996c6f/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
        {
          author: "awealthofcommonsense.com",
          content:
            "Im skeptical of any diet or exercise craze because they all end up more or less becoming fads.This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user o… [+281 chars]",
          description:
            "I’m skeptical of any diet or exercise craze because they all end up more or less becoming fads. This is why I could never get behind the idea of buying stock in Peloton, even though I am a happy user of the product. Sure, some people will buy it and use it re…",
          publishedAt: "2024-01-08T07:22:20Z",
          source: { id: null, name: "Biztoc.com" },
          title: "There's No Ozempic For Financial Decisions",
          url: "https://biztoc.com/x/e297596ba5584604",
          urlToImage: "https://c.biztoc.com/p/e297596ba5584604/og.webp",
        },
      ],
    };
  },

  mounted() {
    this.getNews();
  },

  methods: {
    async getNews() {
      if (!this.$store.getters.getNewsBlock.length) {
        await this.$store.dispatch("getNewsBlock");
      }
      this.newsBlock = this.$store.getters.getNewsBlock;
    },
    getOwnNews(id) {
      this.$router.push({
        name: "news",
        params: {
          title: this.newsBlock[id]?.title,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>