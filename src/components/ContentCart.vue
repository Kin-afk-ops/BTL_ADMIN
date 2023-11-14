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
        type: "cart",
        title: "Tất cả giỏ hàng",
        placeholder: "Nhập email khách hàng",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
