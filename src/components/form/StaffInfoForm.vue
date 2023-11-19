<template>
  <div class="content__form staff__info">
    <div class="main__container form__container staff__info--form">
      <h1 class="form__title main__title">Thông tin nhân viên</h1>
      <hr />

      <div class="staff__info--mode">
        <button
          class="main__btn"
          :class="{ staff__active: mode === 'view' }"
          @click="mode = 'view'"
        >
          Xem
        </button>
        <button
          class="main__btn"
          :class="{ staff__active: mode === 'edit' }"
          @click="mode = 'edit'"
        >
          Sửa
        </button>
      </div>

      <div class="staff__info--form-content">
        <form
          class="staff__info--form-group form__group"
          @submit.prevent="handleSubmitStaff"
        >
          <label for="">Tên tài khoản</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffForm.username"
            placeholder="Nhập tên tài khoản"
            type="text"
          />
          <p v-if="mode === 'view'">{{ staff.username }}</p>

          <label for="">Password </label>
          <input
            v-if="mode !== 'view'"
            v-model="staffForm.password"
            placeholder="Nhập password"
            type="password"
          />

          <p v-if="mode === 'view'" class="staff__form--password">
            {{ staff.password }}
          </p>

          <button class="form__btn--main main__btn" v-if="mode !== 'view'">
            Sửa thông tin tài khoản
          </button>

          <div class="main__title" v-if="mode === 'view'">
            Lương:
            <p class="staff__wage">{{ staffInfoForm.wage }}</p>
          </div>
        </form>

        <form
          class="staff__info--form-group form__group"
          @submit.prevent="handleSubmitInfoStaff"
        >
          <label for="">Họ</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffInfoForm.lastName"
            placeholder="Nhập họ"
            type="text"
          />

          <p v-if="mode === 'view'">{{ staffIInfo.lastName }}</p>

          <label for="">Tên</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffInfoForm.firstName"
            placeholder="Nhập tên"
            type="text"
          />
          <p v-if="mode === 'view'">{{ staffIInfo.firstName }}</p>

          <label for="">Số điện thoại</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffInfoForm.phone"
            placeholder="Nhập số điện thoại"
            type="text"
          />
          <p v-if="mode === 'view'">{{ staffIInfo.phone }}</p>

          <label for="">Giới tính</label>
          <div>
            <input
              v-if="mode !== 'view'"
              v-model="staffInfoForm.sex"
              class="staff__sex"
              type="radio"
              name="sex"
              value="Nam"
            />
            <span v-if="mode !== 'view'">Nam</span>
          </div>
          <div>
            <input
              v-if="mode !== 'view'"
              v-model="staffInfoForm.sex"
              class="staff__sex"
              type="radio"
              name="sex"
              value="Nữ"
            />
            <span v-if="mode !== 'view'">Nữ</span>
          </div>
          <p v-if="mode === 'view'">{{ staffIInfo.sex }}</p>

          <label for="">Ngày tháng năm sinh</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffInfoForm.birthday"
            type="date"
          />
          <p v-if="mode === 'view'">{{ staffIInfo.birthday }}</p>

          <label for="">Địa chỉ</label>
          <input
            v-if="mode !== 'view'"
            v-model="staffInfoForm.address"
            placeholder="Nhập địa chỉ"
            type="text"
          />

          <p v-if="mode === 'view'">{{ staffIInfo.address }}</p>

          <button class="form__btn--main main__btn" v-if="mode !== 'view'">
            Sửa thông tin
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
  data() {
    return {
      staff: {},

      staffIInfo: {},
      staffForm: {
        username: "",
        password: "",
      },

      staffInfoForm: {
        staffId: "",
        lastName: "",
        firstName: "",
        phone: "",
        sex: "",
        birthday: "",
        address: "",
        wage: "",
      },
      mode: "view",
      statusInfo: false,
    };
  },

  async created() {
    this.staffForm.username = this.username;

    console.log(this.staff);

    try {
      const res2 = await axios.get(`/staff/find/${this.$route.params.staffId}`);
      this.staff = res2.data;
      this.staffForm = res2.data;
      const res = await axios.get(`/infoStaff/${this.$route.params.staffId}`);
      this.staffIInfo = res.data;
      this.staffInfoForm = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$router.back();
    },

    async handleSubmitStaff() {
      const res = await axios.put(
        `/staff/updateStaff/${this.$route.params.staffId}`,
        this.staffForm
      );
      console.log(res);
      alert("Đã cập nhật tài khoản");
    },

    async handleSubmitInfoStaff() {
      this.staffInfoForm.staffId = this.$route.params.staffId;

      try {
        const res3 = await axios.put(
          `infoStaff/${this.staffIInfo._id}`,
          this.staffInfoForm
        );
        console.log(res3);
        alert("Sửa thông tin thành công");
        this.mode = "view";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
@import "./form.css";

.staff__info {
  width: 100%;
}

.staff__info--form {
  width: 100%;
}

.staff__info--form-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.staff__info--form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
}

.staff__info--mode {
  display: flex;
  justify-content: flex-end;
}

.staff__info--mode button {
  background-color: white;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  margin-right: 20px;
}

.staff__active {
  color: white !important;
  background-color: var(--primary-color) !important;
}

.staff__sex {
  width: 20px !important;
  height: 20px !important;
}

.staff__sex + span {
  margin-left: 10px;
}

.staff__wage {
  color: var(--primary-color);
  font-size: 20px;
}

.staff__form--password {
  user-select: text;
}
</style>
