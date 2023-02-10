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
} from "./state";
import { updateFields } from "./utils";

function buyCurrentComputer() {
  if (state.balance < state.currentLaptop["price"]) {
    alert("You do not have enough money to buy this computer");
    return;
  }
  state.balance -= state.currentLaptop["price"];
  alert("Congratts!! You just bought: " + state.currentLaptop["title"]);
  updateFields();
}

function setLaptopFeatures(features) {
  features.forEach((feature) => {
    let newFeature = document.createElement("p");
    newFeature.className = "laptop-feature";
    newFeature.innerText = feature;
    featureContainer.append(newFeature);
  });
}

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

buyButton.addEventListener("click", buyCurrentComputer);
laptopSelectionElem.addEventListener("change", (event) => {
  setCurrentLaptop(state.laptops[event.target.selectedIndex]);
});
