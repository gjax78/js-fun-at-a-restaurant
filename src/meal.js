function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredients, array) {
  if (array.includes(ingredients)) {
  } else {
    return array.push(ingredients);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  return price - (price * .1);
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
