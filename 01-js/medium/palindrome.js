/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.split(".").join("").split("!").join("").split("?").join("").split(",").join("").split(" ").join("").toLowerCase();
  let n = str1.length;
  for(let i=0;i<n;i++)
  {
    if(!(str1[i]==str1[n-i-1]))
    {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
