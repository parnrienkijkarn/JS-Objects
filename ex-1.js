// Exercise #1: Food Order
// Create an object with its own original key values pair
const foodOrder = {
orderNumber: "A0234",
address: "Bangkok",
paymentType: "Cash",
totalPrice: 4500,
restaurantName: "MK",
}

console.log(foodOrder);

//Reassign values inside the object with .
foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";
console.log(foodOrder);

//Object must never be allowed to be reassigned; however, properties and values inside the object can.
foodOrder = "hehe"
console.log(foodOrder);

