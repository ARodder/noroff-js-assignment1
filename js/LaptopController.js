import state, {
  buyButton,
  laptopDescription,
  featureContainer,
  laptopSelectionElem,
  laptopPrice,
  laptopHeader,
  LAPTOP_IMAGE_ID,
  BASE_API_URL,
  laptopImageContainer,
} from "./state.js";
import { updateFields } from "./utils.js";

/**
 * Buys the currently selected computer. If the bank balance is high enough
 * it displays a message saying "congrats".
 * If there is not enough money in the bank a message will be displayed saying
 * "you do not have enough money to buy this computer"
 */
function buyCurrentComputer() {
  if (state.balance < state.currentLaptop["price"]) {
    alert("You do not have enough money to buy this computer");
    return;
  }
  state.balance -= state.currentLaptop["price"];
  alert("Congrats!! You just bought: " + state.currentLaptop["title"]);
  updateFields();
}

/**
 * Creates HTML elements for the features
 * of the current computer, and displays the 
 * them.
 * 
 * @param features features of the currently selected computer.
 */
function setLaptopFeatures(features) {
  features.forEach((feature) => {
    let newFeature = document.createElement("p");
    newFeature.className = "laptop-feature";
    newFeature.innerText = feature;
    featureContainer.append(newFeature);
  });
}

/**
 * Sets the current laptop. Builds the required HTML elements and 
 * displays them in the appropriate place.
 * @param laptop the laptop that was most recently selected.
 */
export function setCurrentLaptop(laptop) {
  setLaptopFeatures(laptop["specs"]);
  let newImage = document.getElementById(LAPTOP_IMAGE_ID);
  if (newImage && newImage !== undefined) {
    newImage.src = BASE_API_URL + laptop["image"];
    newImage.alt = laptop["title"];
  } else {
    newImage = document.createElement("img");
    newImage.src = BASE_API_URL + laptop["image"];
    newImage.id = LAPTOP_IMAGE_ID;
    newImage.alt = laptop["title"];
    laptopImageContainer.appendChild(newImage);
  }
  laptopHeader.innerText = laptop["title"];
  laptopDescription.innerText = laptop["description"];
  laptopPrice.innerText = laptop["price"];
  state.currentLaptop = laptop;
}

/**
 * Binds the functions to the appropriate events, such as onClick and onChange.
 */
buyButton.addEventListener("click", buyCurrentComputer);
laptopSelectionElem.addEventListener("change", (event) => {
  setCurrentLaptop(state.laptops[event.target.selectedIndex]);
});
