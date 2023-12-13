<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <p>
          Date in ISO format: <strong>{{ computedDateFormatted }}</strong>
        </p>
        <div>
          <v-text-field
            label="Введите вашу дату рождения"
            v-model="selectedDate"
            variant="outlined"
            rounded="xl"
            append-inner-icon="mdi-calendar"
            @click:append-inner="show = !show"
          ></v-text-field>
          <div style="position: absolute; top: 20px">
            <v-date-picker
              v-show="show"
              v-model="selectedDate"
              class="picker"
              color="success"
              elevation="4"
              show-adjacent-months
              position="fixed"
            >
            </v-date-picker>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: (v) => ({
    selectedDate: null,
    date: new Date().toISOString(),
    dateFormatted: v.formatDate(new Date().toISOString()),
    menu1: false,
    menu2: false,
    show: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(new Date(this.selectedDate).toISOString());
    },
  },

  watch: {
    selectedDate(value) {
      this.show = false;
      this.$emit("update:modelValue", value);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style>
.picker {
  animation: ani 1s forwards;
  width: max-content;
  z-index: 2;
}

@keyframes ani {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>