import { ItemRow } from "./components/ItemRow.js";
import { Item } from "./components/Item.js";

const $ = (selector) => document.querySelector(selector);

const $itemsContainer = $(".items-container");
const $table = $("table tbody");
const $shoppingCart = $("#shopping-cart");
const items = await fetchItems("./assets/items.json");

async function fetchItems(url) {
  return fetch(url).then((response) => response.json());
}

$itemsContainer.innerHTML = items.items.map(Item).join("");

document.querySelectorAll(".item").forEach(($item) => {
  $item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", $item.id);
  });
});

$shoppingCart.addEventListener("drop", (event) => {
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text/plain");

  const item = items.items.find((item) => item.id === parseInt(itemId));
  $table.innerHTML += ItemRow(item);
});

$shoppingCart.addEventListener("dragover", (event) => {
  event.preventDefault();
});
