<script setup lang="ts">
import { ref } from 'vue'
import TicketInput from './TicketInput.vue'
import TicketInfo from './TicketInfo.vue'

const ticketData = ref<{ branchName: string; requestTitle: string }>()
</script>

<template>
  <main>
    <div class="wrapper">
      <TicketInput v-model="ticketData" />
      <TicketInfo
        v-if="ticketData"
        class="ticket-info"
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
  margin-top: 17vh;
}

.wrapper {
  width: 100%;
  max-width: 60ch;
}

.ticket-info {
  margin-top: 1rem;
}
</style>
