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
        type: "book",
        title: "Tất cả quyển sách",
        placeholder: "Nhập tên quyển sách",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
