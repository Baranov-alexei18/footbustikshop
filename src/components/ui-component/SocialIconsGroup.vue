<template>
  <div class="d-flex gap-3 px-auto">
    <div class="iconSocial" v-for="(item, id) of icons" :key="id">
      <SocialIcons
      :nameIcon="item.name"
      :hrefIcon="item.href"
      :sizeIcon="sizeIcons"
      ></SocialIcons>
    </div>
  </div>
</template>

<script>
import SocialIcons from "../svg-icons/SocialIcons.vue";

export default {
  components: {
    SocialIcons,
  },
  data() {
    return {
      sizeIcons: "28px",
      icons: [
        {
          name: "mdi mdi-twitter",
          href: "https://twitter.com",
        },
        {
          name: "mdi-facebook",
          href: "https://facebook.com",
        },
        {
          name: "mdi-instagram",
          href: "https://instagramm.com",
        },
        {
          name: "mdi-linkedin",
          href: "https://www.linkedin.com/in/alexei-baranov/",
        },
        {
          name: "mdi-github",
          href: "https://github.com/Baranov-alexei18?tab=repositories",
        },
      ],
    };
  },
};
</script>

<style>
</style>