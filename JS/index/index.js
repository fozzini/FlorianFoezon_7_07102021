import {card} from '../layout/card.js';
import { searchInput, searchInputAppliance, searchInputIngredients, searchInputUstensils } from '../sort/sort.js';



const init = () =>{
card();
searchInput();
searchInputAppliance();
searchInputIngredients();
searchInputUstensils();
// createSuggestion(doubleRemover(sortedIngredientsArray), "'ingredientsgst'" );
// createSuggestion(doubleRemover(sortedApplianceArray), "'appliancesgt'" );
// createSuggestion(doubleRemover(sortedUstensilsArray), "'ustensilsgt'" );
};

init();