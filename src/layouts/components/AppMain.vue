<template>
  <section>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>