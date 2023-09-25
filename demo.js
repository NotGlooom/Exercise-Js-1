// Commentaire sur une ligne

/* Multi ligne
*
* */
/*
let uneVariable = 2;
const Une_Constante = 5;

console.log(uneVariable)
uneVariable = 4;
console.log(uneVariable)
console.log(Une_Constante)
console.log(typeof uneVariable)
if(uneVariable){
    console.log("True")
}

// Switch (serie des else if
let chaine = 1;
switch (chaine){
    case 1:
        console.log("1 format nombre")
        break;
    case "1":
        console.log("1 format texte")
        break;
    default:
        console.log("Default")
        break;
}

// Les boucles
for(let i=1; i<=5; i++){
    console.log(i)
}

// while
let i=1
while(1<=5){
    console.log(i)
    i++;
}



let variable = "fichier"
console.log(`Voir le ${variable} au \\chemin...`);
console.log(variable.length)
*/

/**
 * La fonction bonjour permet de saluer une personne
 * @param nom la personne a saluer
 * @returns {string} La phrase de salutation
 */
function bonjour(nom){
    return "bonjour "+nom
}
console.log(bonjour("Jean"))


let plus = 12
function tester(){
    let total = document.getElementById("text").innerHTML

    total = parseInt(total) + plus
    console.log(total)

    document.getElementById("text").innerHTML = `${total}$`
}









