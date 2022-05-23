var myArray = [1,2,3,4,5,6,7,8,9,10];

function Cheese (melon, cantaloupe){
melon.push(cantaloupe);
console.log(melon);
}
Cheese(myArray,35)

function bologna(myArray){
  return myArray.splice(6, 2)
}
console.log(bologna(myArray));

function hamstring(myArray){
    return myArray.slice(2, 3)
}
console.log(hamstring(myArray));