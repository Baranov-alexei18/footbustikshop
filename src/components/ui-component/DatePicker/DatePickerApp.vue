<template>
  <div>
    <v-text-field
      label="Дата рождения"
      placeholder="Введите вашу дату рождения"
      v-model="dateField"
      variant="outlined"
      rounded="xl"
      append-inner-icon="mdi-calendar"
      @click:control="show = !show"
      :rules="rulesDate"
      validate-on="submit"
    ></v-text-field>
    <div class="picker">
      <v-date-picker
        v-show="show"
        v-model="selectedDate"
        color="success"
        elevation="4"
        show-adjacent-months
        position="fixed"
      >
      </v-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedDate: null,
    dateField: null,
    date: new Date().toISOString(),
    menu1: false,
    menu2: false,
    show: false,
  }),
  props: { rulesDate: Array },

  computed: {},

  watch: {
    selectedDate(value) {
      this.show = false;
      this.dateField = this.computedDateFormatted();
      this.$emit("update:modelValue", value);
    },
  },

  methods: {
    computedDateFormatted() {
      if (!this.selectedDate) return null;
      let year = this.selectedDate.getFullYear();
      let month = this.selectedDate.getMonth() + 1;
      let day = this.selectedDate.getDate();
      if (day < 9) {
        day = `0${day}`;
      }
      if (month < 9) {
        month = `0${month}`;
      }
      return `${day}.${month}.${year}`;
    },
  },

  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target) && this.show === true) {
        this.show = false;
      }
    });
  },
};
</script>

<style>
.picker {
  position: absolute;
  top: 20px;
  animation: ani 1s forwards;
  width: max-content;
  z-index: 5;
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