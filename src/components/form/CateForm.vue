<template>
  <div class="content__form" :class="{ hidden: formCateMode === false }">
    <div class="main__container form__container">
      <h1 class="form__title main__title">
        {{ formValue.title }}
      </h1>
      <hr />

      <div class="form__content">
        <form class="form__group">
          <label for="">Tên danh mục</label>
          <input placeholder="Nhập tên danh mục" type="text" />

          <label for="">Link ảnh danh mục </label>
          <input placeholder="Tìm ảnh sách và thêm link" type="text" />

          <button class="form__btn--main main__btn">{{ formValue.btn }}</button>
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
  props: ["formCateMode", "formValue"],
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
