<template>
  <div
    class="customer__modal"
    :class="{ hidden: !modal, display__flex: modal }"
    ref="modalHideBtn"
  >
    <div class="customer__modal--title">Bạn muốn xoá?</div>
    <div class="customer__modal--content">
      <button class="customer__modal--hide" @click="handleHidden">Đóng</button>
      <button class="customer__modal--agree" @click="handleDelete">
        Đồng ý
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["selected", "modal", "selectAllMode", "mode"],

  methods: {
    async handleDelete() {
      switch (this.mode) {
        case "book":
          if (this.selectAllMode) {
            for (let s in this.selected) {
              await axios.delete(`/book/${this.selected[s]}`);
            }
            await axios.delete(`/infoBook`);
          } else {
            for (let s in this.selected) {
              await axios.delete(`/book/${this.selected[s]}`);
              await axios.delete(`/infoBook/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        case "staff":
          if (this.selectAllMode) {
            for (let s in this.selected) {
              await axios.delete(`/boss/${this.selected[s]}`);
            }
            await axios.delete("/infoStaff");
          } else {
            for (let s in this.selected) {
              await axios.delete(`/boss/${this.selected[s]}`);
              await axios.delete(`/infoStaff/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        case "user":
          if (this.selectAllMode) {
            await axios.delete("/user");
            await axios.delete("/info");
          } else {
            for (let s in this.selected) {
              await axios.delete(`/user/${this.selected[s]}`);
              await axios.delete(`/info/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        case "cate":
          if (this.selectAllMode) {
            await axios.delete("/category");
          } else {
            for (let s in this.selected) {
              await axios.delete(`/category/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        case "order":
          if (this.selectAllMode) {
            await axios.delete("/order");
          } else {
            for (let s in this.selected) {
              await axios.delete(`/order/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        case "request":
          if (this.selectAllMode) {
            await axios.delete("/request");
          } else {
            for (let s in this.selected) {
              await axios.delete(`/request/${this.selected[s]}`);
              console.log(this.selected[s]);
            }
          }
          break;

        default:
          console.log("Delete...");
          break;
      }

      window.location.reload();
    },

    handleHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
