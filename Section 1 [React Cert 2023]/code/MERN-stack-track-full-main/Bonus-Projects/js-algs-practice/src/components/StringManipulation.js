/* eslint-disable no-lone-blocks */
 /* 
ASSIGNMENT: STRING MANIPULATION

1. Write a function called stringalyze() that takes in 
    one or two strings and returns one of three messages: 
    - PALINDROME if the ONE word is the same forward and backwards: "kayak"
    - ANAGRAM if the TWO words use the same letters: "peach" and "cheap"
    - NOTHING if the one word is NOT a palindrome or if the words are not anagrams

2. Write a function that takes in an array of strings or numbers and returns 
    an array of just the duplicates found, with only one instance 
    of each duplicate in the output.
    The result should be in alphabetical order for string and ascending order for nums
    //    INPUT                                                             OUTPUT
    //    [2,7,4,4,3,1,4,6,7,2,5]                                           [2,4,7]  
    //    ['lime','kiwi','plum','kiwi','apple''pear','lime','pear']         ['kiwi','lime','pear']

3. Write function that takes in an array full names strings, with provided starter example.
    const fullNames = ['Andrew Atkins', 'Benjamin Boggs', 'Amy Lewis', 'Danny Jones', 'Cynthia Cobb'];
    
    The function returns an array of objects, one per inputted name-string. 
    Each object has 4 properties each: fname, lname, user, pswd
    Your job is to generate values for these four keys, according to these rules:
        - fname : first name from the input array of full-name strings
        - lname : last name
        - user  : first name to lowercase, 
                    plus the first letter of the last name to uppercase 
                    plus a number equal to the total number of letters in both names
        - pswd :  first name backwards, with backwards capitalization 
                    plus a special character, based on these rules:
                    "&" if first and last names are equal length AND start w same letter:
                    "%" if first and last names are equal length BUT do NOT start w same letter:
                    "$" if first and last names start w same letter BUT are unequal lengths
                    "#" if first and last names are unequal lengths AND 
                        start w different letters plus a number : 
                        the square of the difference in the name lengths, which could be zero
*/

function StringManipulation() {
    {/* Stringalyze Algorithm */}
    // function stringalyze(str) {

    // }

    {/* Find Duplicate Values */}
    // function findDuplicateVals(str) {
        
    // }

    {/* Arrays of Strings Into Arrays of Objects */}
    const fullNames = ['Andrew Atkins', 'Benjamin Boggs', 'Amy Lewis', 'Danny Jones', 'Cynthia Cobb'];
    
    // Make an array of objects from the input array of strings
    function arrStrToArrObj(arrStr) {
        let returnArr = arrStr.map(e => {
            let eArr = e.split(" ");

            let fName = eArr[0];
            let lName = eArr[eArr.length - 1];

            let user = fName.toLowerCase() + lName[0] + (fName.length + lName.length);
            
            let pwd = fName.toLowerCase().split("").reverse().join("");
            pwd = pwd[0].toUpperCase() + pwd.slice(1);

            // Ordered conditionals similar to Fizzbuzz algorithm
            if(fName.length === lName.length && fName[0] === lName[0]) {
                pwd += "&";
            }

            else if(fName.length === lName.length) {
                pwd += "%";
            }

            else if(fName[0] === lName[0]) {
                pwd += "$";
            }

            else {
                pwd += "#";
            }

            pwd += ((fName.length - lName.length)**2);


            return {
                fName: fName,
                lName:lName,
                user: user,
                pwd: pwd
            }
        });

        // TODO: alg is working, 
        // but React state is getting in the way of it displaying properly
        console.log(returnArr);
    }


    return ( 
        <>
            <h2>String Manipulation</h2>

            <b>Stringalyze Algorithm</b>

            <p>Test Input: {}</p>
            <p>Expected Output: </p>
            <p>Output: {}</p>

            <p>Test Input: {}</p>
            <p>Expected Output: </p>
            <p>Output: {}</p>

            <br/>

            <b>Find Duplicate Values</b>

            <p>Test Input: {}</p>
            <p>Expected Output: </p>
            <p>Output: {}</p>

            <p>Test Input: {}</p>
            <p>Expected Output: </p>
            <p>Output: {}</p>

            <br/>

            <b>Arrays of Strings Into Arrays of Objects </b>

            <p>Test Input: {}</p>
            <p>Expected Output: </p>
            <p>Output: {}</p>

            <p>Test Input: {fullNames}</p>
            <p>Expected Output: </p>
            <p>Output: {arrStrToArrObj(fullNames)}</p>
        
        </> 
    );
}

export default StringManipulation;