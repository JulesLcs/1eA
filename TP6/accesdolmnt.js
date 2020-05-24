function main(){

    
    let synopsisImitationGame = document.getElementsByClassName('synopsis')[1].innerHTML;
    console.log('===============================================');

    console.log('Titre de la page : ' + document.title);

    console.log('Type de contenue de la page : ' + document.body);

    console.log('La troisième bande annonce est : ' + document.getElementById('ba'));

    console.log('===============================================');

    console.log('Le titre GONE GIRL est de type : ' + document.getElementsByTagName('h2')[0]);

    console.log('===============================================');

    console.log('Notre page contient ' + document.querySelectorAll('p').length + ' paragraphes et ' + document.querySelectorAll('img').length; + ' images.');

    console.log('========================================');

    console.log('Notre page contient ' + document.getElementsByClassName('s').length; + ' synopsis');

    console.log('========================================');

    console.log("La première rubrique de film date de l'année : " + document.getElementsByTagName("h1")[0].innerHTML);

    console.log('========================================');

    console.log('Il existe ' + document.getElementsByClassName('2016').length + ' films sous la rubrique 2016');

    console.log('========================================');

    console.log('Synopsis du film IMITATION GAME : ' + document.getElementsByClassName('s')[1].innerHTML);

}

main();