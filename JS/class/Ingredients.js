
export class Ingredients{
  
  constructor(data){
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit = data.unit;
  }
  createIngredients(){
    let undefQuantity = () =>{if (typeof this.quantity === 'undefined') { 
      return '' 
    } else{return this.quantity}}
    let undefUnit = () =>{if (typeof this.unit === 'undefined') { 
      return '' 
    } else{return this.unit}}
    /* création des ingrédients */
    return`<p class="card-text mb-0 fs-6" style='font-size:12px;'><strong >${this.ingredient} : </strong><small>${undefQuantity()} ${undefUnit()}</small></p>`;
  }
  
}