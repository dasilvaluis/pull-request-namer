/**
 * Finds the ticket id from the ticket name and separates from the description.
 * Returns the ticket title and ticket id as a tuple.
 */
export function isolateTicketId(ticketName: string): [string] | [string, string] {
  const regex = /^[a-zA-Z]+[-_\s]?\d+/gm

  const ticketIdMatch = regex.exec(ticketName)

  if (!Array.isArray(ticketIdMatch)) return [ticketName]

  const [ticketId] = ticketIdMatch

  const ticketTitle = ticketName.slice(ticketName.indexOf(ticketId) + ticketId.length)

  return [ticketTitle, ticketId]
}
