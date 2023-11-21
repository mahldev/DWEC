const $ = (selector) => document.querySelector(selector);

const $info = $("#info");

document.querySelectorAll(".element").forEach((e) => {
  e.addEventListener("click", (event) => {
    showAllInfo(event.target);
  });
});

function getFather(nodo) {
  return nodo.parentElement ? nodo.parentElement : null;
}

function getAllSiblings(nodo) {
  const parentNode = nodo.parentElement;
  if (!parentNode) return null;

  const childrens = Array.from(parentNode.children);

  return childrens.filter((child) => child !== nodo);
}

function getInnerHtmlOrMessage(nodo, message) {
  return nodo ? nodo.innerHTML : `Dont have ${message} node`;
}

function showAllInfo(nodo) {
  const parentNode = getFather(nodo);
  const siblings = getAllSiblings(parentNode);

  $info.innerHTML = /*html */ `
        <div>${getInnerHtmlOrMessage(parentNode, "parent")}</div>;
        <div>${getInnerHtmlOrMessage(siblings, "siblings")}</div>;
  `;
}
