<template>
  <a :href="hrefIcon" class="icon">
    <v-icon :size="sizeIcon"> 
    {{ nameIcon }}</v-icon>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    sizeIcon: String,
    hrefIcon: String,
    nameIcon: String,
  },
};
</script>

<style>
.icon{
  color: #dee2e6;
}
.icon :hover{
  color: white;
}
</style>