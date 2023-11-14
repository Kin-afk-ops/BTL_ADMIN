<template>
  <div>
    <content-table :mode="mode" />
  </div>
</template>
<script>
import ContentTable from "./ContentTable.vue";
export default {
  data() {
    return {
      mode: {
        type: "user",
        title: "Danh sách khách hàng",
        placeholder: "Nhập email người dùng",
      },
    };
  },

  components: {
    ContentTable,
  },
};
</script>
<style></style>
