function main(){ 
    let t = document.querySelector("#EndTab")
    let titre = document.title;
    let lignes = document.querySelectorAll("tr").length;
    let colonnes = document.querySelectorAll("th").length
    let semestres = (document.querySelectorAll("tr").length-1)/2;
    let S5E1 = document.querySelector("#note1").innerText;
    let S5E2 = document.querySelector("#note2").innerText;

    let title = document.createElement("p");
    let lines = document.createElement("p");
    let columns = document.createElement("p");
    let semesters = document.createElement("p");
    let note1 = document.createElement("tp");
    let note2 = document.createElement("p");
    let text = document.createElement("textarea");

    document.querySelector("#note1").innerText = parseInt(S5E1)+2;
    document.querySelector("#note1").style.fontSize = "50px";
    document.querySelector("#note1").style.color = "red";


    t.innerText = "Titre : " + titre;
    lines.innerText = "Lignes : " + lignes;
    columns.innerText = "Colonnes : " + colonnes;
    semesters.innerText  ="Semestres : " + semestres;
    note1.innerText = "\nNote de S5 E1 : " + S5E1;
    note2.innerText = "Note de S5 E2 : " + S5E2 +  "\n";





    t.appendChild(lines);
    lines.appendChild(columns); 
    columns.appendChild(semesters);
    semesters.appendChild(note1);
    note1.appendChild(note2);
    note2.appendChild(text);

    }
    
    main();
