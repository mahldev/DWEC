const $ = (selector) => document.querySelector(selector);

const $info = $("#info");

document.querySelectorAll(".element").forEach((e) => {
  e.addEventListener("click", (event) => {
    event.stopPropagation();
    showAllInfo(event.target);
  });
});

function getFather(node) {
  return node.parentElement ? node.parentElement : null;
}

function getAllSiblings (node) {
  const father = getFather(node)
  return father ? Array.from(father.children)
    .filter(sibling => sibling.id !== node.id && sibling !== $info)
    .map(sibling => sibling.id)
    .join(", ") : null
}

function getGrandchildrenIds(node) {
  if (!node.children.length) {
    return null;
  }
  console.log(node.children.length);
  return Array.from(node.children).map(getChildIds).join(", ");
}

function getChildIds (child) {
  if (!child.children.length) {
    return null;
  }
  return Array.from(child.children)
    .map(grandchild => grandchild.id).join(", ");
}

function showAllInfo(node) {
  const father = getFather(node);
  const allSiblings = getAllSiblings(node)
  const theNextSibling = node.nextElementSibling !== $info ? node.nextElementSibling : null
  const thePreviousSibling = node.previousElementSibling
  const theGrandFather = father ? father.parentElement : null
  const grandfathersSiblings = theGrandFather ? getAllSiblings(theGrandFather) : null
  const fathersSiblings = father ? getAllSiblings(father) : null
  const cousins = father ? getAllSiblings(father).split(", ").filter(sibling => sibling !== node.id).join(", ") : null
  const children = node.children.length ? Array.from(node.children).map(child => child.id).join(", ") : null
  const grandchildren = getGrandchildrenIds(node)

  $info.innerText = /*html */ `
            1. The father : ${father ? father.id : "No father"}
            2. All the siblings: ${allSiblings ? allSiblings : "No siblings"}
            3. The previous sibling: ${thePreviousSibling ? thePreviousSibling.id : "No previous sibling"}
            4. The next sibling: ${theNextSibling ? theNextSibling.id : "No next sibling"}
            5. The grandfather: ${theGrandFather ? theGrandFather.id : "No grandfather"}
            6. Grandfather's siblings: ${grandfathersSiblings ? grandfathersSiblings : "No grandfather's siblings"}
            7. Father's siblings: ${fathersSiblings ? fathersSiblings : "No father's siblings"}
            8. Cousins: ${cousins ? cousins : "No cousins"}
            9. Children: ${children ? children : "No children"}
            10. Grandchildren: ${grandchildren ? grandchildren : "No grandchildren"}
        `;
}
