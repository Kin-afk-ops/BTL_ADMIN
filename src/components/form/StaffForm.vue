<template>
  <div class="staff__view main__container" :class="{ hidden: !formStaffMode }">
    <h3 class="main__title staff__view--title">Tạo tài khoản</h3>
    <hr />
    <form @submit.prevent="handleSubmit" class="staff__view--account">
      <label for="">Tên tài khoản</label>
      <input
        v-model="staffForm.username"
        type="text"
        placeholder="Nhập tên tài khoản"
      />
      <button class="main__btn">Tạo tài khoản</button>
      <p><b>Mật khẩu là:</b></p>
      <div class="staff__password">{{ staffForm.password }}</div>
      <p class="staff__success" v-if="isSuccess">
        Nhân viên đã được tạo thành công
      </p>
      <p class="staff__error" v-if="isError">Có lỗi hãy kiểm tra lại</p>
    </form>

    <div class="x-cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="handleHidden"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["formStaffMode"],
  data() {
    return {
      isSuccess: false,
      isError: false,

      staffForm: {
        username: "",
        password: "",
      },
      staffInfoForm: {
        staffId: "",
        lastName: " ",
        firstName: " ",
        phone: " ",
        sex: " ",
        birthday: " ",
        address: " ",
        wage: 0,
      },
    };
  },
  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$emit("hidden");
      window.location.reload();
    },
    async handleSubmit() {
      this.staffForm.password = Math.random().toString(36).substring(2, 10);

      try {
        const res = await axios.post("/auth/staff/create", this.staffForm);
        console.log(res);
        this.staffInfoForm.staffId = res.data._id;

        const res2 = await axios.post("/infoStaff", this.staffInfoForm);
        console.log(res2);
        this.isSuccess = true;
      } catch (error) {
        console.log(error);
        this.isError = true;
      }
    },
  },
};
</script>
<style>
.staff__view {
  width: 50%;
  border: 1px solid #ccc;
  position: absolute;
  top: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.staff__view--title {
  font-size: 25px;
}

.staff__view--account {
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.staff__view--account label {
  font-weight: 600;
}

.staff__view--account input {
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding-left: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.staff__view--account button {
  color: white;
  background-color: var(--primary-color);
  border: none;
  margin-top: 20px;
}

.staff__view--account p {
  padding: 10px 0;
}

.staff__success {
  color: green;
}

.staff__error {
  color: red;
}

.staff__password {
  font-weight: 600;
  font-size: 18px;
  user-select: text;
}

.x-cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.x-cancel:hover {
  color: var(--primary-color);
}
</style>
