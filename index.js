/*function isPalindrome(word) {
  // racecar 7(letters)/2 = 3.5
  //if you itterate by half you get 'e' from racecar
  //aaaaaa 6/3 = 3
  //if you itterate by half you get the middle of the word (middle aa's)
  for (let i = 0; i < word.length / 2; i++) {
       //check each letter to he corresponding letter from the end
       //if any of the letters dont match, return false (not a palindrome)
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    if (startChar !== endChar) return false
  }
  return true 
}*/

/*function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) return false
  }
  return true 
} */

/*function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}*/

function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
//r a c e c a r 
//0 1 2 3 4 5 6 
//i           j

//r a c e c a r 
//0 1 2 3 4 5 6 
//  i       j

//r a c e c a r 
//0 1 2 3 4 5 6 
//    i   j

//r a c e c a r 
//0 1 2 3 4 5 6 
//      ij
/* 
-make a function that returns true if a word is a palindrome
-that means if the first letter is the same as the last letter and the second letter is the second as the second to last letter and so on. until we hit the middle. that means we should return true
-iterate from the beginnning to the middle fo the word
-if the letters do match then return true (palindrome)

abba
^  ^
 ^^
 true

robot
^   ^
 false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
