<template>
  <div class="order__view main__container">
    <div class="order__view--container">
      <ul class="order__view--container-list">
        <li
          class="order__view--container-item row no-gutters"
          v-if="book in orderInfo.books"
        >
          <img class="img__main c-2" :src="book.image" alt="" />
          <div class="order__view--container-item-info c-4">
            <p class="info__title">
              {{ book.name }}
            </p>
            <div class="info__money">
              <p class="info__money--all">{{ book.currentPrice }}</p>
            </div>
          </div>
          <div
            class="order__view--container-item-quality display__flex--center c-2"
          >
            <div>{{ book.quantity }}</div>
          </div>

          <div
            class="order__view--container-item-money display__flex--center c-2"
          >
            <router-link :to="'sach/view/' + book.bookId">
              Xem thông tin sách
            </router-link>
          </div>
        </li>
        <hr />
      </ul>
    </div>
    <div class="order__view--client">
      <p><b>Tên người nhận:</b> {{ orderInfo.clientName }}</p>
      <p><b>Số điện thoại người nhận:</b> {{ orderInfo.phone }}</p>
      <p><b>Địa chỉ người nhận:</b>{{ orderInfo.address }}</p>
      <p><b>Tổng giá tiền:</b> {{ orderInfo.amount }}</p>
      <p><b>Số tiền thu hộ:</b> {{ orderInfo.collected }}</p>
      <p><b>Trạng thái:</b>{{ orderInfo.status }}</p>
    </div>

    <div
      class="content__table--container-item-change display__flex--center c-3"
    >
      <form action="" @submit.prevent="handleSubmit">
        <label for="">Chuyển trạng thái</label>
        <select
          class="content__table--container-select"
          v-model="selectValue"
          name=""
          id=""
        >
          <option value="Đang chuẩn bị hàng">Đang chuẩn bị hàng</option>
          <option value="Đang giao">Đang giao</option>
          <option value="Đã giao">Đã giao</option>
        </select>
        <button class="content__table--btn main__btn">Chuyển</button>
      </form>
    </div>
    <div class="order__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      orderInfo: {},
      bookInfo: [],
      orderForm: {},
      selectValue: "",
    };
  },

  async beforeCreate() {
    const res1 = await axios.get(`/order/find/${this.$route.params.orderId}`);
    this.orderInfo = res1.data;
    this.orderForm = this.orderInfo;
  },

  methods: {
    viewHidden() {
      this.$router.back();
    },
    async handleSubmit() {
      this.orderForm.status = this.selectValue;
      const res = await axios.put(
        `/order/${this.$route.params.orderId}`,
        this.orderForm
      );
      console.log(res);
    },
  },
};
</script>
<style>
.order__view {
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  min-height: 400px;
  background-color: #d2cece;
  border: 1px solid #ccc;
  width: 80%;
}

.order__view--container-list {
  list-style: none;
}

.order__view--container-item {
  padding: 20px 0;
  height: 100px;
}

.order__view--container-item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info__title {
  font-weight: 600;
}

.info__money {
  display: flex;
  align-items: center;
}

.info__money--all {
  margin-right: 20px;
  font-weight: 600;
}

.info__money--discount {
  font-size: 14px;
  text-decoration: line-through;
  color: #ccc;
}

.order__view--container-item-quality {
  font-size: 18px;
}

.order__view--container-item-quality div {
  border: 1px solid #ccc;
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.order__view--container-item-money {
  font-size: 18px;
  font-weight: 600;
  color: var(--client-color);
}

.order__view--client {
  padding: 30px;
}

.order__view--client p {
  padding: 10px 5px;
  font-size: 18px;
}

.order__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.order__view--cancel:hover {
  color: var(--primary-color);
}

.content__table--container-item-change {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.content__table--container-item-change form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content__table--container-select {
  height: 40px;
}

.content__table--container-select {
  font-size: 16px;
}
</style>
