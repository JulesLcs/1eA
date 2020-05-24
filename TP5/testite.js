  function testAbs() {
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);
    console.log(absNumbers); // => [42, 3, 0, 1, 100]
    console.log(numbers); // => [-42, 3, 0, -1, 100]
}

function testEvenOnly() {
    console.log(evenOnly([0, 1, 2, 3, 4])); // => [0, 2, 4] 
}

function testSum() {
    console.log(sum([0, 1, 2, 3, 4])); // => [0, 2, 4] 
}
function test2D() {
    console.log(flatten2D([
        [0, 1],
        [1, 2, 3]
    ])); // => [0, 2, 4] 
}
function testRemoveDuplicates(values) {
    console.log( removeDuplicates([]) );                  // => []
console.log( removeDuplicates([1,2,3,4]) );           // => [1,2,3,4]
console.log( removeDuplicates([1,2,3,2,4,3,1,1]) );   // => [1,2,3,4]
}

