<script setup lang="ts">
import { ref } from 'vue'
import TicketInput from './components/TicketInput.vue'
import TicketInfo from './components/TicketInfo.vue'

const ticketData = ref<{ branchName: string; requestTitle: string }>()
</script>

<template>
  <main>
    <div class="wrapper">
      <TicketInput v-model="ticketData" />
      <TicketInfo
        v-if="ticketData"
        class="result"
        :branchName="ticketData.branchName"
        :requestTitle="ticketData.requestTitle"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 25vh;
}

.wrapper {
  width: 100%;
  max-width: 60ch;
}

.result {
  margin-top: 1rem;
}
</style>
