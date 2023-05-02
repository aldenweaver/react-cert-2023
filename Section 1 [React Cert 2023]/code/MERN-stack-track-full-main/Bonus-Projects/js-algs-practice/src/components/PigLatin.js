function PigLatin() {
    function checkForVowels(firstChar) {
        // console.log("checkForVowels called");

        // Holds the vowels for our checks
        const vowels = ['a','e','i','o','u','A','E','I','O','U'];

        for(let i = 0; i < vowels.length; i++) {
            // console.log("checkForVowels iteration; firstChar: " + firstChar);
            if(vowels.includes(firstChar)) {
                console.log("checkForVowels returns true");
                return true;
            }
        }

        return false;
    }

    // Note: this function only capitalizes first letter
    // function formatCase(inputStr) {
    //     // Store first letter
    //     let firstLetter = inputStr.slice(0, 1);

    //     // Remove first letter
    //     inputStr = inputStr.replace(firstLetter, "");

    //     // Make first letter upper case
    //     //firstLetter = firstLetter.toUpperCase();

    //     // Add upper case first letter back on beginning
    //     inputStr = firstLetter + inputStr;

    //     return inputStr;
    // }

    // Takes a one-character str (char of type String)
    function isCapitalized(inputChar) {
        // Compare pattern
        let local = inputChar.toUpperCase();

        // If they are the same, it was already capitalized
        if(local === inputChar) {
            return true;
        }

        return false;
    }

    // Assume in the input string, that all punctuation is the last char of a given word
    // Cannot leave punctuation in before Pig Latin translation, has to be removed before translation, then added back on after translation
    // This will return whatever the punctuation is & returns it so it can be removed pre-translation & added post-translation in the function that calls this helper function
    // Note: Does not handle quotes currently
    // isQuotes flag could help handle quotes
    // Notes: Doesn't currently handle hyphenated words (can handle multiple hyphens in one word by splitting into array based on "-", translate/format each word in array, then re-hyphenate translated words)
    function findPunctuation(inputStr) {
        // RegEx
        let regex = /[,.<>;:!@'"?$*^#\\\/]/g;

        // Stores punctuation in string (if any)
        let punc = "";

        // Check if input string ends in a punctuation mark

        // To check if something is capitalized, you can make a copy, run a capitalize function, & if comparing the original to the value after the opertaion you find they are the same, then you know it was already capitalized

        // If replacing punc with nothing makes no change, then there was no punc to begin with
        // In which case you do not do anything, so check if not equal
        // If replacing punc with nothing does change the inputStr, then punc exists (the string has punctuation, so we have to handle it)
        if(inputStr.replace(regex, "") !== inputStr) {
            // Make a copy without changing it
            punc = inputStr.slice(-1);

            // Change it by setting it back to itself
            //inputStr = inputStr.slice(0, -1);

        }

        return punc; // TODO: look for more than one punc at a time (?)
    }

    function setPigLatin(inputStr) {
        // Convert everything to lower case before splitting into an array on whitespace
        // inputStr = inputStr.toLowerCase();
        let inputArr = inputStr.split(" ");

        //
        
        // Parsed input string
        //let inputArr = ["Apple", "Banana", "Chery"];
        // "Appleyay ananabay"
        
        let firstVowel = false;
        let finalReturnStr = "";

        // iterate through array of words parsed from input string
        for(let i = 0; i < inputArr.length; i++) {
            // Hold current word to avoid re-doing operation on array
            let currentWord = inputArr[i];

            // Holds current inputArr translation
            let currentPigLatin = "";

            // Find & remove punctuation prior translation
            // Store it so can add back after translation
            let currentPunc = findPunctuation(currentWord);
            currentWord = currentWord.replace(currentPunc, "");

            // Holds first letter of current word
            let firstLetter = currentWord.slice(0, 1);

            // Checks if first letter was capitalized
            let isCap = isCapitalized(firstLetter);

            // Now can un-capitalize if it was capitalized
            // Doesn't require a check yet
            // Note: alg currently only checks for first letter capitalization & does not consider multiple capitalized letters in one word
            firstLetter = firstLetter.toLowerCase();

            // Check first letter for vowels
            firstVowel = checkForVowels(firstLetter);
            // console.log("checkForVowels returned: " + firstVowel);

            // If starts with a vowel, add “yay” to end of input.
            if(firstVowel) {
                currentPigLatin = currentWord + "yay";
                // console.log("Answer: " + currentPigLatin);
                //currentPigLatin = formatCase(currentPigLatin);
                //finalReturnStr = finalReturnStr + ' ' + currentPigLatin;
            } else {
              // If starts with a consonant(s), remove consonant(s) at start of input, & add to end of string, then add “ay”.  

              // TODO

              // Consonant exists at beginning of word 
              // We have already checked the first letter. It is a consonant. Now we need to iterate through the rest of the word to check for vowels.
              let consonantPrefix = firstLetter;
              
              // Start at second letter
              // Iterate through consonant prefix
              // Alternative strategy: find first vowel & use index of first vowel to slice string
              for(let i = 1; i < currentWord.length; i++) {
                // If checkForVowels is false, it is a consonant still
                if(!checkForVowels(currentWord[i])) {
                    consonantPrefix += currentWord[i];
                } else {
                    // Else the consonant prefix is done
                    break;
                }
              }

              // Return value will be input minus consonantPrefix
              currentPigLatin = currentWord.slice(consonantPrefix.length, currentWord.length);
              // Plus the consonantPrefix on end
              currentPigLatin += consonantPrefix + "ay";

             
            }


            // The translation will have a different first letter
            let firstPigLetter = currentPigLatin.slice(0, 1);

            // If isCap, capitalize this letter
            if(isCap) {
                firstPigLetter = firstPigLetter.toUpperCase();
            }
            
            currentPigLatin = firstPigLetter + currentPigLatin.slice(1);
            
            // Re-add punctuation after translation & formatting
            currentPigLatin += currentPunc;

            // Add current word to final return string
            finalReturnStr = finalReturnStr + ' ' + currentPigLatin;
        //   return finalReturnStr; 

        }

      
        return finalReturnStr;
    }

    return ( 
        <>
            <p>{setPigLatin("This is an example String")}</p>
            <p>{setPigLatin("John, I think it was, said to Mary: How do you say Nice to meet you! in Pig Latin?")}</p>
        </>
     );
}

export default PigLatin;