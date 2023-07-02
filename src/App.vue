<script setup lang="ts">
import FooterSection from './components/FooterSection.vue';
import MainSection from './components/MainSection.vue';
</script>

<template>
  <div class="top-level flex direction-column justify-between">
    <MainSection />
    <FooterSection />
  </div>
</template>

<style lang="scss" scoped>
.top-level {
  min-height: 100vh;
}
</style>
