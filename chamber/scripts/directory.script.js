const getDate = new Date();
const year = document.querySelector("#year");
year.textContent = getDate.getFullYear();

const date = document.querySelector("#date");
date.textContent = getDate.toLocaleDateString("en-UK", {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long"
});

const lastModified = document.querySelector("#modification");
lastModified.textContent = new Date(document.lastModified).toLocaleString();

const toggleMenu = () => {
  document.querySelector("#hidden").classList.toggle("show");
}

const hamburger = document.querySelector(".hamburger")
hamburger.onclick = toggleMenu;

const eventDate = document.querySelector(".eventHidden")
const day = getDate.getDay();
if (day == 1 || day == 2) {
  eventDate.classList.toggle("showEvent");
}

const URL = "https://samuriverosb.github.io/wdd230/chamber/data.json";
const cards = document.querySelector(".cards");
const main = document.querySelector("#directory-main");

const getData = async (render) => {
  const fetchData = await fetch(URL);
  const data = await fetchData.json();
  if (render === "grid") {
    processData(data.business);
  }
  else {
    processTable(data.business);
  }
}

const processData = (businessData) => {
  main.setAttribute("width", "90%")
  main.removeChild(main.lastChild);
  businessData.forEach(business => {
    const card = document.createElement("section");
    const level = document.createElement("p");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const number = document.createElement("p");
    const website = document.createElement("a");

    card.setAttribute("class", "card");

    image.setAttribute("src", business.imageurl);
    image.setAttribute("alt", `${business.name} logo`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "300")

    name.textContent = business.name;
    address.textContent = business.address;
    number.textContent = business.number;
    level.textContent = business.membership;

    level.setAttribute("class", "level")

    if (business.membership === "gold") {
      level.setAttribute("style", "background-color: #ffda79; color: #000")
    }
    else if (business.membership === "silver") {
      level.setAttribute("style", "background-color: #d1ccc0; color: #000")
    }
    else if (business.membership === "bronze") {
      level.setAttribute("style", "background-color: #9c4d2b")
    }
    else {
      level.setAttribute("style", "background-color: #ffffff; color: #000000")
    }

    website.setAttribute("href", business.website);
    website.setAttribute("target", "_blank");
    website.textContent = business.website;

    card.appendChild(level);
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(website);

    cards.appendChild(card);
  });
}

const processTable = (businessData) => {
  cards.replaceChildren();
  const table = document.createElement("table");
  table.setAttribute("class", "processTable");
  const tbody = document.createElement("tbody");

  businessData.forEach(business => {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const address = document.createElement("td");
    const number = document.createElement("td");
    const websitetd = document.createElement("td");
    const website = document.createElement("a");

    website.setAttribute("href", business.website);
    website.setAttribute("target", "_blank");
    website.textContent = business.website;
    websitetd.appendChild(website);

    name.textContent = business.name;
    address.textContent = business.address;
    number.textContent = business.number;

    tr.appendChild(name);
    tr.appendChild(address);
    tr.appendChild(number);
    tr.appendChild(websitetd);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  main.appendChild(table);
}

getData("grid");

const grid = document.querySelector("#grid-button");
const list = document.querySelector("#list-button");

grid.addEventListener("click", () => {
  if (main.lastChild.nodeName === "TABLE") {
    getData("grid");
  }
})

list.addEventListener("click", () => {
  if (main.lastChild.nodeName === "DIV") {
    // main.setAttribute("width", "100%");
    getData("list");
  }
})