let boite = document.getElementById("maliste")

function item(){
    let descr = document.getElementById("desc").value
    let valeur = document.getElementById("valeur").value


    let b = document.createElement("div")
    b. innerHTML = `${descr}`

    let span = document.createElement("span")
    span. innerHTML = `${valeur} $`
    b.appendChild(span)

    boite.appendChild(b)

    //Ajouter au total
    let total = document.getElementById("nbr").value
    document.getElementById("nbr")



    //Vide les inputs pour ajouter un item
    document.getElementById("desc").value = "";
    document.getElementById("valeur").value = "";
}

function clear(){
    document.getElementById("desc").value = "";
    document.getElementById("valeur").value = "";
}