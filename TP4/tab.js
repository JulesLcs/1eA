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
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            t.push(array[i][j]);
        }
    }
    return t;
}
function name(nameList,addName){
    for(let i = 0; i < nameList.length; i++){
        console.log(nameList[i]);
    }
    nameList.pop();
    nameList.push(addName);
    return nameList;
}
function mult(){
    for(let i = 1 ; i < 11;i++){
        for(let  j = 1; j < 11; j++){
        console.log(i*j);
       }
       console.log("////////\r");
    }
}


function chiffrementCesar(message, key){
    let newMessage = "";
    let ascii = 0;
    for(let i = 0; i < message.length;i++){
        if(message[i]!= " "){
        ascii = message.charCodeAt(i);
        if(ascii > 64 && ascii < 91 ||  ascii > 96 && ascii < 123){
            ascii = ascii + key;
        }
        if(message[i] == message[i].toLowerCase()){
            if(ascii > 122){
                ascii = ascii - 26;
            }
            if(ascii < 97){
                ascii = ascii + 26;
            }
        }
        else{
            if(ascii > 90){
                ascii = ascii - 26;
            }
            if(ascii < 65){
                ascii = ascii + 26;
            }
        }
        newMessage =  newMessage + String.fromCharCode(ascii);
    }
        else{
            newMessage = newMessage + " ";
        }
    }   
    return newMessage;
 }
function dechiffrement3(message, key){
    let dekey = -key;
    let newMessage = chiffrementCesar(message, dekey);
    return newMessage;
}
/*function chiffrementViginere(message, key){
    let newMessage ="";
    let ascii = 0;
  
}*/ //je n'arrive pas à le coder.