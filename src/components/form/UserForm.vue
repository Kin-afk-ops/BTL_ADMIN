<template>
  <div class="content__form" :class="{ hidden: formUserMode === false }">
    <div class="main__container form__container">
      <h1 class="form__title main__title">Sửa thông tin khách hàng</h1>
      <hr />

      <div class="form__content">
        <form class="form__group">
          <label for="">Email</label>
          <input placeholder="Nhập Email" type="text" />

          <label for="">Password</label>
          <input placeholder="Password của khách" type="password" />

          <button class="form__btn--main main__btn" @click="handleAdd">
            Sửa
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
  props: ["formUserMode"],
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
