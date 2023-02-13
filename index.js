import { setCurrentLaptop } from "./js/LaptopController.js";
import { updateFields } from "./js/utils.js";
import state, { laptopSelectionElem, BASE_API_URL } from "./js/state.js";

/**
 * Setup for the website by loading the laptops and
 * setting the initial fields with the updateFields function.
 */
updateFields();
fetch(BASE_API_URL + "computers/")
  .then((response) => response.json())
  .then((data) => {
    state.laptops = data;
    for (const element of state.laptops) {
      let newOption = document.createElement("option");
      newOption.value = element["id"];
      newOption.text = element["title"];
      laptopSelectionElem.add(newOption);
    }
    setCurrentLaptop(state.laptops[0]);
  });
