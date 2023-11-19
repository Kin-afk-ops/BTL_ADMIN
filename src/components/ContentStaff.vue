<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">Quản lí nhân viên</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleAdd" class="fa-solid fa-plus"></i>
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>

      <div class="content__filter c-4">
        <input
          v-model="staffSearch"
          type="text"
          placeholder="Nhập tên tài khoản"
        />
      </div>
    </div>
    <hr />

    <div class="content__table--container">
      <ul class="content__table--container-list">
        <li
          class="content__table--container-item row no-gutters"
          v-for="staff in staffInfo"
          :key="staff._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" v-model="selected" :value="staff._id" />
          </div>

          <div class="content__table--container-item-info c-4">
            <p class="info__top">
              {{ staff.username }}
            </p>

            <p class="info__bottom">
              {{ staff.createAt }}
            </p>
          </div>

          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <router-link
              :to="'nhan-vien/view/' + staff._id"
              class="link content__table--container-item-notification"
            >
              Xem thông tin</router-link
            >
          </div>

          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <router-link
              :to="'quan-ly-nhan-vien/luong/' + staff._id"
              class="link content__table--container-item-notification"
            >
              Lương</router-link
            >
          </div>
          <content-delete
            :selectAllMode="selectAllMode"
            :mode="mode"
            :selected="selected"
            :modal="modal"
            @hidden="modal = false"
          />
        </li>

        <hr />
      </ul>

      <staff-form
        :formStaffMode="formStaffMode"
        @hidden="formStaffMode = false"
      />
    </div>
  </div>
</template>
<script>
import ContentDelete from "./ContentDelete";

import StaffForm from "./form/StaffForm";
import axios from "axios";
export default {
  data() {
    return {
      selectAllMode: false,
      selectAll: false,
      selected: [],
      modal: false,

      formStaffMode: false,

      formValue: {
        title: "",
        btn: "Thêm",
      },
      staffInfo: [],
      mode: "staff",
    };
  },

  async created() {
    try {
      const res = await axios.get("/boss");
      this.staffInfo = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  components: {
    StaffForm,
    ContentDelete,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.staffInfo.forEach((d) => {
          this.selected.push(d._id);
        });

        this.selectAllMode = true;
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },

    handleAdd() {
      this.formStaffMode = true;
    },
  },
};
</script>
<style>
@import "./bass.css";
</style>
