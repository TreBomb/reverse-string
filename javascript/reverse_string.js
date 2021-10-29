function reverseString(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'ereht olleh'");
  console.log("=>", reverseString("hello there"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


// put each letter of the string into an array
// reverse the array
// join the array into a string
// return the string