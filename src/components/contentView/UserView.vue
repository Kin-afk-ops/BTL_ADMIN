<template>
  <div
    class="customer__info col c-9 main__container"
    :class="{ hidden: !viewUserMode }"
  >
    <img
      src="../../assets//default/default_avatar.png"
      alt=""
      class="customer__info--avatar"
    />

    <div class="customer__info--info">
      <p>
        <i class="fa-solid fa-circle-info"></i>
        ...
      </p>
      <p>
        <i class="fa-solid fa-envelope"></i>
        linh@gmail.com
      </p>
      <p>
        <i class="fa-solid fa-phone"></i>
        0589443320
      </p>
      <p>
        <i class="fa-solid fa-person"></i>
        Nam
      </p>
      <p>
        <i class="fa-solid fa-cake-candles"></i>
        22-08-2003
      </p>
      <p>
        <i class="fa-solid fa-location-dot"></i>
        Can Tho
      </p>
    </div>
    <div class="user__view--cancel">
      <i class="fa-regular fa-rectangle-xmark" @click="viewHidden"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["viewUserMode"],
  methods: {
    viewHidden() {
      this.$emit("hidden");
    },
  },
};
</script>

<style>
.customer__info {
  display: flex;
  align-items: center;
  border-left: 1px solid #ccc;
  width: 50%;
  position: fixed;
  z-index: 999;
  top: 20px;
  border: 1px solid #ccc;
}

.customer__info img {
  width: 225px;
  height: 225px;
  object-fit: contain;
}

.customer__info--info {
  font-size: 18px;
}

.customer__info--info p {
  padding: 10px 0;
}

.customer__info--info i {
  margin-right: 20px;
}
.user__view--cancel {
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 5px;
  transition: 0.3s linear;
}

.user__view--cancel:hover {
  color: var(--primary-color);
}
</style>
