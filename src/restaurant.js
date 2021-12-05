

function createRestaurant(name, menus) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}

function addMenuItem(restaurant, items) {
    //for (var i = 0; i < restaurant.length; i++) {
      //if (restaurant[i].lunch.includes(items)) {
        if (items.type === "lunch" && restaurant.menus.lunch.includes(items) === false) {
          restaurant.menus.lunch.push(items)
        }
        else if (items.type == "breakfast" && restaurant.menus.breakfast.includes(items) === false) {
          restaurant.menus.breakfast.push(items)
      }
        else if (items.type == "dinner" && restaurant.menus.dinner.includes(items) === false) {
          restaurant.menus.dinner.push(items)
        }
}

function removeMenuItem(restaurant, name, type) {
  if (type === "breakfast") {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (restaurant.menus.breakfast[i].name === name) {
        restaurant.menus.breakfast.splice(i,1)
    }
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`
}
  } else if (type === "dinner") {
      for (var i = 0; i < restaurant.menus.dinner.length; i++) {
        if (restaurant.menus.dinner[i].name === name) {
          restaurant.menus.dinner.splice(i,1)
      }
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`
    }
  } if (type === "lunch") {
        for (var i = 0; i < restaurant.menus.lunch.length; i++) {
          if (restaurant.menus.lunch[i].name === name) {
            restaurant.menus.lunch.splice(i,1)
              }
          return `No one is eating our ${name} - it has been removed from the ${type} menu!`
          }
        }
        return `Sorry, we don't sell ${name}, try adding a new recipe!`
      }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
