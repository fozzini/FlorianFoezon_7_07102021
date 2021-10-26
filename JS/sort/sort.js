import { recipes } from "../data/data.js";
import { ingredientsArray, ustensilsArray, recipesArray, applianceArray } from "../Array/Array.js";
// import { sortedApplianceArray, sortedIngredientsArray, sortedUstensilsArray } from "../Array/Array.js";


export const searchInput = () => {
  let input = document.getElementById("search");
  input.oninput = () => { 
  sortCard(input.value)}
};

export const searchInputIngredients = () => {
  let input = document.getElementById("ingredientsBtn");
  input.oninput = () => { 
  sortCard(input.value)}
};

export const searchInputAppliance = () => {
  let input = document.getElementById("applianceBtn");
  input.oninput = () => { 
  sortCard(input.value)}
};

export const searchInputUstensils = () => {
  let input = document.getElementById("ustensilsBtn");
  input.oninput = () => { 
  sortCard(input.value)}
};

const sortCard = (value) => {
  
  for (let index = 0; index < recipes.length; index++) {
    const card = document.querySelectorAll(".card-container");
    if (ingredientsArray[index].includes(value) == true){
      card[index].style.display = "flex"; 
      console.log(ingredientsArray);
      console.log(ustensilsArray[index]);
      console.log(applianceArray[index]);
    }
    else if(ustensilsArray[index].includes(value) == true){
      card[index].style.display = "flex"; 
      console.log(ingredientsArray[index]);
      console.log(ustensilsArray[index]);
      console.log(applianceArray[index]);
    }
    else if(recipesArray[index].includes(value) == true){
      card[index].style.display = "flex";}
    else if(applianceArray[index].includes(value) == true ){
      card[index].style.display = "flex"; 
      console.log(ingredientsArray[index]);
      console.log(ustensilsArray[index]);
      console.log(applianceArray[index]);
    }
    else {card[index].style.display = "none";}
  }
 }