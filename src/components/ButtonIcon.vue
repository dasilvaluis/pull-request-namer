<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <button :class="props.class" @click="$emit('click')">
    <i>
      <slot></slot>
    </i>
  </button>
</template>

<style lang="scss">
button {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border-button);
  background-color: var(--color-button-bg);
  cursor: pointer;
  will-change: background-color;
  transition: 150ms background-color;

  i {
    color: var(--color-icon);
    fill: var(--color-icon);
  }

  &:hover {
    background-color: var(--color-button-bg-hover);
  }
}
</style>
