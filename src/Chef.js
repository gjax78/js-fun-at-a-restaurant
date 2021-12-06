class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, boolean) {
    if (boolean === true) {
      return `Good morning, ${name}!`
    }
    else return `Hello, ${name}!`
  }
  checkForFood(item, name) {
    //function checkForFood(item) {
      //for (var i = 0; i < item.length; i++) {
        if (item.name === name) {
          return `Yes, we're serving ${name} today!`;
        }
      }
    }
  //}
//}

module.exports = Chef;
