const links = Array.from(document.querySelectorAll('.container-links a'))
const imgContainer = document.getElementById('container-images')
const getExtension = (file) => file.slice(file.lastIndexOf('.') + 1, file.length)
const createExtensionImage = (extension) => {
  const img = document.createElement('img')
  img.width = 100
  img.src = `./img/${extension}.png`
  return img
}

links.map(file => getExtension(file.href))
  .map(createExtensionImage)
  .forEach(img => imgContainer.append(img))