import { createRecipesArray } from "../array/array.js";

export const getData = async () => {
  const url = "data.json";
  await fetch(url)
  .then((resp) => resp.json())
  .then(data => createRecipesArray(data))
  .catch((e) => console.log("une erreur c'est produite", e)); 
}
