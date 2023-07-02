<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue';
</script>

<template>
  <footer class="flex justify-center align-center gap-6">
    <a class="link" href="https://github.com/dasilvaluis/pull-request-namer" rel="noopener noreferrer" target="_blank">
      <i><IconGithub /></i> <span>GitHub</span>
    </a>
    <a class="link" href="https://www.buymeacoffee.com/dasilvaluis" rel="noopener noreferrer" target="_blank">
      <img class="image-link" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dasilvaluis&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    margin-bottom: 2.5rem;
  }

  .link {
    i {
      display: inline-flex;
      vertical-align: text-top;
    }
  }


  .image-link {
    width: auto;
    height: 2.25rem;
    display: block;
  }
</style>
