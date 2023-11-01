const tabooWords = ['sex', '123']
const body = Array.from(document.querySelectorAll('body *'))

const searchAndReplace = (element) => {
  if (element.nodeType === Node.ELEMENT_NODE
    && element.childNodes.length > 0) {
      element.childNodes.forEach(searchAndReplace)
  }

  if (element.nodeType === Node.TEXT_NODE) {
    tabooWords.forEach(word => {
      const regex = new RegExp(word, 'gi')
      element.textContent = element.textContent.replace(regex, 'Blocked Content')
    })
  }
}


body.forEach(searchAndReplace) 