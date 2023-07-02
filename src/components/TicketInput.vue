<script setup lang="ts">
import { makeBranchName, makeRequestTitle } from '@/lib/ticketFormatter'
import { isolateTicketId } from '@/lib/ticketParser'
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const modelValue = ref()

const makeTicketData = (event: Event) => {
  const ticketName = (event.target as HTMLInputElement).value

  const trimmedTicketName = ticketName.trim()

  if (!trimmedTicketName) {
    emit('update:modelValue', undefined)
    return
  }

  const [title, id] = isolateTicketId(trimmedTicketName)

  const branchName = makeBranchName(title, id)
  const requestTitle = makeRequestTitle(title, id)

  emit('update:modelValue', {
    branchName,
    requestTitle
  })
}
</script>

<template>
  <div>
    <label for="ticket-input">Your ticket name</label>
    <input
      name="ticket"
      type="text"
      id="ticket-input"
      placeholder="type ..."
      v-model="modelValue"
      @input="makeTicketData"
    />
    <small v-if="!modelValue">Example: XYZ-1234 Implement foobar</small>
  </div>
</template>

<style>
label {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}
input {
  font-size: 1.25rem;
}
</style>
