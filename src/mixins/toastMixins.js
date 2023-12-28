import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  methods: {
    errorToast(message) {
      const $toast = useToast();
      $toast.open({
        message: message,
        position: "top-right",
        type: "error",
        duration: 2000,
      });
    },
    succesToast(message) {
      const $toast = useToast();
      $toast.open({
        message: message,
        position: "top-right",
        type: "success",
        duration: 2000,
      });
    },
  },
};