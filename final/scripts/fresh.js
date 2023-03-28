// FRESH page

const ing1 = document.querySelector("#ing1");
const ing2 = document.querySelector("#ing2");
const ing3 = document.querySelector("#ing3");

const ING_URL = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(ING_URL)
  .then(res => res.json())
  .then(data => {
    data.map(fruit => {
      const option = document.createElement("option");
      option.setAttribute("value", fruit.name);
      option.textContent = fruit.name;
      ing1.appendChild(option);
    })
    data.map(fruit => {
      const option = document.createElement("option");
      option.setAttribute("value", fruit.name);
      option.textContent = fruit.name;
      ing2.appendChild(option);
    })
    data.map(fruit => {
      const option = document.createElement("option");
      option.setAttribute("value", fruit.name);
      option.textContent = fruit.name;
      ing3.appendChild(option);
    })
  })

const order = document.querySelector("#order");
const div = document.createElement("div");
div.setAttribute("class", "order");
const title = document.createElement("h2");
const firstName = document.createElement("p");
const email = document.createElement("p");
const number = document.createElement("p");
const choice1 = document.createElement("p");
const choice2 = document.createElement("p");
const choice3 = document.createElement("p");
const specialInst = document.createElement("p");

const dateNow = document.createElement("p");
const subtitle = document.createElement("h3");
const carbohydrates = document.createElement("p");
const fat = document.createElement("p");
const sugar = document.createElement("p");
const proteins = document.createElement("p");
const calories = document.createElement("p");

title.textContent = "Your Order";
subtitle.textContent = "Your order contains:"

div.appendChild(title);
div.appendChild(firstName);
div.appendChild(email);
div.appendChild(number);
div.appendChild(choice1);
div.appendChild(choice2);
div.appendChild(choice3);
div.appendChild(specialInst);

div.appendChild(dateNow);
div.appendChild(subtitle);
div.appendChild(carbohydrates);
div.appendChild(fat);
div.appendChild(sugar);
div.appendChild(proteins);
div.appendChild(calories);


document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();
  const total = parseInt(localStorage.getItem("totalDrinks")) + 1;
  localStorage.setItem("totalDrinks", total);

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  firstName.textContent = "Name: " + formProps.name;
  email.textContent = "Email: " + formProps.email;
  number.textContent = "Phone Number: " + formProps.number;
  choice1.textContent = "Fruit 1: " + formProps.ing1;
  choice2.textContent = "Fruit 2: " + formProps.ing2;
  choice3.textContent = "Fruit 3: " + formProps.ing3;
  specialInst.textContent = "Special instructions: " + formProps.textarea;

  dateNow.textContent = "Date: " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  fetch(ING_URL)
    .then(res => res.json())
    .then(data => {
      const ingredient1 = data.filter(i => i.name === formProps.ing1);
      const ingredient2 = data.filter(i => i.name === formProps.ing2);
      const ingredient3 = data.filter(i => i.name === formProps.ing3);
      const carb = parseFloat(ingredient1[0].nutritions.carbohydrates) + parseFloat(ingredient2[0].nutritions.carbohydrates) + parseFloat(ingredient3[0].nutritions.carbohydrates);
      carbohydrates.textContent = "Carbohydrates: " + carb + "g";
      const fats = parseFloat(ingredient1[0].nutritions.fat) + parseFloat(ingredient2[0].nutritions.fat) + parseFloat(ingredient3[0].nutritions.fat);
      fat.textContent = "Fat: " + fats + "g";
      const sugars = parseFloat(ingredient1[0].nutritions.sugar) + parseFloat(ingredient2[0].nutritions.sugar) + parseFloat(ingredient3[0].nutritions.sugar);
      sugar.textContent = "Sugar: " + sugars + "g";
      const protein = parseFloat(ingredient1[0].nutritions.protein) + parseFloat(ingredient2[0].nutritions.protein) + parseFloat(ingredient3[0].nutritions.protein);
      proteins.textContent = "Protein: " + protein + "g";
      const calorie = parseFloat(ingredient1[0].nutritions.calories) + parseFloat(ingredient2[0].nutritions.calories) + parseFloat(ingredient3[0].nutritions.calories);
      calories.textContent = "Calories: " + calorie + "cal";
    })
  order.appendChild(div);
})

const lastModified = document.querySelector("#last-modified");
lastModified.textContent = new Date(document.lastModified).toLocaleString();

const date = new Date();

const year = document.querySelector("#year");
year.textContent = date.getFullYear();

const toggleMenu = () => {
  document.querySelector("#hidden").classList.toggle("show");
}

const hamburger = document.querySelector(".hamburger")
hamburger.onclick = toggleMenu;