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
    function formatCase(inputStr) {
        // Store first letter
        let firstLetter = inputStr.slice(0, 1);

        // Remove first letter
        inputStr = inputStr.replace(firstLetter, "");

        // Make first letter upper case
        firstLetter = firstLetter.toUpperCase();

        // Add upper case first letter back on beginning
        inputStr = firstLetter + inputStr;

        return inputStr;
    }

    function setPigLatin(inputStr) {
        inputStr = inputStr.toLowerCase();
        let inputArr = inputStr.split(" ");
        
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

            // Holds first letter of current word
            let firstLetter = currentWord.slice(0, 1);

            // Check first letter for vowels
            firstVowel = checkForVowels(firstLetter);
            // console.log("checkForVowels returned: " + firstVowel);

            // If starts with a vowel, add “yay” to end of input.
            if(firstVowel) {
                currentPigLatin = currentWord + "yay";
                // console.log("Answer: " + currentPigLatin);
                currentPigLatin = formatCase(currentPigLatin);
                finalReturnStr = finalReturnStr + ' ' + currentPigLatin;
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
              currentPigLatin = currentWord.replace(consonantPrefix, "");
              // Plus the consonantPrefix on end
              currentPigLatin += consonantPrefix + "ay";

              // Format case of word
              currentPigLatin = formatCase(currentPigLatin);
  
              // Add current word to final return string
              finalReturnStr = finalReturnStr + ' ' + currentPigLatin;
            //   return finalReturnStr;              
            }

        }

      
        return finalReturnStr;
    }

    return ( 
        <>
            <p>{setPigLatin("This is AN example STRing")}</p>
        </>
     );
}

export default PigLatin;