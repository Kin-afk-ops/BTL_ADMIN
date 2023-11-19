<template>
  <div class="header">
    <div class="header__wrap">
      <router-link to="/" class="link">
        <img
          src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
          alt=""
          class="header__logo"
        />
      </router-link>

      <div class="header__admin">
        <div class="header__admin--avatar">
          <img src="../assets/default/default_avatar.png" alt="" />
        </div>
        <ul class="header__admin--list">
          <li class="header__admin--item">
            <router-link :to="'/nhan-vien/view/' + staffId" class="link"
              >Thông tin</router-link
            >
          </li>
          <hr />
          <li @click="handleLogOut" class="header__admin--item">Đăng xuất</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      staffId: "",
    };
  },

  methods: {
    handleLogOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("vuex");
      localStorage.removeItem("staffId");
      localStorage.removeItem("username");
      localStorage.removeItem("position");
      this.$store.dispatch("staff", null);
      this.$router.push("/login");
      window.location.reload();
    },
  },

  created() {
    this.staffId = localStorage.getItem("staffId");
  },

  computed: {
    ...mapGetters(["staff"]),
  },
};
</script>
<style>
.header {
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}

.header__wrap {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
}

.header__logo {
  width: 220px;
  height: 39px;
}

.header__admin {
  position: relative;
  height: 100%;
}

.header__admin--avatar {
  border-radius: 50%;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__admin--avatar img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.header__admin--list {
  display: none;
  position: absolute;
  list-style: none;
  background-color: white;
  width: 200px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  top: 100%;
  right: -10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  z-index: 999;
}

.header__admin--list li {
  padding: 10px;
  font-size: 18px;
  width: 100%;
  border: 1px solid transparent;
}

.header__admin:hover .header__admin--list {
  display: flex;
}

.header__admin--list li:hover {
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}
</style>
