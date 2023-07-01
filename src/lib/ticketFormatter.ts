function makeKebab(text: string) {
  const kebab = text
    .replace(/_/g, '-') // interpret underscores as dashes
    .replace(/[^a-zA-Z0-9- ]/g, '') // remove special characters preserving dashes
    .split(' ')
    .filter(Boolean)
    .join(' ') // filter out empty spaces;
    .replace(/ /g, '-')
    .toLowerCase()

  return kebab
}
export const makeBranchName = (title: string, id?: string) => {
  const titleKebabCase = makeKebab(title)

  if (!id) return titleKebabCase

  const idUppercase = id.replace(/ /g, '-').toUpperCase()

  if (!titleKebabCase) return idUppercase

  return `${idUppercase}-${titleKebabCase}`
}

export const makeRequestTitle = (title: string, id?: string) => {
  if (!id) return title

  const idUppercase = id.toUpperCase()

  if (!title) return `[${idUppercase}]`

  return `[${idUppercase}] ${title}`
}
