<template>
  <div class="content__form" :class="{ hidden: formCateMode === false }">
    <div class="main__container form__container">
      <h1 class="form__title main__title">
        {{ formValue.title }}
      </h1>
      <hr />

      <div class="form__content">
        <form class="form__group" @submit.prevent="handleSubmit">
          <label for="">Tên danh mục</label>
          <input
            v-model="cateForm.name"
            placeholder="Nhập tên danh mục"
            type="text"
          />

          <label for="">Link ảnh danh mục </label>
          <input
            v-model="cateForm.image"
            placeholder="Tìm ảnh sách và thêm link"
            type="text"
          />

          <label for="">Đường dẫn </label>
          <input
            v-model="cateForm.path"
            placeholder="nhập đường dẫn"
            type="text"
          />

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
import axios from "axios";

export default {
  props: ["formCateMode", "formValue"],
  data() {
    return {
      cateForm: {
        name: "",
        image: "",
        path: "",
      },
    };
  },

  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$emit("hidden");
    },
    async handleSubmit() {
      await axios.post("/category/", this.cateForm);
      alert("Thêm thành công");
      this.$emit("hidden");
      window.location.reload();
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
