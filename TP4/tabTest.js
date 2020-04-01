function sumTest(){
    console.log( sum([]) ); // => 0
    console.log( sum([42,404,1337]) ); // => 1783
}
function longestWordTest(){
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) ); // => different
}
function rangeTest(){
    console.log( range(3, 8, 1) ); // => [3, 4, 5, 6, 7, 8]
    console.log( range(40, 90, 20) ); // => [40, 60, 80]
}
function occuTest(){
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1
}
function flattenTest(){
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]
}
