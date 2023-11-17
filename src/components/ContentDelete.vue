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
  props: {
    selected: {
      type: Array,
    },
    modal: {
      type: Boolean,
    },
    selectAllMode: {
      type: Boolean,
    },
  },

  methods: {
    async handleDelete() {
      if (!this.selectAllMode) {
        await axios.delete(`/book`);
      } else {
        for (let s in this.selected)
          await axios.delete(`/book/${this.selected[s]}`);
      }

      window.location.reload();
    },

    handleHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
