const URL = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector(".cards")

const getProphetData = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    const card = document.createElement("section");
    const h2 = document.createElement("h2");
    const portrait = document.createElement("img");
    const date = document.createElement("p");
    const place = document.createElement("p");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    date.textContent = `Date of Birth: ${prophet.birthdate}`;

    place.textContent = `Place of Birth: ${prophet.birthplace}`;

    card.setAttribute("class", "card");

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    // portrait.setAttribute("width", "340");
    // portrait.setAttribute("height", "440");

    card.appendChild(h2);
    card.appendChild(date);
    card.appendChild(place);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}