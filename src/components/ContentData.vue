<template>
  <div class="data">
    <div class="data__wrap">
      <div class="data__user data__block">
        <p>
          Số người dùng mới
          <br />
          trong tháng: 20
        </p>
      </div>
      <div class="data__income data__block">
        <p>Doanh thu:</p>
        <p>300000 đ</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.data {
  display: flex;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.data__wrap {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.data__block {
  width: 300px;
  height: 100px;
  font-size: 20px;
  padding: 10px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

.data__block.data__user {
  background-color: #00ccff;
}

.data__block.data__income {
  background-color: #33cc33;
}
</style>
