<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">Tất cả quyển sách</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleAdd" class="fa-solid fa-plus"></i>
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>

      <div class="content__filter c-4">
        <input type="text" placeholder="Nhập tên quyển sách" />
      </div>
    </div>
    <hr />

    <div class="content__table--container">
      <ul class="content__table--container-list" v-if="bookData.length !== 0">
        <li
          class="content__table--container-item row no-gutters"
          v-for="book of bookData"
          :key="book._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" v-model="selected" :value="book._id" />
          </div>
          <img class="img__main c-1" :src="book.image" alt="" />
          <div class="content__table--container-item-info c-4">
            <p class="info__top">
              {{ book.name }}
            </p>

            <p class="info__bottom">
              {{ book.price }}
            </p>
          </div>
          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <router-link :to="'/sach/edit/' + book._id" class="link">
              <i class="fa-solid fa-pen"></i
            ></router-link>
          </div>

          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <router-link :to="'/sach/view/' + book._id" class="link">
              <i class="fa-solid fa-eye"></i
            ></router-link>
          </div>

          <content-delete
            :selectAllMode="selectAllMode"
            :selected="selected"
            :modal="modal"
            @hidden="modal = false"
            :mode="mode"
          />
        </li>
        <hr />
      </ul>

      <div
        v-else
        class="main__title display__flex--center"
        style="height: 100%"
      >
        Không có sách trong kho
      </div>
    </div>

    <add-book-form
      :addFormBookMode="addFormBookMode"
      :formValue="formValue"
      @hidden="addFormBookMode = false"
    />
  </div>
</template>
<script>
import ContentDelete from "./ContentDelete";
import AddBookForm from "./form/AddBookForm";
import axios from "axios";

export default {
  data() {
    return {
      selectAll: false,
      selected: [],
      modal: false,
      selectAllMode: false,
      formBookMode: false,
      addFormBookMode: false,
      viewBookMode: false,
      formValue: {
        title: "",
        btn: "Thêm",
      },

      mode: "book",
      deleteAll: false,
      bookData: [],
    };
  },

  components: {
    ContentDelete,
    AddBookForm,
  },

  async beforeCreate() {
    const res = await axios.get("/book");
    this.bookData = res.data;
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.bookData.forEach((d) => {
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
      this.addFormBookMode = true;
      this.formValue.title = "Thêm sách";
    },

    handleViewDisplay(index) {
      this.viewBookMode = true;
      this.dataIndex = index;
      console.log(this.bookViewProp);
    },
  },

  computed: {
    bookViewProp() {
      return this.bookData[this.dataIndex];
    },
  },
};
</script>
<style>
@import "./bass.css";
</style>
