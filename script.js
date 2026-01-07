/**
 * function
add two numbers a and b
return output as sum

call the function with sample inputs as 2 and 3
required output has to be printed as 5

answer:
def -> keyword for function
add_two_numbers -> function name 
a , b -> parameters  (whatever the value you need to pass to the function)
return -> keyword - output return 
anything below return statement won't be executed
 */

function addTwoNumbers(a, b) {
  let sum = a + b;
  return sum;
}

console.log(addTwoNumbers(2, 3));

// write function to
// function 1 -> areaOfRectangle()
// find area of rectangle
// inputs -> length ,breadth
// output -> area

function areaOfRectangle(length, breadth) {
  let area = length * breadth;
  return area;
}

console.log(areaOfRectangle(20, 30));
// test case -> 20,30 -> 600

// write function to
// function 2-> perimeterOfRectangle()
// find perimeter of rectangle
// inputs -> length ,breadth
// output -> perimeter
// test case -> 5,10 -> 2 * (l + b)= 2*(5+10) = 2 *(15) = 30

function perimeterOfRectangle(length, breadth) {
  let perimeter = 2 * (length + breadth);
  return perimeter;
}

console.log(perimeterOfRectangle(5, 10));


