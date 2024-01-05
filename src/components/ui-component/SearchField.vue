<template>
  <div class="d-flex">
    <div id="input-search" class="input-search">
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
        @update:focused="searchFocused()"
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
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    focusInc: Boolean,
  },

  setup(props) {
    const searchInput = ref(null);
    const activeInput = ref(false);

    function searchFocused(timeFraction) {
      let inputSearch = document.getElementById("input-search");
      let active = activeInput.value;

      animation({
        duration: 500,
        timing: function (timeFraction) {
          return timeFraction;
        },
        draw: function (progress) {
          if (active == true && props.focusInc) {
            let dwidth = 200;
            inputSearch.style.width = dwidth + progress * 2000 + "px";
          } else {
            inputSearch.style.width = "200px";
          }
        },
      });
      return timeFraction;
    }

    function animation({ timing, draw, duration }) {
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
    }

    return {
      searchInput,
      activeInput,
      searchFocused,
    };
  },
};
</script>

<style>
.input-search {
  width: 200px;
  max-height: 46px;
  color: white;
  z-index: 5;
}

@media (max-width: 1280px) {
  .input-search {
    width: 150px;
  }
}
</style>