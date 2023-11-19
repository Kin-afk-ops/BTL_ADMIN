<template>
  <div class="staff__view main__container">
    <h3 class="main__title staff__view--title">Tạo tài khoản</h3>
    <hr />
    <form @submit.prevent="handleSubmit" class="staff__view--account">
      <label for="">Tên tài khoản</label>
      <input
        v-model="staffInfoForm.wage"
        type="text"
        placeholder="Nhập số lương"
      />
      <button class="main__btn">Thay đỏi lương</button>
    </form>

    <div class="x-cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="handleHidden"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isSuccess: false,
      isError: false,

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
  async created() {
    const res = await axios.get(`/infoStaff/${this.$route.params.staffId}`);
    this.staffInfoForm = res.data;
    console.log(this.staffInfoForm);
  },

  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$router.back();
    },
    async handleSubmit() {
      try {
        const res = await axios.put(
          `/infoStaff/${this.staffInfoForm._id}`,
          this.staffInfoForm
        );
        console.log(res.data);
        alert("Thay đổi lương thành công");
        this.$router.push(`/nhan-vien/view/${this.$route.params.staffId}`);
      } catch (error) {
        console.log(error);
        console.log(error);
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
