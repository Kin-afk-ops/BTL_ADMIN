<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">{{ mode.title }}</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
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
              type="checkbox"
              @change="handleChangMoney($event)"
              value="1"
              v-model="selected"
            />
          </div>
          <img
            class="img__main c-1"
            src="../assets/default/default_avatar.png"
            alt=""
          />
          <div class="content__table--container-item-info c-4">
            <p class="info__email">
              <i class="fa-solid fa-envelope"></i>Linh@gmail.com
            </p>
            <p class="info__phone">
              <i class="fa-solid fa-phone"></i>0589443320
            </p>
          </div>
          <div
            class="content__table--container-item-edit display__flex--center c-2"
          >
            <i class="fa-solid fa-pen"></i>
          </div>

          <div
            class="content__table--container-item-notification display__flex--center c-2"
          >
            Gửi thông báo
          </div>
        </li>
        <hr />

        <li class="content__table--container-item row no-gutters">
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input
              type="checkbox"
              @change="handleChangMoney($event)"
              value="2"
              v-model="selected"
            />
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
  </div>
</template>
<script>
import ContentDelete from "./ContentDelete";

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
    };
  },

  components: {
    ContentDelete,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.data.forEach((d) => {
          this.selected.push(d);
        });
        this.$emit("change-money", this.selected);
      }
    },

    handleDelete() {
      if (this.selected.length !== 0) {
        this.modal = true;
      }
    },

    handleChangMoney(event) {
      if (event.target.checked) {
        this.$emit("change-money", this.selected);
      } else {
        this.$emit("change-money", this.selected);
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

.info__email {
  font-weight: 600;
}

.info__email i {
  margin-right: 10px;
}

.info__phone i {
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
}

.content__table--container-item-delete i:hover {
  color: var(--primary-color);
}
</style>
