<template>
  <div class="page_home">
    <h1>Главная страница</h1>
    <div style="max-width: 400px">
      <DatePickerApp></DatePickerApp>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DatePickerApp from "@/components/ui-component/DatePicker/DatePickerApp.vue";

export default {
  name: "HomeView",
  components: { DatePickerApp },
};
</script>

<style>
.page_home {
  min-height: 500px;
}
</style>
