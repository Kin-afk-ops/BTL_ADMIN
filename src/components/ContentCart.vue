<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <h1 class="main__title content__title">
        Những khách hàng đã tạo giỏ hàng
      </h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      ></div>

      <div class="content__filter c-4">
        <input type="text" placeholder="Nhập" />
      </div>
    </div>
    <hr />

    <div class="content__table--container">
      <ul class="content__table--container-list" v-if="cartInfo.length !== 0">
        <li
          class="content__table--container-item row no-gutters"
          v-for="cart in cartInfo"
          :key="cart._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          ></div>
          <i class="fa-solid fa-cart-shopping"></i>
          <div class="content__table--container-item-info c-4">
            <p class="info__top">
              {{ cart.userId }}
            </p>
          </div>

          <div class="content__table--container-item-info c-2">
            <div class="info__top">
              <router-link :to="'/khach-hang/view' + cart.userId"
                >xem thông tin khách hàng</router-link
              >
            </div>
          </div>
        </li>
        <hr />
      </ul>

      <p
        class="main__title display__flex--center"
        style="height: 100%"
        v-if="cartInfo.length === 0"
      >
        Chưa có khách hàng nào tạo đơn hàng!
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cartInfo: [],
    };
  },

  async created() {
    const res = await axios.get("/cart");
    this.cartInfo = res.data;
  },
};
</script>
<style>
@import "./bass.css";
</style>
