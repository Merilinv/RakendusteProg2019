console.log("utils.js loaded");
//support function
function createItemElement(item) {
    const anchor = document.createElement("a");
    console.log(item.title);
    anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;

    const itemContainer = document.createElement("div");
    itemContainer.className = "item";

    const imgElement = document.createElement("img");
    imgElement.src = item.imgSrc;

    const priceElement = document.createElement("div");
    priceElement.innerText = item.price;
    priceElement.className = "item__price";

    const titleELement = document.createElement("div");
    titleELement.className = "item__title";
    titleELement.textContent = item.title;

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleELement);
    itemContainer.append(priceElement);

    return anchor;
}

module.exports = {
    createItemElement,
};