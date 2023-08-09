// block15: Objects & Methods
// Froyo Survey
// #2 Creating Object labled customer & adding key:value pairs;
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "target",
  firstVisit: false,
};
// #3 Correcting values;
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];

// #4 Deleting 2 properties;
delete customer["zipCode"];
delete customer["favoriteStore"];

// Adding key:values to the customer object;
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// Printing keys in Array form;
console.log(Object.keys(customer));

// Extra--Printing key:value pairs in table format;
console.table(customer);