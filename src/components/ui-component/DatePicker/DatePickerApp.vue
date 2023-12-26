<template>
  <div>
    <v-text-field
      label="Дата рождения"
      placeholder="Введите вашу дату рождения"
      v-mask="'##.##.####'"
      v-model="dateFormatted"
      @blur="date = parseDate(dateFormatted)"
      variant="outlined"
      rounded="xl"
      append-inner-icon="mdi-calendar"
      @click:appendInner="show = !show"
      :rules="rulesDate"
      validate-on="submit"
    ></v-text-field>

    <div class="picker">
      <v-date-picker
        v-show="show"
        v-model="date"
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
  data() {
    return {
      date: null,
      dateFormatted: null,
      menu1: false,
      menu2: false,
      show: false,
    };
  },
  props: { rulesDate: Array },

  computed: {},

  watch: {
    // eslint-disable-next-line no-unused-vars
    date(val) {
      this.dateFormatted = this.formatDate(val);
      this.$emit("update:modelValue", this.dateFormatted);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (day < 9) {
        day = `0${day}`;
      }
      if (month < 9) {
        month = `0${month}`;
      }
      return `${day}.${month}.${year}`;
    },
    parseDate(date2) {
      if (!date2) return null;
      const [day, month, year] = date2.split(".");
      let date = new Date(year, month - 1, day);
      return date;
    },
  },

  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target) && this.show === true) {
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