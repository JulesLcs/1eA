
console.log("le titre de la page est : " +document.title );

console.log("Le nombre de lignes est : " + document.querySelectorAll("tr").length);

console.log("Le nombre de colonnes est : " + document.querySelectorAll("th").length);

console.log("Le nombre de semestres est : " + (document.querySelectorAll("tr").length-1)/2);

console.log("Le note de S5 de E1 est : " + document.querySelector("#note1").innerHTML);

console.log("Le note de S5 de E2 est : " + document.querySelector("#note2").innerHTML);

console.log("le note de S5 de E1 modifié est :" + document.querySelector("#note1").innerHTML.modif);