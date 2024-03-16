let A = [50, 107, 'jack', 83, 'killer', 'son', true];

// question 1

let onlyStrings = A.filter (i => typeof i === 'string');
console.log("only strings in a new array", onlyStrings);


// question 2

let onlyNumbers = A.filter (num => typeof num === 'number').sort((x, y) => x - y);
console.log("a new array from numbers and sort them", onlyNumbers);


// question 3

let revString = onlyStrings.reverse ();
console.log("reversed string array", revString);


// question 4

let combineArray = onlyNumbers.concat(onlyStrings);
console.log("combine both number and string array", combineArray);


// question 5

combineArray.splice (5, 3);
console.log("delete 3 items from the 6th item from the combined array", combineArray);


// question 6

let smallNumber = A.filter(num =>typeof num === 'number' && num < 100);
console.log("less than 100", smallNumber);


// question 7

let addWord = onlyStrings.map(num => num.slice(0, -1) + 'str');
console.log("remove last letter and add word 'str' ", addWord);