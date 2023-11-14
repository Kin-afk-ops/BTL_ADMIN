<template>
  <div
    class="content__form"
    :class="{ hidden: formNotificationMode === false }"
  >
    <div class="main__container form__container">
      <h1 class="form__title main__title">Gửi thông báo</h1>
      <hr />

      <div class="form__content">
        <form class="form__group">
          <label for="">Tiêu đề</label>
          <input placeholder="Nhập tiêu đề" type="text" />

          <label for="">Nội dung </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Nhập nội dung"
          ></textarea>

          <button class="form__btn--main main__btn">Gửi</button>
          <button @click="handleHidden" class="form__btn--extra main__btn">
            Huỷ
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["formNotificationMode"],
  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$emit("hidden");
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
