var rosu = 0;
var verde = 0;
var albastru = 0;
var gri_deschis = 0;
var gri_inchis = 640;


function generateSquares() {

    var x = 0;
    var i;
    var suprafata = document.createElement("DIV");
    suprafata.className = "suprafata";
    document.body.appendChild(suprafata);

    for (i = 0; i < 640; i++) {
        var patrat = document.createElement("DIV");
        x++
        patrat.id = "patrat_" + x.toString();
        patrat.onclick = function () { coloreaza(this.id) };
        suprafata.appendChild(patrat);
    }
}

function coloreaza(id) {
    if (document.getElementById(id).style.backgroundColor == "red") {
        document.getElementById(id).style.backgroundColor = "green";

        verde += 1;
        document.getElementById("verde").innerText = "Verde: " + verde.toString();

        rosu -= 1;
        document.getElementById("rosu").innerText = "Rosu: " + rosu.toString();
    }
    else if (document.getElementById(id).style.backgroundColor == "green") {
        document.getElementById(id).style.backgroundColor = "blue";

        albastru += 1;
        document.getElementById("albastru").innerText = "Albastru: " + albastru.toString();

        verde -= 1;
        document.getElementById("verde").innerText = "Verde: " + verde.toString();
    }
    else if (document.getElementById(id).style.backgroundColor == "blue") {
        document.getElementById(id).style.backgroundColor = "grey";

        gri_deschis += 1;
        document.getElementById("gri_deschis").innerText = "Gri Deschis: " + gri_deschis.toString();

        albastru -= 1;
        document.getElementById("albastru").innerText = "Albastru: " + albastru.toString();
    }
    else if (document.getElementById(id).style.backgroundColor == "grey") {
        document.getElementById(id).style.backgroundColor = "rgb(29, 29, 29)";

        gri_inchis += 1;
        document.getElementById("gri_inchis").innerText = "Gri Inchis: " + gri_inchis.toString();

        gri_deschis -= 1;
        document.getElementById("gri_deschis").innerText = "Gri Deschis: " + gri_deschis.toString();
    }
    else {
        document.getElementById(id).style.backgroundColor = "red";

        rosu += 1;
        document.getElementById("rosu").innerText = "Rosu: " + rosu.toString();

        gri_inchis -= 1;
        document.getElementById("gri_inchis").innerText = "Gri Inchis: " + gri_inchis.toString();
    }
}
