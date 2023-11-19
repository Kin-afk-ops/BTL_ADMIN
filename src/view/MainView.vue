<template>
  <div class="grid">
    <div class="row no-gutters">
      <div class="c-3" ref="workBar">
        <work-bar @hidden="this.workBar = false" />
      </div>
      <div class="col c-9 content main__container">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import WorkBar from "../components/WorkBar";

export default {
  data() {
    return {
      isWorkBar: true,
    };
  },
  components: {
    WorkBar,
  },

  computed: {
    ...mapGetters(["staff"]),
  },

  beforeCreate() {
    console.log(this.$store);
    if (!localStorage.getItem("staffId")) {
      this.$router.push("/login");
    }
  },
};
</script>
<style>
.content {
  border: 1px solid #ccc;
}
</style>
