const colors = [
  'rgb(255, 0, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(255, 255, 0)',
  'rgb(128, 0, 128)'
]

document.querySelectorAll('tbody tr td').forEach(
  (td, index) => td.style.backgroundColor = colors[index % colors.length]
)




