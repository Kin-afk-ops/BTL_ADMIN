<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">Tất cả danh mục</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleAdd" class="fa-solid fa-plus"></i>
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>

      <div class="content__filter c-4">
        <input type="text" placeholder="Nhập tên danh mục" />
      </div>
    </div>
    <hr />

    <div class="content__table--container">
      <ul class="content__table--container-list">
        <li
          class="content__table--container-item row no-gutters"
          v-for="category in categoriesInfo"
          :key="category._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" v-model="selected" />
          </div>
          <img class="img__main c-1" :src="category.image" alt="" />
          <div class="content__table--container-item-info c-4">
            <p class="info__top">{{ category.name }}</p>

            <p class="info__bottom">{{ category.path }}</p>
          </div>
          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <router-link :to="'danh-muc/edit/' + category._id" class="link">
              <i class="fa-solid fa-pen"></i>
            </router-link>
          </div>

          <add-cate-form
            :formValue="formValue"
            :formCateMode="formCateMode"
            @hidden="formCateMode = false"
          />
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AddCateForm from "./form/AddCateForm.vue";

export default {
  data() {
    return {
      selectAll: false,
      selected: [],
      modal: false,

      formCateMode: false,

      formValue: {
        title: "",
        btn: "Thêm",
      },

      categoriesInfo: [],
    };
  },

  components: {
    AddCateForm,
  },

  async created() {
    const res = await axios.get("/category");
    this.categoriesInfo = res.data;
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

    handleAdd() {
      this.formCateMode = true;
    },

    handleEdit() {
      this.formCateMode = true;
    },

    handleNotification() {
      this.formNotificationMode = true;
    },
  },
};
</script>
<style>
@import "./bass.css";
</style>
