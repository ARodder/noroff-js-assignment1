import { setCurrentLaptop } from "./js/LaptopController";
import { updateFields } from "./js/utils";
import state,{laptopSelectionElem, BASE_API_URL} from "./js/state";

updateFields();
fetch(BASE_API_URL + "computers/")
  .then((response) => response.json())
  .then((data) => {
    state.laptops = data;
    for (const element of laptops) {
      let newOption = document.createElement("option");
      newOption.value = element["id"];
      newOption.text = element["title"];
      laptopSelectionElem.add(newOption);
    }
    setCurrentLaptop(laptops[0]);
  });













