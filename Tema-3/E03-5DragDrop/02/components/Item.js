export function Item ({
  id,
  name,
  url,
}) {
  return (/*html*/`
      <img  id="${id}" class="item" src="${url}" alt="${name}" width="150" height="150"/>
  `)
}
