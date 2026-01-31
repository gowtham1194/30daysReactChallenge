// Here we mostly use Ternary op for easy coding

//Ticket
let age = 10;
let ticket = age > 18 ? "Adult" : "Children";
console.log(ticket);

//Rating
let rating = 6;
let result =
  rating >= 8 ? "Blockbuster" : rating >= 5 && rating <= 7 ? "Average" : "Flop";
console.log(result);

//Login
let isLoggedIn = true;
let role = "user";

let finalResult = !isLoggedIn
  ? "Please Login"
  : role == "user"
    ? "User"
    : "Admin";

console.log(`Welcome ${finalResult}`);
