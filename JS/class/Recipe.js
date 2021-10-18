
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
    return`<div class="col-md-4">
      <div class="card mb-4 box-shadow">
        <div class="card-img-top" style="height: 225px; width: 100%; display: block;background-color:#C7BEBE;"></div>
        <div class="card-body" style="background-color:#E7E7E7;">
          <div class="row d-flex justify-content-between align-items-center">
            <p class="col-8 pr-0">recette de la tarte au citron</p>
            <p class="col-3 text-dark ml-0 pl-0 pr-0 font-weight-bold"><i class="far fa-clock pr-2"></i>9 mins</p>
          </div>
          <div class="row">
            <p class=" col card-text font-weight-bold">This is a wider card with supporting text below as a natural</p>
            <p class=" col card-text">This is a wider card with supporting text below as a natural</p>
          </div>
        </div>
      </div>
    </div>`;
  }
}