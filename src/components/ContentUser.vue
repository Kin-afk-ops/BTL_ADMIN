<template>
  <div>
    <div class="content__table main__container">
      <div class="content__table--title main__title row no-gutters">
        <input
          type="checkbox"
          @click="select"
          v-model="selectAll"
          class="c-1"
        />
        <h1 class="main__title content__title">Danh sách khách hàng</h1>
        <div
          class="content__table--container-item-delete display__flex--center c-1"
        >
          <i @click="handleDelete" class="fa-solid fa-trash"></i>
        </div>

        <div class="content__filter c-4">
          <input type="text" placeholder="Nhập email người dùng" />
        </div>
      </div>
      <hr />

      <div class="content__table--container">
        <ul class="content__table--container-list">
          <li
            class="content__table--container-item row no-gutters"
            v-for="user in userData"
            :key="user._id"
          >
            <div
              class="content__table--container-item-input display__flex--center c-1"
            >
              <input type="checkbox" v-model="selected" />
            </div>
            <img
              class="img__main c-1"
              src="../assets/default/default_avatar.png"
              alt=""
            />
            <div class="content__table--container-item-info c-4">
              <p class="info__top">
                <i class="fa-solid fa-envelope"></i>
                {{ user.email }}
              </p>

              <p class="info__bottom">
                <i class="fa-solid fa-calendar-days"></i>
                {{ user.createdAt }}
              </p>
            </div>

            <div
              class="content__table--container-item-edit display__flex--center c-2"
            >
              <i
                @click="handleViewDisplay(user._id)"
                class="fa-solid fa-eye"
              ></i>
            </div>

            <div
              @click="handleNotification"
              class="content__table--container-item-notification display__flex--center c-2"
            >
              Gửi thông báo
            </div>

            <router-link
              :to="'/thong-bao/' + user._id"
              class="link content__table--container-item-notification display__flex--center c-2"
            >
              Xem thông báo
            </router-link>

            <content-delete
              :selected="selected"
              :modal="modal"
              @hidden="modal = false"
            />

            <user-form
              :userData="user"
              :formUserMode="formUserMode"
              @hidden="formUserMode = false"
            />
            <notification-form
              :userId="user._id"
              :formNotificationMode="formNotificationMode"
              @hidden="formNotificationMode = false"
            />

            <user-view
              :viewUserMode="viewUserMode"
              @hidden="viewUserMode = false"
              :userInfo="userInfo"
            />

            <router-view />
          </li>
          <hr />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import ContentDelete from "./ContentDelete";

import UserForm from "./form/UserForm";
import UserView from "./contentView/UserView";
import NotificationForm from "./form/NotificationForm";
export default {
  data() {
    return {
      userData: [],

      selectAll: false,
      selected: [],
      modal: false,
      formUserMode: false,
      formNotificationMode: false,
      viewUserMode: false,
      formValue: {
        title: "",
        btn: "Thêm",
      },

      userInfo: "",
    };
  },

  components: {
    ContentDelete,
    UserForm,
    NotificationForm,
    UserView,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.data.forEach((d) => {
          this.selected.push(d);
        });
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },
    handleEdit() {
      this.formUserMode = true;
    },

    handleNotification() {
      this.formNotificationMode = true;
    },

    async handleViewDisplay(id) {
      const resUserInfo = await axios.get(`info/${id}`);
      this.viewUserMode = true;
      this.userInfo = resUserInfo.data;
      console.log(resUserInfo);
    },
  },

  async beforeCreate() {
    const resUser = await axios.get("/user");
    this.userData = resUser.data;
  },
};
</script>
<style>
@import "./bass.css";
</style>
