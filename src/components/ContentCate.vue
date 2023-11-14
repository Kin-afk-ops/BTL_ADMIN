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
        type: "categories",
        title: "Tất cả danh mục sách",
        placeholder: "Nhập danh mục cần tìm",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
