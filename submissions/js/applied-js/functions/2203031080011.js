// Task 1: Square Numbers in an Array
function squareElements(arr) {
    return arr.map((num) => num ** 2);
  }
  let input = [1, 2, 3, 4, 5];
  console.log(squareElements(input));
  
  // Task 2: Filter Out Even Numbers
  function getEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
  }
  input = [12,13,14,15,16];
  console.log(getEvenNumbers(input));
  
  // Task 3: Sum of Positive Integers
  function sumPositives(numbers) {
    return numbers.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
  }
  input = [1, -2, 3, -4, 5];
  console.log(sumPositives(input));
  
  // Task 4: Extract Names from an Array of Objects
  function extractNames(arr) {
    return arr.map((item) => item.name);
  }
  input = [{name: 'meet'}, {name: 'ravi'}, {name: 'deep'}];
  console.log(extractNames(input));
  
  // Task 5: Find the Word with the Maximum Length
  function getLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
  input = ['vokswagen', 'marutisuzuki', 'bmw', 'honda', 'mercedes'];
  console.log(getLongestWord(input));
  