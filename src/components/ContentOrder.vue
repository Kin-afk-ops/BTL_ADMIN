<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">Tất cả đơn hàng</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>

      <div class="content__filter c-4">
        <input
          v-model="orderSearch"
          type="text"
          placeholder="Nhập ngày tạo đơn hàng"
        />
      </div>
    </div>
    <hr />

    <div class="content__table--container" v-if="orderInfo.length !== 0">
      <ul class="content__table--container-list">
        <li
          class="content__table--container-item row no-gutters"
          v-for="order in orderFilter"
          :key="order._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" v-model="selected" :value="order._id" />
          </div>
          <div class="content__table--container-item-info c-4">
            <p class="info__top">
              user ID:
              {{ order.userId }}
            </p>

            <p class="info__bottom">
              <i class="fa-solid fa-calendar-days"> </i>
              {{ order.createdAt }}
            </p>
          </div>

          <router-link
            :to="'don-hang/view/' + order._id"
            class="display__flex--center link content__table--container-item-notification c-2"
          >
            Xem đơn hàng</router-link
          >

          <router-link
            :to="'khach-hang/view/' + order.userId"
            class="display__flex--center link content__table--container-item-notification c-3"
          >
            Xem thông tin khách hàng</router-link
          >

          <content-delete
            :selected="selected"
            :modal="modal"
            @hidden="modal = false"
            :selectAll="selectAll"
            :mode="mode"
          />
        </li>
        <hr />
      </ul>
    </div>
  </div>
</template>
<script>
import ContentDelete from "./ContentDelete";

import axios from "axios";

export default {
  data() {
    return {
      selectAll: false,
      selected: [],
      modal: false,
      orderInfo: [],
      mode: "order",
      orderSearch: "",
    };
  },

  components: {
    ContentDelete,
  },

  async created() {
    const res = await axios.get("/order");
    this.orderInfo = res.data;
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.orderInfo.forEach((d) => {
          this.selected.push(d._id);
        });
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },
  },

  computed: {
    orderFilter() {
      return this.orderInfo.filter((o) =>
        o.createdAt.toLowerCase().includes(this.orderSearch.toLowerCase())
      );
    },
  },
};
</script>

<style>
@import "./bass.css";
</style>
