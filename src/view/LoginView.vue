<template>
  <div class="login">
    <div class="main__container login__container">
      <h1 class="login__title main__title">Đăng nhập</h1>
      <hr />

      <div class="login__content">
        <form class="login__form" @submit.prevent="handleSubmit">
          <label for="name">Tên tài khoản</label>
          <input
            v-model="form.username"
            id="name"
            placeholder="Nhập tên tài khoản"
            type="text"
          />

          <label for="password">Mật khẩu</label>
          <div class="login__password">
            <input
              v-model="form.password"
              id="password"
              placeholder="Nhập mật khẩu"
              :type="passwordType"
            />
            <i @click="handleHiddenPassword" class="fa-solid fa-eye"></i>
          </div>

          <p style="color: red">{{ this.errorMessage }}</p>

          <button class="main__btn login__btn--main">Đăng nhập</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errorMessage: "",

      passwordType: "password",
      passwordHidden: true,
    };
  },

  methods: {
    async handleSubmit() {
      try {
        let res = await axios.post("/auth/staff/login", this.form);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("staffId", res.data._id);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("position", res.data.position);
        this.$store.dispatch("staff", res.data);
        window.location.replace("/");
      } catch (error) {
        this.errorMessage = "Sai tên tài khoản hoặc password";
      }
    },

    handleHiddenPassword() {
      this.passwordHidden = !this.passwordHidden;
      if (this.passwordHidden === false) {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
};
</script>
<style>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.login__container {
  border: 1px solid #ccc;
  width: 450px;
  margin-top: 0 !important;
}

.login__title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.login__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__form {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.login__form label {
  font-size: 18px;
  font-weight: 600;
  padding: 20px 0 5px;
}

.login__form input {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.login__password {
  width: 100%;
  height: 40px;
  display: flex;

  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
}

.login__password input {
  width: 90%;
  height: 100%;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  border: none;
}

.login__password i {
  font-size: 20px;
  cursor: pointer;
}

.login__password i:hover {
  color: var(--primary-color);
}

.login__btn--main {
  margin-top: 20px;
  background-color: var(--primary-color);
  border: none;
  color: white;
}
</style>
