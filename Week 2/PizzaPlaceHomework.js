let pizzaPlace;
let numberOfToppings;

pizzaPlace = "Garrys Pizza";
numberOfToppings = 5;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`Welcome to ${pizzaPlace}, where we serve the finest pizza using only ${numberOfToppings} ingredients`);

if(numberOfToppings < 10){
  console.log("Quality not quantity.");
}


//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

//An example of the output you want for in this assignment is:

//The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.


for(let i = 2; i <= numberOfToppings; i++){
  if(i % 2 == 0 ){
    console.log(i);
  }
}
