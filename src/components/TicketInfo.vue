<script setup lang="ts">
import { copyTextToClipboard } from '@/lib/clipboard'
import ButtonIcon from './ButtonIcon.vue'
import CodeSection from './CodeSection.vue'
import IconClipboard from './icons/IconClipboard.vue'

const props = defineProps<{
  branchName: string
  requestTitle: string
  class?: string
}>()
</script>

<template>
  <div :class="props.class">
    <div>
      <b>Branch name:</b>
      <br />
      <div class="flex justify-between align-center">
        {{ props.branchName }}
        <ButtonIcon @click="() => copyTextToClipboard(props.branchName)">
          <IconClipboard />
        </ButtonIcon>
      </div>
    </div>
    <div>
      <b>Pull Request title:</b>
      <br />
      <div class="flex justify-between align-center">
        {{ props.requestTitle }}
        <ButtonIcon @click="() => copyTextToClipboard(props.requestTitle)">
          <IconClipboard />
        </ButtonIcon>
      </div>
    </div>
    <CodeSection @click="() => copyTextToClipboard(`git checkout -b ${ props.branchName }`)">
      git checkout -b {{ props.branchName }}
    </CodeSection>
  </div>
</template>
