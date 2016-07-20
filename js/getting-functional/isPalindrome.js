// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

var str = 'abcccba';

// Example Output

// false


function isPalindrome(string) {
  newString = string.toLowerCase();

  console.log("newString: ", newString);

  for(var i = 0; i < newString.length; i++) {

    var lastIdx = newString.length - (i + 1);

    if (newString.charAt(i) !== newString.charAt(lastIdx)) {
      return false;
    };
  };
  return true;
};

var result = isPalindrome(str);

