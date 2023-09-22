let boite = document.getElementById("maliste")

function item(){
    let descr = document.getElementById("desc").value
    let valeur = document.getElementById("valeur").value

    let p = document.createElement("p")
    p. innerText = `${descr} et ${valeur}`
    boite.appendChild(p)





    document.getElementById("desc").value = "";
    document.getElementById("valeur").value = "";
}

