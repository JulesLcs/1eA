function addSegments(digitId){

    // TODO : compléter
    let digit = document.querySelector(digitId);
    for(let i = 0; i < 7; i++){
        digit.innerHTML = digit.innerHTML + "<div class=\"segment" + i + " segment off\"></div>";
    }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];

    // TODO : compléter
    for(let j = 0; j < 7; j++){
        if(segmentStates[value][j] == 1){
            document.querySelector('#' + digitId).querySelector(".segment" +j).className = "segment segment" +j ;
        }else{
            document.querySelector('#' + digitId).querySelector(".segment "+j).className = "segment segment" + j + "off";
        }
    }
}




function init(){

    // TODO : compléter
    addSegments("#hours-tens");
    addSegments("#hours-units");
    addSegments("#minutes-tens");
    addSegments("#minutes-units");
    addSegments("#seconds-tens");
    addSegments("#seconds-units");
}



function main(){

    init();

    // TODO : compléter
}


main();
