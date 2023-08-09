//block16: Discount Chain Workshop;
// Create the logic for a checkout system that returns the total cost of all refills including if there's a subscription and/or a coupon.
// With subscription, the total final cost will be 25% less of the initial total.
// With coupon, the total final cost will be $10 less of the initial total.
// At the end of the script, return and log the string "Your grand total is ${finalAmount}. 

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

let price = timmy['pricePerRefill']
let r = timmy['refills']
function withCoupon(price, r) {
  totalCostCoupon = price * r - 10;
  return console.log("Your grand total is $" + totalCostCoupon);
}
withCoupon(price, r);

price = sarah['pricePerRefill']
r= sarah['refills']
function withSubscription(price, r) {
  totalCostSubscription = (price * r) * 0.75;
  return console.log("Your grand total is $" + totalCostSubscription);
}
withSubscription(price, r);

price = rocky['pricePerRefill']
r = rocky['refills']
function withBoth(price, r) {
  totalCostBoth = (price * r) * 0.75 - 10;
  return console.log("Your grand total is $" + totalCostBoth);
}
withCoupon(price, r);
