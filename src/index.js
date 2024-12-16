import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const background = (
  <img
    className="background"
    alt="ocean"
    src="/animal-fun-fact/images/ocean.jpg"
  />
);

const showBackground = true;

let images = [];

const displayFact = (e) => {
  const animalClicked = e.target.alt;
  const randomNumber = Math.floor(
    Math.random() * animals[animalClicked].facts.length
  );
  const funFact = animals[animalClicked].facts[randomNumber];
  const factElement = document.getElementById("fact");
  if (funFact) {
    factElement.innerHTML = funFact;
    factElement.style.display = "block";
  } else {
    factElement.style.display = "none";
  }
};

for (let animal in animals) {
  images.push(
    <img
      src={animals[animal].image}
      key={animal}
      alt={animal}
      aria-label={animal}
      role="button"
      className="animal"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact" style={{ display: "none" }}></p>
  </div>
);

root.render(animalFacts);
