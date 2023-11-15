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
        type: "staff",
        title: "Danh sách tài khoản nhân viên",
        placeholder: "Nhập tên tài khoản của nhân viên",
      },
    };
  },

  components: {
    ContentTable,
  },
};
</script>
<style></style>
