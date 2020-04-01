function sum(numbers){
    let s = 0;
//    for(let i = 0; i < numbers.length;i++){
//        s = s + numbers[i];
//    }
    for(let number of numbers){
        s = s + number;
   }
    return s;
}
function longestWord(words){
    let lw ="";
    for(let i = 0; i < words.length; i++){
        if(words[i].length > lw.length){
            lw = words[i];
        }
    }
    return lw;
}
function range(min, max, step){
    let t = [];
        while(min <= max){
            t.push(min);
            min = min + step;
        }
    return t;
}
function nbOccurences(wordList, word){
    let occ = 0;
    let wordsList = wordList.split(" ");
    for(let i = 0; i < wordsList.length;i++){
        if(wordsList[i] === word){
            occ= occ + 1;
        }
    }
    return occ;
}
function flatten2D(array){
    let t = [];
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array[i].length; ++j){
            t.push(array[i][j]);
        }
    }
    return t;
}
