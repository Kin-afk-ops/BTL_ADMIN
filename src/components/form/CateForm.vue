<template>
  <div class="content__form">
    <div class="main__container form__container">
      <h1 class="form__title main__title">Chỉnh sửa danh mục</h1>
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
          <input type="file" ref="file" />

          <label for="">Đường dẫn </label>
          <input
            v-model="cateForm.path"
            placeholder="nhập đường dẫn"
            type="text"
          />

          <button class="form__btn--main main__btn">Sửa</button>
          <button class="form__btn--extra main__btn" @click="handleHidden">
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

  async created() {
    const res = await axios.get(`/category/find/${this.$route.params.cateId}`);
    this.cateForm = res.data;
  },

  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$router.back();
    },
    async handleSubmit() {
      if (this.$refs.file.files[0]) {
        const resImgDelete = await axios.delete(
          `/image/remove/${this.cateForm.image.publicId}`
        );
        console.log(resImgDelete);
        const uploadData = new FormData();
        uploadData.append("file", this.$refs.file.files[0], "file");
        const resImg = await axios.post("/image/upload", uploadData);
        this.cateForm.image.path = resImg.data.file.path;
        this.cateForm.image.publicId = resImg.data.file.filename;
      }

      await axios.put(`/category/${this.$route.params.cateId}`, this.cateForm);
      alert("Sửa thành công");
      this.$router.back();
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
