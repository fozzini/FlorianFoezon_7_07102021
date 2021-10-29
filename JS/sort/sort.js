import { recipes } from "../data/data.js";
import { ingredientsArray, ustensilsArray, recipesArray, applianceArray, nameArray } from "../Array/Array.js";

export const searchInput = () => {
  let input = document.getElementById("search");
  input.oninput = () => {
    sortCard(input.value)}
};

// export const searchInputIngredients = () => {
//   let input = document.getElementById("ingredientsBtn");
//   input.oninput = () => { 
//   sortCard(input.value)}
// };

// export const searchInputAppliance = () => {
//   let input = document.getElementById("applianceBtn");
//   input.oninput = () => { 
//   sortCard(input.value)}
// };

// export const searchInputUstensils = () => {
//   let input = document.getElementById("ustensilsBtn");
//   input.oninput = () => { 
//   sortCard(input.value)}
// };

const sortCard = (value) => {
  recipesArray.length = 0;
  for (let index = 0; index < recipes.length; index++) {
    const card = document.querySelectorAll(".card-container");
    if (ingredientsArray[index].includes(value) ||
      ustensilsArray[index].includes(value) ||
      nameArray[index].includes(value) ||
      applianceArray[index].includes(value))
    {
      
      console.log(recipesArray);
      
    }
    // else {
    //   card[index].style.display = "none";
    // }
  }
};