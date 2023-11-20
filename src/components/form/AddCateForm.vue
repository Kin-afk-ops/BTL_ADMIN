<template>
  <div class="content__form">
    <div
      class="main__container form__container"
      :class="{ hidden: !formCateMode }"
    >
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
          <input type="file" ref="uploadFile" />
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
        image: {
          path: "",
          publicId: "",
        },
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
      const uploadData = new FormData();
      uploadData.append("file", this.$refs.uploadFile.files[0], "file");

      const resImg = await axios.post("/image/upload", uploadData);
      console.log(resImg);
      this.cateForm.image.path = resImg.data.file.path;
      this.cateForm.image.publicId = resImg.data.file.filename;

      console.log(resImg);
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
