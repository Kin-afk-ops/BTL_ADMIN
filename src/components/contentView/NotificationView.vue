<template>
  <div class="notification__view--wrap">
    <div class="notification__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>

    <div v-if="notificationInfo.length !== 0" class="height100">
      <div
        class="notification__view main__container"
        v-for="(noti, index) in notificationInfo"
        :key="noti._id"
      >
        <h2 class="notification__view--title main__title">
          {{ noti.title }}
        </h2>

        <div class="main__title">Đường dẫn</div>
        <p class="notification__view--content">{{ noti.path }}</p>

        <div class="main__title">Nội dung:</div>
        <p class="notification__view--content">
          {{ noti.content }}
        </p>

        <i @click="handleDelete(index)" class="fa-solid fa-trash"></i>
      </div>
    </div>
    <div
      v-if="notificationInfo.length === 0"
      class="display__flex--center main__title notification__view--nodata"
    >
      Không có thông báo
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      notificationInfo: [],
      notificationId: "",
      notificationDelete: {},
    };
  },

  async created() {
    try {
      const res = await axios.get(`/notification/${this.$route.params.userId}`);
      this.notificationInfo = res.data.notify;
      this.notificationId = res.data._id;
      console.log(this.notificationId);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    viewHidden() {
      this.$router.push("/khach-hang");
    },

    async handleDelete(index) {
      this.notificationDelete = this.notificationInfo[index];

      const resDelete = await axios.delete(
        `/notification/delete/${this.notificationId}/${this.notificationDelete._id}`
      );
      alert(resDelete.message);
      window.location.reload();
    },
  },
};
</script>
<style>
.notification__view--wrap {
  padding: 20px;
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  min-height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
}

.notification__view {
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 0 !important;
}

.notification__view i {
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
}

.notification__view i:hover {
  color: var(--primary-color);
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

.notification__view--content {
  padding: 10px 20px;
}

.notification__view--nodata {
  height: 100%;
}
</style>
