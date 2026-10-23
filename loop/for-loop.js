for(let i = 1; i <= 3; i++){
    console.log(i);
}

for (var i = 0; i < 3; i++) {
    // Loop executes three times.
}
console.log("After the loop new value of i is: " + i); // Output: 3

// we can access the variable i outside the loop because we are using var keyword.

for (let j = 0; j < 3; j++) {
    // Loop executes three times.
}

console.log(j); // Output: ReferenceError: j is not defined