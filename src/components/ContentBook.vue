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
        title: "Danh sach tat ca sach",
        placeholder: "Nhap ten quuyen sacu",
      },
    };
  },
  components: {
    ContentTable,
  },
};
</script>
<style></style>
