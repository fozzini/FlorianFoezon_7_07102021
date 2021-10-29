import { searchInput } from '../sort/sort.js';
import {applianceArray, arrayCreator, createRecipesArray, ingredientsArray, nameArray, ustensilsArray} from '../Array/Array.js';
import {card} from '../layout/card.js';
const init = () =>{
createRecipesArray(); 
arrayCreator(applianceArray, "appliance");
arrayCreator(nameArray, "name");
arrayCreator(ustensilsArray, "ustensils");
arrayCreator(ingredientsArray, "ingredients");
searchInput();
// searchInputAppliance();
// searchInputIngredients();
// searchInputUstensils();
card();
};

init();