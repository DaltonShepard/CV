function multiplyBy2(input) {
  return input * 2;
}   
console.log(multiplyBy2(10));

const multiplyBy3 = function (input) {
  return input * 3;
}
console.log(multiplyBy3(10));

const greet = (name) => ("Hey " + name);
console.log(greet("Awesome Javascript programmers!"));

const multiplyBy4 = (input) => {return input * 4};
console.log(multiplyBy4(10));

const multiplyBy5 = input => input * 5;
console.log(multiplyBy5(10));

let array = [1, 2, 3, 4, 5];
console.log(array);
let output = [];
for (i in array) {
    output[i] = multiplyBy2(array[i]);
}
console.log(output);