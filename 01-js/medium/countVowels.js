/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count=0;
  let cleanedstr = str.replace(/[.,!?]/,'').toLowerCase();
  let n = cleanedstr.length;
  for(let i=0;i<n;i++)
  {
    if(cleanedstr[i]=='a' || cleanedstr[i]=='e' || cleanedstr[i]=='i' || cleanedstr[i]=='o' || cleanedstr[i]=='u' )
    {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
