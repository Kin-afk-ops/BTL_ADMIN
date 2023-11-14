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

          <label for="">Nhà xuất bản</label>
          <input placeholder="Nhập nhà xuất bản" type="text" />

          <label for="">Nhà phát hành</label>
          <input placeholder="Nhập nhà phát hành" type="text" />

          <label for="">Tên đầu sách</label>
          <input placeholder="Nhập tên đầu sách" type="text" />

          <label for="">Trọng lượng</label>
          <input placeholder="Nhập trọng lượng" type="text" />

          <label for="">Kích thước</label>
          <input placeholder="Nhập kích thước" type="text" />

          <label for="">Hình thức</label>
          <select class="form__categories" name="" id="">
            <option value="">Bìa mềm</option>
            <option value="">Bìa cứng</option>
          </select>

          <label for="">Số trang</label>
          <input placeholder="Nhập số trang" type="text" />
          <label for="">Mô tả</label>
          <quill-editor
            class="editor-form"
            ref="commonRef"
            :options="options"
            v-model.trim="content"
            @input="handleInput"
            @change="handleChange($event)"
          />

          <button class="form__btn--main main__btn" @click="handleAdd">
            Thêm
          </button>
          <button @click="handleHidden" class="form__btn--extra main__btn">
            Huỷ
          </button>
        </form>
      </div>
    </div>
    <div class="x-cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="handleHidden"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["formMode"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$emit("hidden");
    },
    handleAdd(e) {
      e.preventDefault();
      console.log(this.$refs.commonRef.getHTML());
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
