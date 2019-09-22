console.log("items.js loaded");
const x = window.location;
console.log(x);
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
console.log(title, cost, src);
//alert(`Title: ${title} cost: ${cost} path: ${src}`)

const container = document.createElement("div");
container.className = "itemContainer";



const titleElement = document.createElement("h2");
titleElement.textContent = title;
titleElement.className = "item__title";

const costElement = document.createElement("div");
costElement.textContent = cost;
costElement.className = "item__cost";

const image = document.createElement("img");
image.src = src;
image.className = "item__image";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, elit vitae pharetra semper, massa dolor sagittis nisi, et imperdiet sapien massa non justo. Ut condimentum eros ornare, luctus turpis vitae, condimentum metus. Nunc semper lobortis lorem, non sagittis ex aliquet laoreet. Sed auctor quam sed leo efficitur iaculis. Nulla pulvinar vel urna sit amet rutrum. Nam tincidunt tortor eget odio ornare, eu semper risus mollis. Nullam pharetra quam ac justo malesuada dapibus. Nam interdum, mi in rhoncus ultrices, ex sapien pharetra diam, a scelerisque lorem mauris quis metus. Suspendisse sed diam et velit viverra accumsan. Quisque non est fringilla, luctus nibh sed, iaculis elit. Morbi maximus mauris ac leo tincidunt vestibulum. Nunc tempor lacinia lorem, sit amet tincidunt urna aliquet eu. Phasellus nec vestibulum urna. Quisque consectetur id libero consequat porttitor. Fusce vestibulum sit amet neque quis varius. Donec fringilla viverra malesuada.";
const textElement = document.createElement("p");
textElement.textContent = description;
textElement.class = "item__description";

container.append(titleElement);
container.append(costElement);
container.append(image);
container.append(textElement);

window.addEventListener("load", ()=>{
    const app = document.getElementById("item-body");
    app.append(container);
});
