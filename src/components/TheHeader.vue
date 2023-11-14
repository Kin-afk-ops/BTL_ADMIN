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
          <li class="header__admin--item">Thông tin</li>

          <li class="header__admin--item">Đăng nhập</li>

          <li class="header__admin--item">Đăng xuất</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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

.header__admin--avatar {
  border-radius: 50%;
  position: relative;
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
  top: 62px;
  right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.header__admin:hover .header__admin--list {
  display: flex;
}
.header__admin--list {
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  z-index: 999;
}
.header__admin--list:hover {
  color: var(--primary-color);
}
</style>
