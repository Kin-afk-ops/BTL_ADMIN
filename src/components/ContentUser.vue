<template>
  <div class="height100">
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
          <input
            v-model="userSearch"
            type="text"
            placeholder="Nhập email người dùng"
          />
        </div>
      </div>
      <hr />

      <div class="content__table--container" v-if="userData.length !== 0">
        <ul class="content__table--container-list">
          <li
            class="content__table--container-item row no-gutters"
            v-for="user in filterUser"
            :key="user._id"
          >
            <div
              class="content__table--container-item-input display__flex--center c-1"
            >
              <input type="checkbox" v-model="selected" :value="user._id" />
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
              <router-link :to="'/khach-hang/view/' + user._id" class="link">
                <i class="fa-solid fa-eye"></i>
              </router-link>
            </div>

            <div
              @click="handleNotification"
              class="content__table--container-item-notification display__flex--center c-2"
            >
              Gửi thông báo
            </div>

            <router-link
              :to="'/thong-bao/view/' + user._id"
              class="display__flex--center link content__table--container-item-notification c-2"
            >
              Xem thông báo
            </router-link>

            <content-delete
              :selected="selected"
              :modal="modal"
              @hidden="modal = false"
              :mode="mode"
              :selectAll="selectAll"
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
          </li>
          <hr />
        </ul>
      </div>

      <div
        v-else
        class="main__title display__flex--center"
        style="height: 100%"
      >
        Không có khách hàng!
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import ContentDelete from "./ContentDelete";

import UserForm from "./form/UserForm";
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

      mode: "user",
      userSearch: "",
    };
  },

  components: {
    ContentDelete,
    UserForm,
    NotificationForm,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.userData.forEach((d) => {
          this.selected.push(d._id);
        });
        this.selectAll = true;
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
  },

  async created() {
    const resUser = await axios.get("/user");
    this.userData = resUser.data;
  },
  computed: {
    filterUser() {
      return this.userData.filter((u) =>
        u.email.toLowerCase().includes(this.userSearch.toLowerCase())
      );
    },
  },
};
</script>
<style>
@import "./bass.css";
</style>
