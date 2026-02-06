function zmiana(nazwa) {
    let onas = document.getElementById("blokonas");
    let umiejetnosci = document.getElementById("umiejetnosci");
    let cena = document.getElementById("blokcena");
    let kontakt = document.getElementById("blokkontakt");
    let rezerwuj = document.getElementById("blokrezerwuj");

    if (nazwa == "onas") {
        onas.style.display = "block";
        umiejetnosci.style.display = "none";
        cena.style.display = "none";
        kontakt.style.display = "none";
        rezerwuj.style.display = "none";
    } else if (nazwa == "umiej") {
        onas.style.display = "none";
        umiejetnosci.style.display = "block";
        cena.style.display = "none";
        kontakt.style.display = "none";
        rezerwuj.style.display = "none";
    } else if (nazwa == "cena") {
        onas.style.display = "none";
        umiejetnosci.style.display = "none";
        cena.style.display = "block";
        kontakt.style.display = "none";
        rezerwuj.style.display = "none";
    } else if (nazwa == "kontakt") {
        onas.style.display = "none";
        umiejetnosci.style.display = "none";
        cena.style.display = "none";
        kontakt.style.display = "block";
        rezerwuj.style.display = "none";
    } else if (nazwa == "zarezerwuj") {
        onas.style.display = "none";
        umiejetnosci.style.display = "none";
        cena.style.display = "none";
        kontakt.style.display = "none";
        rezerwuj.style.display = "block";
    }
}