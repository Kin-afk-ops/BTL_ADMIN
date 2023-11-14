<template>
  <div class="work__bar main__container">
    <div class="word__bar-title main__title"><h2>Công việc</h2></div>
    <hr />
    <ul class="work__bar--list">
      <router-link to="/so-lieu" active-class="work__bar--active" class="link">
        <li class="work__bar--item">Số liệu</li></router-link
      >
      <hr />
      <router-link to="khach-hang" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Khách hàng</li></router-link
      >
      <hr />
      <router-link to="sach" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Sách</li></router-link
      >
      <hr />
      <router-link to="danh-muc" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Danh mục</li></router-link
      >
      <hr />
      <router-link to="gio-hang" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Giỏ hàng</li></router-link
      >
      <hr />
      <router-link to="don-hang" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Đơn hàng</li></router-link
      >
      <hr />
      <router-link to="thong-bao" active-class="work__bar--active" class="link"
        ><li class="work__bar--item">Thông báo</li></router-link
      >
      <hr />
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.work__bar {
  border: 1px solid #ccc;
}

.word__bar-title {
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.work__bar--list {
  list-style: none;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
}

.work__bar--item {
  padding: 10px;
  cursor: pointer;
  width: 100%;
}

.work__bar--item:hover {
  background-color: var(--primary-color);
  color: white;
}

.work__bar--active {
  transform: translateX(20px) translateY(-10px);
  background-color: var(--primary-color);
  color: white !important;
}
</style>
