<template>
  <div class="content__form">
    <div class="main__container form__container">
      <h1 class="form__title main__title">Chỉnh sửa thông tin sách</h1>
      <hr />

      <div class="form__content">
        <form class="form__group" @submit.prevent="handleSubmit">
          <label for="">Tên sách</label>
          <input
            v-model="bookForm.name"
            placeholder="Nhập tên sách"
            type="text"
          />

          <label for="">Link ảnh sách </label>
          <input ref="file" type="file" />

          <label for="">Giá sách</label>
          <input
            v-model="bookForm.price"
            placeholder="Nhập giá sách"
            type="text"
          />

          <label for="">Giảm giá</label>
          <input
            v-model="bookForm.discount"
            placeholder="Nhập giảm giá"
            type="text"
          />
          <label for="">Danh mục</label>

          <select
            class="form__categories"
            name=""
            id=""
            v-model="bookForm.categories"
          >
            <option
              v-for="cate in categories"
              :key="cate._id"
              :value="cate.path"
            >
              {{ cate.name }}
            </option>
          </select>

          <label for="">Tác giả</label>
          <input
            v-model="infoBookForm.infoBook.auth"
            placeholder="Nhập tác giả"
            type="text"
          />

          <label for="">Nhà xuất bản</label>
          <input
            v-model="infoBookForm.infoBook.publisher"
            placeholder="Nhập nhà xuất bản"
            type="text"
          />

          <label for="">Nhà phát hành</label>
          <input
            v-model="infoBookForm.infoBook.supplier"
            placeholder="Nhập nhà phát hành"
            type="text"
          />

          <label for="">Tên đầu sách</label>
          <input
            v-model="infoBookForm.infoBook.nameSeries"
            placeholder="Nhập tên đầu sách"
            type="text"
          />

          <label for="">Năm phát hành</label>
          <input
            v-model="infoBookForm.infoBook.publishingYear"
            placeholder="Nhập năm phát hành"
            type="text"
          />

          <label for="">Trọng lượng</label>
          <input
            v-model="infoBookForm.infoBook.weight"
            placeholder="Nhập trọng lượng"
            type="text"
          />

          <label for="">Kích thước</label>
          <input
            v-model="infoBookForm.infoBook.size"
            placeholder="Nhập kích thước"
            type="text"
          />

          <label for="">Hình thức</label>
          <select
            class="form__categories"
            name=""
            id=""
            v-model="infoBookForm.infoBook.form"
          >
            <option value="Bìa mềm">Bìa mềm</option>
            <option value="Bìa cứng">Bìa cứng</option>
          </select>
          <label for="">Số lượng</label>
          <input
            v-model="infoBookForm.infoBook.quantity"
            placeholder="Nhập số lượng"
            type="text"
          />

          <label for="">Số trang</label>
          <input
            v-model="infoBookForm.infoBook.numberPage"
            placeholder="Nhập số trang"
            type="text"
          />
          <label for="">Mô tả</label>
          <quill-editor
            class="editor-form"
            ref="commonRef"
            :options="options"
            v-model.trim="infoBookForm.infoBook.desc"
            @input="handleInput"
            @change="handleChange($event)"
          />

          <button class="form__btn--main main__btn" @click="handleAdd">
            Sửa
          </button>
          <button @click="handleHidden" class="form__btn--extra main__btn">
            Huỷ
          </button>
        </form>
      </div>
    </div>
    <div class="x-cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="handleHidden"></i>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      bookForm: {
        name: "",
        image: {
          path: "",
          publicId: "",
        },
        price: 0,
        discount: 0,

        categories: "",
      },
      infoBookForm: {
        infoBook: {
          publisher: "",
          supplier: "",
          nameSeries: "",
          desc: "",
          publishingYear: 0,
          weight: 0,
          size: "",
          form: "",
          numberPage: 0,
          quantity: 0,
        },
      },
      categories: [],
    };
  },

  async created() {
    const res1 = await axios.get(`/book/find/${this.$route.params.bookId}`);
    this.bookForm = res1.data;
    console.log(this.bookForm);

    const res2 = await axios.get(`/infoBook/${this.$route.params.bookId}`);
    this.infoBookForm = res2.data;
    console.log(this.infoBookForm);

    const res5 = await axios.get("/category");
    this.categories = res5.data;
  },

  methods: {
    handleHidden(e) {
      e.preventDefault();
      this.$router.back();
    },

    async handleSubmit() {
      if (this.$refs.file.files[0]) {
        const resImgDelete = await axios.delete(
          `/image/remove/${this.bookForm.image.publicId}`
        );
        console.log(resImgDelete);
        const uploadData = new FormData();
        uploadData.append("file", this.$refs.file.files[0], "file");
        const resImg = await axios.post("/image/upload", uploadData);
        this.bookForm.image.path = resImg.data.file.path;
        this.bookForm.image.publicId = resImg.data.file.filename;
      }

      console.log(this.bookForm.categories);

      const res3 = await axios.put(
        `/book/${this.$route.params.bookId}`,
        this.bookForm
      );
      console.log(res3);

      this.infoBookForm.infoBook.desc = this.$refs.commonRef.getHTML();

      const res4 = await axios.put(
        `/infoBook/${this.infoBookForm._id}`,
        this.infoBookForm
      );
      console.log(res4);

      alert("Sửa sách thành công");
      this.$router.back();
    },
  },
};
</script>
<style>
@import "./form.css";
</style>
