// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$("#symbol").click(function() {
		var input = $("#input").val();
		toPigLatin(input);
	})
	
	function toPigLatin(input) {
		
	
		// `.split` the input and assign to variable
		var words = input.split(' ');
		// loop over the split input (for loop)
		for (var counter = 0; counter < 4; counter = counter + 1) {
			console.log(words[counter]);
			var word = words[counter];
			// if word starts with vowel
			// if words does not start with vowel
			// String.slice
			var firstletter = word.slice(0, 1);
			
			if (["a", "e", "i", "o", "u"].includes(firstletter)) {
			    console.log('it is a vowel');
			    word + "yay"
			} else {
			    console.log('its a constanant')
			}
			
			// 
		}
		// console.log each word
		
		
	}

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


