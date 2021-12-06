import { inputEvent, placeHolderEvent, tagEvent } from '../event/eventListener.js';
import { createArrays } from '../array/array.js';
import { recipes } from '../data/data.js';
import { displayItems } from '../utils/utils.js';

/* initialisation du code */
const init =  () =>{
createArrays(recipes, true);
displayItems(recipes)  ;
inputEvent();
tagEvent();
placeHolderEvent();
};
 
init();

