function randomColor(){
    return Math.floor(Math.random() * Math.floor(256));
}
function ChangeColor(){
    let e = document.getElementById("change");
    let color = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
    e.style.backgroundColor = color ;
}
function coordinates(mouseEvent){
    let e = document.getElementById("change2");
    let x = mouseEvent.clientX;
    let y = mouseEvent.clientY;
    console.log("Client coords : ("+x+"," +y+")");
    let color = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
    e.style.backgroundColor = color ;
}
function main(){
    let e = document.getElementById("change");
    e.addEventListener("click", ChangeColor);
    let e2 = document.getElementById("change2");
    e2.addEventListener("mouseover",coordinates);
}

main();