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
        type: "order",
        title: "Tất cả đơn hàng",
        placeholder: "Nhập email của khách hàng",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
