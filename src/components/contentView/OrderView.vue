<template>
  <div class="order__view main__container" :class="{ hidden: !viewOrderMode }">
    <div class="order__view--container">
      <ul class="order__view--container-list">
        <li class="order__view--container-item row no-gutters">
          <img
            class="img__main c-2"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="order__view--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022) 1
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="order__view--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="order__view--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
        <hr />
      </ul>
    </div>
    <div class="order__view--client">
      <p><b>Tên người nhận:</b> Nguyễn Vũ Linh</p>
      <p><b>Số điện thoại người nhận:</b> 0589443320</p>
      <p><b>Địa chỉ người nhận:</b> Mậu Thân, Cần Thơ</p>
      <p><b>Tổng giá tiền:</b> 360000đ</p>
      <p><b>Số tiền thu hộ:</b> 360000đ</p>
      <p><b>Trạng thái:</b> Đang giao hàng - Hãy chờ một vài ngày</p>
    </div>

    <div class="order__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["viewOrderMode"],
  methods: {
    viewHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
<style>
.order__view {
  position: fixed;
  top: 20px;
  z-index: 999;
  width: 70%;
  border: 1px solid #ccc;
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
</style>
