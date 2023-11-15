<template>
  <div
    class="notification__view main__container"
    :class="{ hidden: !viewNotificationMode }"
  >
    <h2 class="notification__view--title main__title">Tiêu đề thông báo</h2>

    <div class="notification__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>

    <div class="main__title">Đường dẫn</div>
    <p class="notification__view--content">https://github.com/</p>

    <div class="main__title">Nội dung:</div>
    <p class="notification__view--content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque unde aut
      illum necessitatibus alias magnam a tenetur cumque quis minus dolor,
      perferendis et ipsum nobis! Commodi nulla neque error quis!
    </p>
  </div>
</template>
<script>
export default {
  props: ["viewNotificationMode"],
  methods: {
    viewHidden() {
      this.$emit("hidden");
    },
  },
};
</script>
<style>
.notification__view {
  width: 50%;
  position: absolute;
  top: 20px;
  border: 1px solid #ccc;
  z-index: 999;
}

.notification__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.notification__view--cancel:hover {
  color: var(--primary-color);
}

.notification__view--content {
  padding: 10px 20px;
}
</style>
