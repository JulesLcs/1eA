function get2DContext(id){
	let canvas = document.getElementById(id);
	let context = canvas.getContext("2d");
	return context;
}
function canvasApp(context){
    context.beginPath();
    context.lineWidth= 3 ;
    context.fillStyle="yellow";
    context.strokeStyle="black";
    context.arc(100, 100, 75, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle="black";
    context.arc(65, 70, 10, 0, 2* Math.PI);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle="black";
    context.arc(135, 70, 10, 0, 2* Math.PI);
    context.closePath();
    context.fill();

    context.beginPath();
    lineWidth = 6;
    context.strokeStyle="black";
    context.arc(99, 120, 35, 0, Math.PI);
    context.stroke();

    context.textBaseline="middle";
    context.font='20px sans-serif';
    context.fillText("Hello Canvas!", 45, 200);
}
function DisplayDateTime(){

    let date = document.getElementById("date");
    let heure = document.getElementById("heure");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let event = new Date(); 
    date.innerText = event.toLocaleDateString('fr-FR', options);
    heure.innerText = event.toLocaleTimeString('fr-FR');
}
function displayDecrementSeconds(decrement){
    let time = document.getElementById("dessin");
    if(decrement == 0){
        time.innerHTML= "Le dessin est affiché ci-dessous";
        let context = get2DContext("smiley");
        canvasApp(context);
    }else{
        time.innerHTML = "Le dessin va s'afficher après "+ decrement;
        setTimeout(displayDecrementSeconds, 1000, decrement-1);
    }
}
function main(){
    setInterval(DisplayDateTime,1000);
    displayDecrementSeconds(60);
}
main();
