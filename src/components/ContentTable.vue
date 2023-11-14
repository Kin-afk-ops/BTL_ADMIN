<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input
        v-if="mode.type !== 'cart'"
        type="checkbox"
        @click="select"
        v-model="selectAll"
        class="c-1"
      />
      <h1 class="main__title content__title">{{ mode.title }}</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i v-if="addMode" @click="handleAdd" class="fa-solid fa-plus"></i>
        <i
          v-if="deleteMode"
          @click="handleDelete"
          class="fa-solid fa-trash"
        ></i>
      </div>

      <div class="content__filter c-4">
        <input type="text" :placeholder="mode.placeholder" />
      </div>
    </div>
    <hr />

    <div class="content__table--container">
      <ul class="content__table--container-list">
        <li class="content__table--container-item row no-gutters">
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input
              v-if="mode.type !== 'cart'"
              type="checkbox"
              value="1"
              v-model="selected"
            />
          </div>
          <img
            v-if="mode.type !== 'notification'"
            class="img__main c-1"
            src="../assets/default/default_avatar.png"
            alt=""
          />
          <div class="content__table--container-item-info c-4">
            <p class="info__top" v-if="mode.type !== 'notification'">
              <i v-if="mode.type === 'user'" class="fa-solid fa-envelope"></i
              >Linh@gmail.com
            </p>

            <p class="info__bottom" v-if="mode.type !== 'notification'">
              <i v-if="mode.type === 'user'" class="fa-solid fa-phone"></i
              >0589443320
            </p>

            <div class="info__bottom" v-if="mode.type === 'notification'">
              <p class="info__bottom--title">Tiêu đề thông báo</p>
              <p class="info__bottom--content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                atque totam iste, expedita corrupti hic amet soluta earum magnam
                corporis sed tempore assumenda placeat modi doloribus nostrum
                aliquid, facere culpa!
              </p>
            </div>
          </div>
          <div
            v-if="editMode"
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <i @click="handleEdit" class="fa-solid fa-pen"></i>
          </div>

          <div
            v-if="viewMode"
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <i @click="handleViewDisplay" class="fa-solid fa-eye"></i>
          </div>

          <div
            @click="handleNotification"
            v-if="mode.type === 'user'"
            class="content__table--container-item-notification display__flex--center c-2"
          >
            Gửi thông báo
          </div>

          <div
            v-if="mode.type === 'order'"
            @click="handleViewDisplay"
            class="content__table--container-item-notification display__flex--center c-2"
          >
            Xem đơn hàng
          </div>
          <div
            v-if="mode.type === 'order'"
            class="content__table--container-item-change display__flex--center c-3"
          >
            <form action="">
              <label for="">Chuyển trạng thái</label>
              <select class="content__table--container-select" name="" id="">
                <option value="">Đang chuẩn bị hàng</option>
                <option value="">Đang giao</option>
                <option value="">Đã giao</option>
              </select>
              <button class="content__table--btn main__btn">Chuyển</button>
            </form>
          </div>
        </li>
        <hr />

        <li class="content__table--container-item row no-gutters">
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" value="2" v-model="selected" />
          </div>
          <img
            class="img__main c-1"
            src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935278607311.jpg"
            alt=""
          />
          <div class="content__table--container-item-info c-4">
            <p class="info__title">
              Không Diệt Không Sinh Đừng Sợ Hãi (Tái Bản 2022)
            </p>
            <div class="info__money">
              <p class="info__money--all">60.000đ</p>
              <p class="info__money--discount">110.000đ</p>
            </div>
          </div>
          <div
            class="content__table--container-item-quality display__flex--center c-2"
          >
            <div>1</div>
          </div>

          <div
            class="content__table--container-item-money display__flex--center c-2"
          >
            60.000đ
          </div>
        </li>
      </ul>
    </div>
    <content-delete
      :selected="selected"
      :modal="modal"
      @hidden="modal = false"
    />
    <book-form :formMode="formMode" @hidden="formMode = false" />
    <notification-form
      :formNotificationMode="formNotificationMode"
      @hidden="formNotificationMode = false"
    />
    <cate-form :formCateMode="formCateMode" @hidden="formCateMode = false" />
    <order-view
      :viewOrderMode="viewOrderMode"
      @hidden="viewOrderMode = false"
    />

    <user-view :viewUserMode="viewUserMode" @hidden="viewUserMode = false" />
    <book-view :viewBookMode="viewBookMode" @hidden="viewBookMode = false" />
  </div>
</template>
<script>
import ContentDelete from "./ContentDelete";
import BookForm from "./form/BookForm";
import NotificationForm from "./form/NotificationForm";
import CateForm from "./form/CateForm";
import OrderView from "./contentView/OrderView";
import UserView from "./contentView/UserView";
import BookView from "./contentView/BookView";

export default {
  props: ["mode"],

  setup(props) {
    console.log(props.mode);
  },

  data() {
    return {
      selectAll: false,
      selected: [],
      data: [1, 2, 3, 4, 5, 6],
      modal: false,
      formMode: false,
      formNotificationMode: false,
      formCateMode: false,
      viewUserMode: false,
      viewBookMode: false,
    };
  },

  components: {
    ContentDelete,
    BookForm,
    NotificationForm,
    CateForm,
    OrderView,
    UserView,
    BookView,
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
      if (this.mode.type === "book") {
        this.formMode = true;
      } else if (this.mode.type === "categories") {
        this.formCateMode = true;
      }
    },

    handleEdit() {
      if (this.mode.type === "book") {
        this.formMode = true;
      } else if (this.mode.type === "categories") {
        this.formCateMode = true;
      }
    },

    handleNotification() {
      this.formNotificationMode = true;
    },

    handleViewDisplay() {
      if (this.mode.type === "order") {
        this.viewOrderMode = true;
      } else if (this.mode.type === "user") {
        this.viewUserMode = true;
      } else if (this.mode.type === "book") {
        this.viewBookMode = true;
      }
    },
  },
  computed: {
    addMode() {
      if (
        this.mode.type === "user" ||
        this.mode.type === "cart" ||
        this.mode.type === "order"
      ) {
        return false;
      } else {
        return true;
      }
    },
    deleteMode() {
      if (this.mode.type === "cart") {
        return false;
      } else {
        return true;
      }
    },
    editMode() {
      if (
        this.mode.type === "cart" ||
        this.mode.type === "order" ||
        this.mode.type === "notification"
      ) {
        return false;
      } else {
        return true;
      }
    },

    viewMode() {
      if (this.mode.type === "user" || this.mode.type === "book") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style>
.content__table--title {
  position: fixed;
  width: 100%;
  background-color: #fff;
  top: 70px;
  border: 1px solid #ccc;
  padding-left: 0;
  width: 100%;
  z-index: 1;
}

.content__title {
  color: var(--primary-color);

  padding-left: 0 !important;
}

.content__table {
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

.content__table--title input {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.content__filter {
  height: 40px;
  width: 50%;
}

.content__filter input {
  height: 100%;
  width: 100%;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  cursor: text;
}

.content__table--container-list {
  list-style: none;
}

.content__table--container-item {
  padding: 20px 0;
}

.content__table--container-item input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.content__table--container-item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info__top {
  font-weight: 600;
}

.info__top i {
  margin-right: 10px;
}

.info__bottom i {
  margin-right: 10px;
}

.content__table--container-item-edit {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.content__table--container-item-edit i {
  font-size: 20px;
  cursor: pointer;
}

.content__table--container-item-edit i:hover {
  color: var(--primary-color);
}

.content__table--container-item-notification {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.content__table--container-item-notification:hover {
  color: var(--primary-color);
}
.content__table--container-item-delete i {
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s linear;
  padding: 20px;
  font-weight: 600;
}

.content__table--container-item-delete i:hover {
  color: var(--primary-color);
}

.info__bottom--title {
  font-weight: 600;
  font-size: 18px;
  padding: 10px 0;
}

.info__bottom--title,
.info__bottom--content {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

.content__table--btn {
}
</style>
