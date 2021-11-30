import { Ingredients } from "./Ingredients.js";
/* création des recettes */
export class Recipe{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }
  createHtml(){
    return`<div class="card-container col-md-4">
      <div class="card mb-4 box-shadow">
        <div class="card-img-top" style="height: 235px; width: 100%; display: block;background-color:#C7BEBE;"></div>
        <div class="card-body" style="height: 235px; width: 100%; background-color:#E7E7E7;">
          <div class="row d-flex justify-content-between align-items-center">
            <p class="col-8 pr-0">${this.name}</p>
            <p class="col-3 text-dark ml-0 pl-0 pr-0 font-weight-bold"><i class="far fa-clock pr-2"></i>${this.time} mins</p>
          </div>
          <div class="row">
            <ul class="col card-text font-weight-bold ingredients">${this.createRecipe()}</ul>
            <p class="col card-text" style="font-size:14px; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;" >${this.description}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  createRecipe(){
    let array = this.ingredients;
    const arrayRawHtml = [];
    for (let index = 0; index < array.length; index++) {
      const ingredient = new Ingredients(array[index]);
      const rawHtml = ingredient.createIngredients();
      arrayRawHtml.push(rawHtml);
    };
    return arrayRawHtml.join('');
  }
}