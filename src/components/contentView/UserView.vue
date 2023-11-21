<template>
  <div class="customer__info--wrap">
    <div
      v-if="userInfo.lastName"
      class="customer__info--wrap display__flex--center"
    >
      <div class="customer__info col c-9 main__container">
        <img
          src="../../assets/default/client_avatar.png"
          alt=""
          class="customer__info--avatar"
        />

        <div class="customer__info--info">
          <p>
            <i class="fa-solid fa-circle-info"></i>
            {{ userInfo.lastName + " " + userInfo.firstName }}
          </p>

          <p>
            <i class="fa-solid fa-phone"></i>
            {{ userInfo.phone }}
          </p>
          <p>
            <i class="fa-solid fa-person"></i>
            {{ userInfo.sex }}
          </p>
          <p>
            <i class="fa-solid fa-cake-candles"></i>
            {{ userInfo.birthday }}
          </p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            {{ userInfo.address }}
          </p>
        </div>
        <div class="user__view--cancel">
          <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
        </div>
      </div>
    </div>
    <div
      v-if="!userInfo.lastName"
      class="main__title non__user display__flex--center"
    >
      Khách hàng chưa tạo thông tin cá nhân
    </div>
    <div class="notification__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    viewHidden() {
      this.$router.back();
    },
  },
  async beforeCreate() {
    const res = await axios.get(`/info/${this.$route.params.userId}`);
    try {
      this.userInfo = res.data;
    } catch (error) {
      console.log(res);
    }
  },
};
</script>

<style>
.customer__info--wrap {
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  min-height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
}

.customer__info {
  display: flex;
  align-items: center;
  border-left: 1px solid #ccc;
  width: 50%;
  position: fixed;
  z-index: 999;
  top: 20px;
  border: 1px solid #ccc;
  margin-top: 0;
}

.customer__info--avatar {
  width: 200px;
  /* height: 215px; */
  object-fit: contain;
  margin-left: 20px;
}

.customer__info--info {
  font-size: 18px;
  margin-left: 30px;
}

.customer__info--info p {
  padding: 10px 0;
}

.customer__info--info i {
  margin-right: 20px;
}
.user__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.user__view--cancel:hover {
  color: var(--primary-color);
}

.non__user {
  height: 100%;
}

.notification__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.notification__view--cancel:hover {
  color: var(--primary-color);
}
</style>
