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

let imagesToLoad = document.querySelectorAll(".discover-img");
const loadImages = (image) => {
  const src = image.getAttribute("data-set");
  let srcsetValue = `../chamber/images/Discover/${src}-500.jpg 500w, ../chamber/images/Discover/${src}-700.jpg 700w, ../chamber/images/Discover/${src}-1000.jpg 1000w`;
  image.srcset = srcsetValue;
  image.onload = () => {
    image.removeAttribute("data-set");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const lastVisited = document.querySelector("#last-visited");

const populateSession = () => {
  localStorage.setItem("prevSession", Date.now());

  setSession();
}

const setSession = () => {
  const timeNow = Date.now();
  const timeThen = parseInt(localStorage.getItem("prevSession"))
  const timeElapsed = (timeNow - timeThen) / 60000;
  if (timeElapsed < 1440) {
    lastVisited.textContent = "Last time visited: Less than a day ago"
    localStorage.setItem("prevSession", timeNow);
  }
  else {
    timeElapsed = Math.ceil(timeElapsed / 1440);
    lastVisited.textContent = `Last time visited: ${timeElapsed} days`;
    localStorage.setItem("prevSession", timeNow);
  }
}

if (!localStorage.getItem("prevSession")) {
  populateSession();
}
else {
  setSession();
}