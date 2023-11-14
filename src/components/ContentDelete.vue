<template>
  <div
    class="customer__modal"
    :class="{ hidden: !modal, display__flex: modal }"
    ref="modalHideBtn"
  >
    <div class="customer__modal--title">Bạn muốn xoá?</div>
    <div class="customer__modal--content">
      <button class="customer__modal--hide" @click="handleHidden">Đóng</button>
      <button
        class="customer__modal--agree"
        @click="
          () => {
            console.log(selected);
          }
        "
      >
        Đồng ý
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: String,
    },
    modal: {
      type: Boolean,
    },
  },

  methods: {
    handleHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
