<template>
  <div id="input-search" class="d-none d-md-flex input-search">
    <v-text-field
      v-model="searchInput"
      v-model:focused="activeInput"
      class="mt-0 pr-0 mr-3"
      type="search"
      placeholder="Search"
      aria-label="Search"
      variant="outlined"
      rounded="xl"
      base-color="white"
      bg-color="white"
      density="comfortable"
      @update:focused="searchFocused(arguments)"
    >
      <template v-slot:append-inner>
        <v-btn
          class="my-auto p-0"
          size="small"
          rounded="xl"
          icon="mdi mdi-magnify"
          style="color: black; left: 10px"
        >
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: null,
      activeInput: false,
    };
  },
  methods: {
    searchFocused(timeFraction) {
      let inputSearch = document.getElementById("input-search");
      let active = this.activeInput;
      this.animation({
        duration: 500,
        timing: function (timeFraction) {
          return timeFraction;
        },
        draw: function (progress) {
            
          if (active) {
            let dwidth = 200;
            inputSearch.style.width = dwidth + progress * 760 + "px";
          } else {
            inputSearch.style.width = "200px";
          }
        },
      });
      return timeFraction;
    },

    animation({ timing, draw, duration }) {
      let start = performance.now();

      requestAnimationFrame(function animation(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animation);
        }
      });
    },
  },
};
</script>

<style>
.input-search {
  width: 200px;
  min-width: 200px;
  max-height: 46px;
  color: white;
  z-index: 10;
}
</style>