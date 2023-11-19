<template>
  <div class="content__table main__container">
    <div class="content__table--title main__title row no-gutters">
      <input type="checkbox" @click="select" v-model="selectAll" class="c-1" />
      <h1 class="main__title content__title">Tất cả yêu cầu</h1>
      <div
        class="content__table--container-item-delete display__flex--center c-1"
      >
        <i @click="handleDelete" class="fa-solid fa-trash"></i>
      </div>
    </div>
    <hr />

    <div class="content__table--container" v-if="requestInfo.length !== 0">
      <ul class="content__table--container-list">
        <li
          class="content__table--container-item row no-gutters"
          v-for="request in requestInfo"
          :key="request._id"
        >
          <div
            class="content__table--container-item-input display__flex--center c-1"
          >
            <input type="checkbox" v-model="selected" :value="request._id" />
          </div>

          <div class="content__table--container-item-info c-4">
            <p class="info__bottom"><b>ID Khách hàng:</b></p>

            <p class="info__bottom"><b>Yêu cầu</b></p>
          </div>
        </li>
        <hr />
      </ul>
    </div>

    <p
      class="main__title display__flex--center"
      style="height: 100%"
      v-if="requestInfo.length === 0"
    >
      Không có Yêu cầu!
    </p>

    <content-delete
      :selected="selected"
      :modal="modal"
      @hidden="modal = false"
      :selectAll="selectAll"
      :mode="mode"
    />
  </div>
</template>
<script>
import axios from "axios";
import ContentDelete from "./ContentDelete";

export default {
  data() {
    return {
      selectAll: false,
      selected: [],
      modal: false,
      requestInfo: [],
      mode: "request",
    };
  },

  async created() {
    const res = await axios.get("/request");
    this.requestInfo = res.data;
  },

  components: {
    ContentDelete,
  },

  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        this.requestInfo.forEach((d) => {
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
    addMode() {
      if (
        this.mode.type === "user" ||
        this.mode.type === "cart" ||
        this.mode.type === "order" ||
        this.mode.type === "notification" ||
        this.mode.type === "request"
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
        this.mode.type === "notification" ||
        this.mode.type === "request" ||
        this.mode.type === "staff"
      ) {
        return false;
      } else {
        return true;
      }
    },

    viewMode() {
      if (
        this.mode.type === "user" ||
        this.mode.type === "book" ||
        this.mode.type === "notification" ||
        this.mode.type === "staff"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style>
@import "./bass.css";
</style>
