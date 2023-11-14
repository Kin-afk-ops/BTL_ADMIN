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
        title: "Danh sach khach hang",
        placeholder: "nhap email nguoi dung",
      },
    };
  },

  components: {
    ContentTable,
  },
};
</script>
<style></style>
