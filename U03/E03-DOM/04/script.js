const imagesSrc = ['blue.png', 'gray.png', 'green.png', 'purple.png'] 
const image = document.querySelector('.image-viewer img')
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
let count = 0

const updateImage = () => {
  count = (count + imagesSrc.length) % imagesSrc.length
  image.src = `./img/${imagesSrc[count % imagesSrc.length]}`
}

updateImage()

nextButton.addEventListener('click', () => { count++; updateImage() })
previousButton.addEventListener('click', () => { count--; updateImage()})


