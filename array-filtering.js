let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let filtered = numbers.filter(function evenNumbers(number){
  return number % 2 === 1
});


console.log(filtered);
