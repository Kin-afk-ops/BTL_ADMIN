<template>
  <div class="content__form" :class="{ hidden: formMode === false }">
    <div class="main__container form__container">
      <h1 class="form__title main__title">Thêm sản phẩm</h1>
      <hr />

      <div class="form__content">
        <form class="form__group">
          <label for="">Tên sách</label>
          <input placeholder="Nhập tên sách" type="text" />

          <label for="">Link ảnh sách </label>
          <input placeholder="Tìm ảnh sách và thêm link" type="text" />

          <label for="">Giá sách</label>
          <input placeholder="Nhập giá sách" type="text" />

          <label for="">Danh mục</label>
          <select class="form__categories" name="" id="">
            <option value="">Phật giáo</option>
          </select>

          <label for="">Giá sách</label>
          <input placeholder="Nhập giá sách" type="text" />

          <button class="form__btn--main main__btn">Thêm</button>
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
  props: ["formMode"],
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
