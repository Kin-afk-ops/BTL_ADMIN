<template>
  <div class="data">
    <div class="data__wrap" v-if="isData">
      <div class="data__user data__block">
        <p>
          Số người dùng mới
          <br />
          trong tháng {{ month }}: {{ userTotal }}
        </p>
      </div>
      <div class="data__income data__block">
        <p>Doanh thu tháng {{ mouthIncome }}:</p>
        <p>{{ income }} đ</p>
      </div>
    </div>

    <div class="data__wrap" v-else>
      <div class="main__title display__flex--center">Không có dữ liệu</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      month: 0,
      userTotal: 0,
      mouthIncome: 0,
      income: 0,
      isData: true,
    };
  },

  async created() {
    try {
      const res1 = await axios.get("/user/stats");
      this.month = res1.data[0]._id;
      this.userTotal = res1.data[0].total;

      const res2 = await axios.get("/order/income");
      this.mouthIncome = res2.data[0]._id;
      this.income = res2.data[0].total;
    } catch (error) {
      console.log(error);
      this.isData = false;
    }
  },
};
</script>
<style>
.data {
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
