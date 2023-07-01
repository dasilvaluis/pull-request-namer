<script setup lang="ts">
import { makeBranchName, makeRequestTitle } from '@/lib/ticketFormatter'
import { isolateTicketId } from '@/lib/ticketParser'

const emit = defineEmits(['update:modelValue'])

const makeTicketData = (event: Event) => {
  const ticketName = (event.target as HTMLInputElement).value

  if (!ticketName) {
    emit('update:modelValue', undefined)
    return
  }

  const [title, id] = isolateTicketId(ticketName)

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
      placeholder="copy & paste your ticket here"
      @input="makeTicketData"
    />
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
