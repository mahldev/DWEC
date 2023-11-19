export function ItemRow({
  name,
  price,
  description
}) {
  return (/*html*/`
    <tr>
      <td>${name}</td>
      <td>${price}</td>
      <td>${description}</td>
    </tr>
  `)  
}

