# 01.01. Assignment
***

## Goals

- Create modules
- Export modules
- Import modules
- Run files

***
## Setup

- After creating any of the following modules, import it at the top of **`Test.js`**. 
- After all of the imports, use each module to test it. Make sure to test all/various cases!

***
## Age Checker

In the **modules** folder, create a file called `ageChecker.js`. On that file, write and export a function called `ageChecker()`. This function will take a number that represents someone's age. 

- If the age is less than 17, console log `"Child"`. 
- If the age is between 17 and 20 years old (inclusive), console log `"Military-Age"`. 
- If the age is 21 or older, console log `"Alcohol-age"`. 
- In any other case, console log `"ageChecker error: unexpected input"`.

example:

```js
ageChecker(16) // => "Child"
ageChecker(19) // => "Military-age"
ageChecker(26) // => "Alcohol-age"
```

***
## Fizz Buzz

In the **modules** folder, create a file called `fizzBuzz.js`. On that file, write and export a function called `fizzBuzz()`. This function will take a number that represents how many numbers to count. In this function, write a `for` loop that loops as many times as the count that is passed into the function.

- If the count is divisible by 3, console log `"fizz"` instead of the number.
- If the count is divisible by 5, console log `"buzz"` instead of the number.
- If the count is divisible by 3 AND 5, console log `"fizzbuzz"` instead of the number.
- For any other number, console log it.

example:

```js
fizzBuzz(7) // => 1, 2, fizz, 4, buzz, 6, 7
```

***
## Fibonacci

In the **modules** folder, create a file called `fibonacci.js`. On that file, write and export a function called `fibonacci()`. 

The Fibonacci Sequence is the series of numbers:

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The next number is found by adding up the two numbers before it:

- the first three numbers are always 0, 1, 1
- the 2 is found by adding the two numbers before it (1+1),
- the 3 is found by adding the two numbers before it (1+2),
- the 5 is (2+3),
- and so on!

This function will take a number that represents how many numbers in the fibonacci sequence to console log.

example:

```js
fibonacci(7) // => 0, 1, 1, 2, 3, 5, 8
```