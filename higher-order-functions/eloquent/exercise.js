// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr){
	let emptyArr = [];

	arr.forEach((elm,i, arr) => {
		emptyArr = [...emptyArr, ...elm]
	});

	console.log(emptyArr);
}

flatten(arrays);

// Challenge 2. Your own loop
// Your code here.

function loop(value, testfunction, updatefunction, bodyfunction){
	if(testfunction(value)){
		bodyfunction(value);
		loop(updatefunction(value), testfunction, updatefunction, bodyfunction)
	}

	else return;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
  // Your code here.
  function every(array, test) {
  let flag = true;

  array.forEach( (elm) => {
  	if (flag) {
  		flag = test(elm);
  	}
  });
  return flag;
};


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
