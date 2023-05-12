/* 
ASSIGNMENT: 
#  if the first or last word of the cereal name is "Berry":, add ' - How Berry Scary!'
#  else if the first AND last word start with "C", add ' - CC is Double Creppy!'
#  else if the first OR last word start with "C", add ' - C is for Creppy!'
#  else if the first AND last words rhyme, add ' - Very Scary Rhyme!' at the end
#  rhyming words match the last three letters, so 'frute' rhymes with 'brute'
# else if first OR last word start with the same letter (not "C"), add ' - Alarming Alliteration!'
# if none of the above apply, just print the name of the cereal: 'Apple Dracs'
# In cases where a cereal name satisfies two conditions:
#     "Berry" take precedence over alliteration: 'Boo Berry - How Berry Scary!'
#     Double C's take precedence over alliteration: 'Count Chocula - Double Creepy!'
#   print the cereal names with their messages, one at a time, on a loop
# run the function three times, once for each of the three provided lists
# Expected Output:
# Cap'n Creep - CC is Double Creppy!
# Quaking Oats
# Tales of the Crisp - "C" is for Creepy!
# Boo Berry - How Berry Scary!
# Frightful Flakes - Alarming Alliteration!
# Apple Dracs
# Yummy Mummy - Very Scary Rhyme!
# Count Chocula - CC is Double Creppy!
# Frute Brute - Very Scary Rhyme!
# Franken Berry - How Berry Scary!
# Chucky Harms - "C" is for Creepy
# Fruity Krueger
# Sugar Chops - "C" is for Creepy
# Machete Mateys - Alarming Alliteration
# Scream of Wheat
*/


function CerealNaming() {
    const scary_cereals = ['Cap\'n Creep', 'Quaking Oats', 'Tales of the Crisp', 'Boo Berry', 'Frightful Flakes', 'Strawberry Screams'];
    const monster_cereals = ['Apple Dracs', 'Yummy Mummy', 'Count Chocula', 'Frute Brute', 'Franken Berry'];
    const psycho_cereals = ['Chucky Harms', 'Fruity Krueger', 'Sugar Chops', 'Machete Mateys', 'Scream of Wheat'];

    function setCerealList(allCerealsArray) {
        let newCerealNamesArr = [];

        // Loop through array of all cereal names
        // (& call helper functions) to perform checks
        for(let i = 0; i < allCerealsArray.length; i++) {
            let newCerealName = "";

            let cerealName = allCerealsArray[i];

            // For each cereal, split the cereal name on whitespace
            let cerealNameWords = cerealName.split(" ");

            // Store first & last word as we will be using them for checks
            let firstWord = cerealNameWords[0];
            let lastWord = cerealNameWords[cerealNameWords.length - 1];

            // If the cereal name contais the word "Berry":, add ' - How Berry Scary!'
            // What about "Strawberry" etc? Handled by includes lower case berry
            if(cerealName.includes("Berry") || cerealName.includes("berry")){
                newCerealName = cerealName + " - How Berry Scary!";
            }

            // Else if the first AND last word start with "C", add ' - CC is Double Creepy!'
            else if(firstWord[0] === "C" && lastWord[0] === "C") {
                newCerealName = cerealName + " - CC is Double Creepy!";
            }

            // Else if the first OR last word start with "C", add ' - C is for Creepy!'
            else if(firstWord[0] === "C" || lastWord[0] === "C") {
                newCerealName = cerealName + " - C is for Creepy!";
            }

            // Else if the first AND last words rhyme, add ' - Very Scary Rhyme!' at the end
            // Here, rhyming words match the last three letters, so 'frute' rhymes with 'brute'
            else if(firstWord.slice(-3) === lastWord.slice(-3)) {
                newCerealName = cerealName + " - Very Scary Rhyme!";
            }

            // Else if first OR last word start with the same letter (not "C"), add ' - Alarming Alliteration!'
            // Don't have to check if they were C because alg wouldn't have gotten here due to prior check
            else if(firstWord[0] === lastWord[0]) {
                newCerealName = cerealName + " - Alarming Alliteration!";
            }

            // If none of the above apply, just print the name of the cereal: 'Apple Dracs'
            else {
                newCerealName = cerealName;
            }

            // In cases where a cereal name satisfies two conditions, the order handles the prioritization of the conditions

            // Done with conditionals, add newCerealName to return array
            newCerealNamesArr.push(newCerealName);

        }

        return newCerealNamesArr.toString();
    }

    return ( 
        <>
            <h2>Cereal Naming</h2>
            <p>Test Input: ['Cap\'n Creep', 'Quaking Oats', 'Tales of the Crisp', 'Boo Berry', 'Frightful Flakes', 'Strawberry Screams']</p>
            <p>Output: {setCerealList(scary_cereals)}</p>

            <p>Test Input: ['Cap\'n Creep', 'Quaking Oats', 'Tales of the Crisp', 'Boo Berry', 'Frightful Flakes', 'Strawberry Screams']</p>
            <p>Output: {setCerealList(monster_cereals)}</p>

            <p>Test Input: ['Cap\'n Creep', 'Quaking Oats', 'Tales of the Crisp', 'Boo Berry', 'Frightful Flakes', 'Strawberry Screams']</p>
            <p>Output: {setCerealList(psycho_cereals)}</p>
        </>
     );
}

export default CerealNaming;