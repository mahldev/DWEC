const numberOfLinks = document.getElementsByTagName("a").length;
const addresToPenultimeLink = () => {
  const anchors = document.getElementsByTagName("a");
  return anchors[anchors.length - 1];
};

const createElementTypeP = (text) => {
  const element = document.createElement('p')
  element.innerText = text
  return element
}

const details = document.getElementById("info");

document.getElementById('calculate').addEventListener("click", () => {
  
  details.childNodes.forEach(element => element.remove())

  const data = [
    `Number of links on the page: ${numberOfLinks}`,
    `Address to which the penultimate link links to: ${addresToPenultimeLink()}`,
  ];
  
  const elements = data.map(createElementTypeP)
  
  elements.forEach(element => details.append(element))
})` 

Number of links linking to the institute's website:
Number of links in the third paragraph:`;
