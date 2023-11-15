<template>
  <div class="content__form" :class="{ hidden: formUserMode === false }">
    <div class="main__container form__container">
      <h1 class="form__title main__title">Sửa thông tin khách hàng</h1>
      <hr />

      <div class="form__content">
        <form class="form__group" @submit.prevent="handleSubmit">
          <label for="">Email</label>
          <input placeholder="Nhập Email" type="text" v-model="form.email" />

          <label for="">Password</label>
          <input
            placeholder="Password của khách"
            type="password"
            v-model="form.password"
          />

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
import axios from "axios";

export default {
  props: ["formUserMode", "userData"],
  data() {
    return {
      id: this.userData._id,
      form: {
        email: this.userData.email,
        password: "",
      },
    };
  },
  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$emit("hidden");
    },

    async handleSubmit() {
      const res = await axios.put(`/staff/updateUser/${this.id}`, this.form);
      try {
        console.log(res);
        this.$emit("hidden");
        alert("Sửa thành công");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
