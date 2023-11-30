<template>
  <div class="d-flex gap-3 px-auto">
    <TwitterIcons
      hrefIcon="https://twitter.com"
      :heightIcon="sizeIcons"
      :widthIcon="sizeIcons"
    ></TwitterIcons>
    <FacebookIcons
      hrefIcon="https://facebook.com"
      :heightIcon="sizeIcons"
      :widthIcon="sizeIcons"
    ></FacebookIcons>
    <InstagrammIcons
      hrefIcon="https://instagramm.com"
      :heightIcon="sizeIcons"
      :widthIcon="sizeIcons"
    ></InstagrammIcons>
    <linkedinIcons
      hrefIcon="https://www.linkedin.com/in/alexei-baranov/"
      :heightIcon="sizeIcons"
      :widthIcon="sizeIcons"
    ></linkedinIcons>
    <GithubIcons
      hrefIcon="https://github.com/Baranov-alexei18?tab=repositories"
      :heightIcon="sizeIcons"
      :widthIcon="sizeIcons"
    ></GithubIcons>
  </div>
</template>

<script>
import FacebookIcons from "../svg-icons/facebookIcons.vue";
import TwitterIcons from "../svg-icons/twitterIcons.vue";
import InstagrammIcons from "../svg-icons/instagrammIcons.vue";
import linkedinIcons from "../svg-icons/linkedinIcons.vue";
import GithubIcons from "../svg-icons/githubIcons.vue";

export default {
  components: {
    TwitterIcons,
    FacebookIcons,
    InstagrammIcons,
    linkedinIcons,
    GithubIcons,
  },
  data() {
    return {
      sizeIcons: "22px",
    };
  },
};
</script>

<style>
svg:hover {
  margin-top: -5px;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
}
</style>