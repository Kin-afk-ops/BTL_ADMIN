<template>
  <div>
    <content-table :mode="mode" :userData="userData" />
  </div>
</template>
<script>
import axios from "axios";
import ContentTable from "./ContentTable.vue";
export default {
  data() {
    return {
      mode: {
        type: "user",
        title: "Danh sách khách hàng",
        placeholder: "Nhập email người dùng",
      },
      userData: [],
    };
  },

  async beforeCreate() {
    const resUser = await axios.get("/user");
    this.userData = resUser.data;
    console.log(resUser);
  },

  components: {
    ContentTable,
  },
};
</script>
<style></style>
