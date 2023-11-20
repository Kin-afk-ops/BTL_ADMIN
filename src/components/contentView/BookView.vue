<template>
  <div class="book__view main__container row">
    <div class="col c-5 book__view--left">
      <div class="book__view--img">
        <img alt="" :src="imgPath" />
      </div>
    </div>
    <div class="col c-7 book__view--right">
      <h1 class="book__view--title">
        {{ bookData.name }}
      </h1>
      <div class="row no-gutters book__view--content">
        <div class="book__view--content-left">
          <div class="book__view--price">
            <span class="book__view--price-buy">{{ currentPrice }} đ</span>
            <span class="book__view--price-cost">{{ bookData.price }}</span>
            <span class="book__view--price-percent"
              >-{{ bookData.discount }}%</span
            >
          </div>
          <div class="book__view--content row no-gutters">
            <div class="row no-gutters book__view--top">
              <div class="col c-6 book__view--top-left">
                <p>Mã hàng</p>
                <p>Tên nhà cung cấp</p>
                <p>Tác giả</p>
                <p>Nhà xuất bản</p>
                <p>Năm xuất bản</p>
                <p>Trọng lượng</p>
                <p>Kích thước bao bì</p>
                <p>Số trang</p>
                <p>Hình thức</p>
              </div>
              <div class="col c-6">
                <p>{{ bookData._id }}</p>
                <p>{{ bookInfo.publisher }}</p>
                <p>{{ bookInfo.auth }}</p>
                <p>{{ bookInfo.publisher }}</p>
                <p>{{ bookInfo.publishYear }}</p>
                <p>{{ bookInfo.weight }}</p>
                <p>{{ bookInfo.size }}</p>
                <p>{{ bookInfo.numberPage }}</p>
                <p>{{ bookInfo.form }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="book__desc--content"
        ref="productDescContent"
        v-html="bookInfo.desc"
      ></div>

      <div class="book__view--cancel">
        <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      bookData: {},
      imgPath: "",
      currentPrice: 0,
      bookInfo: {},
    };
  },
  async created() {
    const res1 = await axios.get(`/book/find/${this.$route.params.bookId}`);
    this.bookData = res1.data;
    this.imgPath = res1.data.image.path;
    console.log(this.bookData);
    this.currentPrice =
      this.bookData.price -
      (this.bookData.price * this.bookData.discount) / 100;

    const res2 = await axios.get(`/infoBook/${this.$route.params.bookId}`);
    this.bookInfo = res2.data.infoBook;
  },

  methods: {
    viewHidden() {
      this.$router.back();
    },
  },
};
</script>
<style>
.book__view {
  padding: 20px;
  position: absolute;
  z-index: 999;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #ccc;
  width: 100%;
}

.book__view--left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.book__view--img {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.book__view--img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.book__view--right {
  width: 80%;
}

.book__view--title {
  font-size: 25px;
  font-weight: 500;
}

.book__view--content-left p {
  padding-bottom: 10px;
}

.book__view--content-right {
  padding-bottom: 10px;
}

.book__view--price {
  display: flex;
  align-items: center;
}

.book__view--price span {
  margin-right: 20px;
}

.book__view--price-buy {
  font-size: 35px;
  font-weight: 700;
  color: var(--primary-color);
}

.book__view--price-cost {
  text-decoration: line-through;
}

.book__view--price-percent {
  padding: 10px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 10px;
}

.book__view--content {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px;
}

.book__view--top p {
  font-size: 15px;

  padding-bottom: 10px;
  color: #333;
}

.book__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.book__view--cancel:hover {
  color: var(--primary-color);
}

.book__desc--content {
  padding: 20px;
  font-size: 16px;
  transition: 0.3s linear;
}

.book__desc--content p {
  text-align: justify;
  margin-bottom: 20px;
  word-spacing: 2px;
  color: #333;
}
</style>
