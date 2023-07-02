<script setup lang="ts">
import ButtonIcon from './ButtonIcon.vue'
import IconClipboard from './icons/IconClipboard.vue'
</script>

<template>
  <code>
    <slot></slot>
    <div class="copy-icon">
      <ButtonIcon @click="$emit('click')">
        <IconClipboard />
      </ButtonIcon>
    </div>
  </code>
</template>

<style lang="scss">
code {
  position: relative;
  word-wrap: anywhere;
}

.copy-icon {
  display: flex;
  place-items: center;
  place-content: center;
  top: 50%;
  right: 1rem;
  transform: translate(0, -50%);
  position: absolute;
}
</style>
