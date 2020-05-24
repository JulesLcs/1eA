function main(){


    console.log("Titre de la page : "+document.title);

    console.log("Type de contenu de la page : "+document.body);

    console.log("La troisième bande d'annonce est : "+document.getElementsByTagName("a")[2].href);
    
    console.log("La titre GONE GIRL est de type : "+document.getElementsByClassName("titre")[0]);
    
    console.log("Notre page contient "+document.querySelectorAll("p").length+" paragraphes et "+document.querySelectorAll("img").length+" images");
    
    console.log("Notre page contient "+document.querySelectorAll(".synopsis > h2").length+" synopsis de films");
    
    console.log("La première rubrique des films date de l'année "+document.querySelector("h1").innerHTML);
    console.log("Il existe "+document.getElementById("2016").querySelectorAll(".film").length+" films sous la rubrique 2016");
    
    console.log("Synopsis du film : "+document.getElementsByClassName("titre")[1].innerHTML+" :");

    console.log(document.getElementById("turing").innerHTML);
    
}

main();