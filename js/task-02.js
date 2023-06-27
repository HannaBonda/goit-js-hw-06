
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
   console.dir(listIngredients);

const makeIngredientsList = ingredients.map((element) => { const listEl = document.createElement("li");

 listEl.classList.add("item");
 listEl.textContent = element;
 
 listIngredients.append(listEl);

 return listEl;
 });  
    console.log(makeIngredientsList);

          





