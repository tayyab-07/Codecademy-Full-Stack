const menu =
{
  _meal: [],
  _price: [],

  set meal(mealToCheck)
  {
    if (typeof mealToCheck === "string") 
    {
      this._meal.push(mealToCheck);
    }
  },

  set price(priceToCheck) 
  {
    if (typeof priceToCheck === "number") 
    {
      this._price.push(priceToCheck);
    }
  },

  get todaysSpecial()
  {
    let rndMeal = Math.floor(Math.random() * this._meal.length);
    let rndPrice = Math.floor(Math.random() * this._price.length);

    if (this._meal && this._price)
    {
      return `Today's Special is ${this._meal[rndMeal]} for £${this._price[rndPrice]}`;
    }
    else
    {
      return `Meal or Price was not set correctly!`;
    }
  }

};

menu.meal = 'pizza';
menu.price = 3;

menu.meal = 'apple juice';
menu.price = 1;

menu.meal = 'sandwiches';
menu.price = 4;

console.log(menu.todaysSpecial);