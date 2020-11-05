<template>
  <div class="progress__wrapper">
    <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<style lang="scss">
.progress__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);

  filter: blur(0.8px);
  cursor: progress;
}
</style>
