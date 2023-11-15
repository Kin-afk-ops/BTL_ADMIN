<template>
  <div class="grid">
    <div class="row no-gutters">
      <div class="c-3">
        <work-bar />
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
  components: {
    WorkBar,
  },

  computed: {
    ...mapGetters(["staff"]),
  },

  beforeCreate() {
    console.log(this.$store);
  },
};
</script>
<style>
.content {
  border: 1px solid #ccc;
}
</style>
