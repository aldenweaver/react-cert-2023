/* 
ASSIGNMENT: INT MANIPULATION

1. Find and return the first missing value in a sequence of otherwise conscutive numbers
    const nums1 = [1,2,3,5,6,7,9,10]; // 4
    const nums2 = [12,13,14,15,17]; // 16

2. The "Digital Root" of a number is defined 
    as the sum of the digits; BUT is always a 1-digit
    number, so you may have to re-add digits:
    // NUMBER       DIGITAL ROOT     THE MATH
    //    45            9             4+5 = 9
    //   456            6             4+5+6 = 15 => (1+5 = 6)
    Write a function that takes in a number or array of numbers
    & returns the "Digital Root" of the number or each number in the array
    e.g., [55, 66, 77, 7898] => [1, 3, 5, 5]

BONUS: find and return the pattern-breaker -
    that is, the first value in the array that messes up the pattern
    (Is this possible without a dictionary of all possible paterns?)
    const dubls = [1,2,4,8,16,32,50,65,80,160,329]; // 50
    const fibos = [0,1,1,2,3,5,8,13,21,37,55,89,144]; // 37

    function findPattern(inputArr){
        let pattern = "";

        return pattern;
    }

    function findPatternBreaker(inputArr, pattern){

    }
*/

function IntManipulation() {
    const data1 = [1,2,3,5,6,7,9,10]; // First Non-Consec: 4
    const data2 = [12,13,14,15,17]; // First Non-Consec: 16

    const data3 = 45; // Digital Root: 9
    const data4 = 456; // Digital Root: 6
    const data5 = [55, 66, 77, 7898]; // Digital Root: [1, 3, 5, 5]

    // If the number at inputArr[i + 1] 
    // is not 1 more than the number at inputArr[i], 
    // then the number at inputArr[i + 1] would not be consecutive
    function findFirstNonconsecValue(inputArr) {
        // Since we will be checking i + 1, end the loop at length - 2
        for(let i = 0; i < inputArr.length - 2; i++) {
            if(inputArr[i] + 1 !== inputArr[i + 1]){

                // Since the missing value in the list of consecutive values
                // is one less than the value at the index that broke the pattern,
                // return the inputArr[i + 1] - 1 OR inputArr[i] + 1
                // Since we only want the first non-consecutive value, 
                // return, otherwise value will end up being replaced
                // & its final value will be the last non-consecutive value
                return inputArr[i] + 1;
            }
        }
    }

    // Recursive function
    // If the number is a single digit, we can stop the algorithm
    // Else, calculate the sum of num's digits & call this function on that
    // TODO: alg is correct, but output is wrong - is this a React state issue?
    function findDigitalRoot(num) {
        // Recusion base case
        if(num < 10) {
            return num;
        }

        // Manipulate int to turn into array
        let arr = Array.from(num.toString());

        // This will hold the sum of the digits in the array
        let newNum = 0;

        // Add the digits together
        for(let i = 0; i < arr.length - 1; i++){
            newNum += parseInt(arr[i]);
        }
        
        // This will handle if the newNum needs to be broken down more
        return findDigitalRoot(newNum);
    }

    // Class Solution
    // function findDigitalRoot(num) {
    //     // Old: num = num.toString().split("").map((e) => Number(e)).reduce((a, b) => a + b, 0);
    //     // New:
    //     num = num.toString().split("").reduce((sum, e) => sum + Number(e), 0);
    //     return num < 10 ? num : findDigitalRoot(num);
    // }

    // Will calculate digital root of input
    // Handles both ints & arrays
    function processDigitalRoot(input) {
        // If input is array, call digital root function on each item in array
        if(Array.isArray(input)) {
            let returnArr = [];

            for(let i = 0; i < input; i++) {
                returnArr.push(findDigitalRoot(parseInt(input[i])));
                console.log(returnArr);
            }

            // TODO: how to write as map?
            // input.map((val) => {
            //     returnArr.push(findDigitalRoot(parseInt(val)));
            //     console.log(returnArr);
            // });

            return returnArr;
        }

        // If input is not array, we are assuming it is a number,
        // so call digital root function directly on it
        else {
            findDigitalRoot(input);
        } 
    }

    return ( 
        <>
            <h2>Int Manipulation</h2>

            <b>Find & return first missing value in a sequence of consecutive numbers</b>

            <p>Test Input: {data1.toString()}</p>
            <p>Expected Output: 4</p>
            <p>Output: {findFirstNonconsecValue(data1)}</p>

            <p>Test Input: {data2.toString()}</p>
            <p>Expected Output: 16</p>
            <p>Output: {findFirstNonconsecValue(data2)}</p>

            <br/>

            <b>Find & return the digital root of a number (or for each num in array)</b>

            <p>Test Input: 5</p>
            <p>Expected Output: 5</p>
            <p>Output: {processDigitalRoot(data5).toString()}</p>

            <p>Test Input: {data3.toString()}</p>
            <p>Expected Output: 9</p>
            <p>Output: {processDigitalRoot(data5).toString()}</p>

            <p>Test Input: {data4.toString()}</p>
            <p>Expected Output: 6</p>
            <p>Output: {processDigitalRoot(data5).toString()}</p>

            <p>Test Input: [{data5.toString()}]</p>
            <p>Expected Output: [1, 3, 5, 5]</p>
            <p>Output: [{processDigitalRoot(data5).toString()}]</p>
        </>
     );
}

export default IntManipulation;