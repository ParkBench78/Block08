const dinner = {
  hamburger: 1200,
  steak: 2000,
  soup: 800,
  macAndCheese: 1400,
  soupAndSalad: 1600
};
console.log(Object.keys(dinner));
console.log(Object.values(dinner));

let totalCost1 = 0;

for (const individualMeal in dinner) {
  totalCost1 += dinner[individualMeal];
}
console.log(totalCost1);

let totalCost2 = 0;
const prices = Object.values(dinner);
for (let i=0; i < prices.length; i++) {
  totalCost2 += prices[i];
}
console.log(totalCost2);
