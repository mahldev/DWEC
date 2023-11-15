const $body = document.querySelector('body')
const $select = document.querySelector('select')

$select.addEventListener('change', (event) => {
  const mode = event.target.value

  if (mode === 'light') {
    $body.style.colorScheme = ''
    $body.style.backgroundColor = ''
  }

  if (mode === 'dark') {
    $body.style.colorScheme = 'dark'
    $body.style.backgroundColor = '#181818'
  }
  
  if (mode === 'minimalist') {
    $body.style.colorScheme = 'dark'
    $body.style.backgroundColor = '#123122'
  }
})


