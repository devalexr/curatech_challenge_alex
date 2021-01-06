/*
Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

for (i = 1; i <= 100; i++) {
  
  let isMultipleOf3 = (i % 3 == 0);
  let isMultipleOf5 = (i % 5 == 0);

  if (isMultipleOf3 && !isMultipleOf5) {

    console.log('Fizz');

  }
  else if (isMultipleOf5 && !isMultipleOf3) {

    console.log('Buzz');

  }
  else if (isMultipleOf3 && isMultipleOf5) {

    console.log('FizzBuzz');

  }
  else {

    console.log(i);

  }
}
