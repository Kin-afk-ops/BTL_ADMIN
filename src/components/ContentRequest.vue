<template>
  <div>
    <content-table :mode="mode" />
  </div>
</template>
<script>
import ContentTable from "./ContentTable";
export default {
  data() {
    return {
      mode: {
        type: "notification",
        title: "Tất cả thông báo",
        placeholder: "Nhập Email của khách hàng",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
