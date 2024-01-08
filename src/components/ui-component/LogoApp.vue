<template>
  <div class="d-flex gap-2 logo">
    <img
      class="thumb"
      src="../../assets/Logo/Football_Logo.png"
      height="70"
      alt="Логотип"
      style="filter: invert(0.8)"
    />
    <div class="d-flex align-items-center">
      <p>
        Все Стадионы <br />
        Беларуси
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.logo {
  min-width: 180px;

  p {
    color: $main-white-text-color !important;
    transition: all 0.5s;
    margin: 0;
    &:hover {
      color: grey !important;
      opacity: 60%;
    }
  }
}
</style>